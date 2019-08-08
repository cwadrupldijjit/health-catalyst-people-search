using System;
using System.Collections.Generic;
using System.Linq;
using AutoMapper;
using HealthCatalystPeople.Services.Dtos;

namespace HealthCatalystPeople.Services
{
    public class PaginationService : IPaginationService {
        private readonly IMapper _mapper;

        public PaginationService(IMapper mapper)
        {
            _mapper = mapper;
        }
        
        public IEnumerable<E> GetResults<E>(IEnumerable<E> resourceCollection, int pageSize, int pageNum, int highestPage)
        {
            var count = resourceCollection.Count();

            if (pageNum < 1) {
                pageNum = 1;
            }
            else if (highestPage < pageNum) {
                pageNum = highestPage;
            }

            int skipAmount;

            // Optionally can skip a certain amount and get the rest of the results by specifying a negative
            // number for pageSize and multiplying the absolute value of the pageSize with the current page
            // number; a zero pageSize will return all elements in the provided collection
            if (pageSize <= 0) {
                skipAmount = pageNum * Math.Abs(pageSize);
                pageSize = count - skipAmount;
            }
            else {
                skipAmount = (pageNum - 1) * Math.Abs(pageSize);
            }
            
            return resourceCollection
                .Skip(skipAmount)
                .Take(pageSize);
        }

        public PaginatedResults<D> GetPaginatedResults<E, D>(IEnumerable<E> results, PaginationOptions options)
        {
            var count = results.Count();
            var pageSize = options?.Count ?? count;

            if (pageSize == 0) {
                pageSize = count;
            }
            
            var highestPage = (int) Math.Ceiling((decimal) count / (pageSize != 0 ? Math.Abs(pageSize) : 1));
            var pageNum = options?.PageNumber ?? 1;

            if (pageNum > highestPage) {
                pageNum = highestPage;
            }
            else if (pageNum < 1) {
                pageNum = 1;
            }

            var paginatedResults = new PaginatedResults<D>
            {
                Total = count,
                CurrentPage = pageNum,
                LastPage = highestPage,
                itemsPerPage = pageSize,
                Results = _mapper.Map<List<D>>(GetResults(results, pageSize, pageNum, highestPage).ToList()),
            };

            if (pageNum + 1 <= highestPage) {
                paginatedResults.NextPage = pageNum + 1;
            }
            if (pageNum - 1 >= 1) {
                paginatedResults.PreviousPage = pageNum - 1;
            }

            return paginatedResults;
        }
    }

    public interface IPaginationService {
        IEnumerable<E> GetResults<E>(IEnumerable<E> resourceCollection, int pageSize, int pageNum, int highestPage);
        PaginatedResults<D> GetPaginatedResults<E, D>(IEnumerable<E> results, PaginationOptions options);
    }
}
