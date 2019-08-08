using System.Collections.Generic;
using System.Linq;
using AutoMapper;
using HealthCatalystPeople.Services;
using HealthCatalystPeople.Services.Dtos;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Moq;
using Shouldly;

namespace HealthCatalystPeople.Tests.Services
{
    [TestClass]
    public class PaginationServiceTests
    {
        private List<PersonDto> smallList;
        private List<PersonDto> mediumList;
        private List<PersonDto> largeList;

        public PaginationServiceTests()
        {
            smallList = new List<PersonDto>
            {
                new PersonDto { FirstName = "Kermit", LastName = "The Frog" },
                new PersonDto { FirstName = "Miss", LastName = "Piggy" },
                new PersonDto { FirstName = "Fozzie", LastName = "Bear" },
                new PersonDto { FirstName = "Gonzo", LastName = "" },
            };

            mediumList = new List<PersonDto>();
            mediumList.AddRange(smallList);
            mediumList.AddRange(new List<PersonDto>
            {
                new PersonDto { FirstName = "Rizzo", LastName = "The Rat" },
                new PersonDto { FirstName = "Sam", LastName = "Eagle" },
                new PersonDto { FirstName = "Bunsen", LastName = "Honeydew" },
                new PersonDto { FirstName = "Doctor", LastName = "Teeth" },
                new PersonDto { FirstName = "Crazy", LastName = "Harry" },
                new PersonDto { FirstName = "Rowlf", LastName = "The Dog" },
                new PersonDto { FirstName = "Scooter", LastName = "" },
                new PersonDto { FirstName = "Animal", LastName = "" },
            });

            largeList = new List<PersonDto>();
            largeList.AddRange(mediumList);
            largeList.AddRange(new List<PersonDto>
            {
                new PersonDto { FirstName = "Link", LastName = "Hogthrob" },
                new PersonDto { FirstName = "Sweetums", LastName = "" },
                new PersonDto { FirstName = "Robin", LastName = "The Frog" },
                new PersonDto { FirstName = "Camilla", LastName = "The Chicken" },
                new PersonDto { FirstName = "Doctor", LastName = "Strangepork" },
                new PersonDto { FirstName = "Beaker", LastName = "" },
                new PersonDto { FirstName = "Swedish", LastName = "Chef" },
                new PersonDto { FirstName = "Lew", LastName = "Zealand" },
                new PersonDto { FirstName = "Marvin", LastName = "Suggs" },
            });
        }
        
        [TestMethod]
        public void GivenSmallSetAndLargeOptions_ResultsInAllReturned()
        {
            var mapperMock = new Mock<IMapper>();
            mapperMock
                .Setup(x => x.Map<List<PersonDto>>(It.IsAny<List<PersonDto>>()))
                .Returns<List<PersonDto>>(x => {
                    return x;
                });
            var paginationService = new PaginationService(mapperMock.Object);

            var paginatedResults = paginationService.GetPaginatedResults<PersonDto, PersonDto>(smallList, new PaginationOptions{
                Count = 10,
                PageNumber = 1,
            });

            paginatedResults.Results.Count().ShouldBe(smallList.Count());
        }
        
        [TestMethod]
        public void GivenMediumSetAndPageSize10_ResultsIn10Returned()
        {
            var mapperMock = new Mock<IMapper>();
            mapperMock
                .Setup(x => x.Map<List<PersonDto>>(It.IsAny<List<PersonDto>>()))
                .Returns<List<PersonDto>>(x => {
                    return x;
                });
            var paginationService = new PaginationService(mapperMock.Object);

            var paginatedResults = paginationService.GetPaginatedResults<PersonDto, PersonDto>(mediumList, new PaginationOptions{
                Count = 10,
                PageNumber = 1,
            });

            paginatedResults.Results.Count().ShouldBe(10);
        }
        
        [TestMethod]
        public void GivenMediumSetAndPage2Size10_ResultsIn2Returned()
        {
            var mapperMock = new Mock<IMapper>();
            mapperMock
                .Setup(x => x.Map<List<PersonDto>>(It.IsAny<List<PersonDto>>()))
                .Returns<List<PersonDto>>(x => {
                    return x;
                });
            var paginationService = new PaginationService(mapperMock.Object);

            var paginatedResults = paginationService.GetPaginatedResults<PersonDto, PersonDto>(mediumList, new PaginationOptions{
                Count = 10,
                PageNumber = 2,
            });

            paginatedResults.Results.Count().ShouldBe(2);
        }

        [TestMethod]
        public void GivenMediumSetAndHighPageNumber_ResultsInFinalPageReturned()
        {
            var mapperMock = new Mock<IMapper>();
            mapperMock
                .Setup(x => x.Map<List<PersonDto>>(It.IsAny<List<PersonDto>>()))
                .Returns<List<PersonDto>>(x => {
                    return x;
                });
            var paginationService = new PaginationService(mapperMock.Object);

            var paginatedResults = paginationService.GetPaginatedResults<PersonDto, PersonDto>(mediumList, new PaginationOptions{
                Count = 10,
                PageNumber = 8,
            });

            paginatedResults.Results.Count().ShouldBe(2);
        }
        
        [TestMethod]
        public void GivenLargeSetAndNegativePageSize_ResultsInAllBut5Returned()
        {
            var mapperMock = new Mock<IMapper>();
            mapperMock
                .Setup(x => x.Map<List<PersonDto>>(It.IsAny<List<PersonDto>>()))
                .Returns<List<PersonDto>>(x => {
                    return x;
                });
            var paginationService = new PaginationService(mapperMock.Object);

            var paginatedResults = paginationService.GetPaginatedResults<PersonDto, PersonDto>(largeList, new PaginationOptions{
                Count = -5,
                PageNumber = 1,
            });

            paginatedResults.Results.Count().ShouldBe(largeList.Count() - 5);
        }
    }
}
