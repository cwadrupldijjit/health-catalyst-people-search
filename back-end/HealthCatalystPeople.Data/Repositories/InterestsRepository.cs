using System;
using System.Collections.Generic;
using System.Linq;
using HealthCatalystPeople.Data.Entities;
using HealthCatalystPeople.Data.Helpers;

namespace HealthCatalystPeople.Data.Repositories {
    public class InterestsRepository : IInterestsRepository
    {
        private readonly IStringCompareHelper _stringCompareHelper;

        public InterestsRepository(IStringCompareHelper stringCompareHelper)
        {
            _stringCompareHelper = stringCompareHelper;
        }

        public IEnumerable<Interest> GetAll()
        {
            using (var db = ContextFactory.GetContext()) {
                return db.Interests.ToList();
            }
        }

        public Interest GetById(int id)
        {
            using (var db = ContextFactory.GetContext()) {
                return db.Interests.Find(id);
            }
        }

        public IEnumerable<Interest> GetByName(string query)
        {
            using (var db = ContextFactory.GetContext()) {
                var lowercaseQuery = query.ToLower();

                return db.Interests
                    // ensure lowercase for case-insensitivity
                    .Where(i => 
                        i.Name
                            .ToLower()
                            .Contains(lowercaseQuery)
                    )
                    // similarity
                    .OrderBy(i => _stringCompareHelper.GetLevenshteinDistance(i.Name.ToLower(), lowercaseQuery))
                    .ToList();
            }
        }

        public List<Interest> InsertNewInterests(IEnumerable<Interest> interests)
        {
            using (var db = ContextFactory.GetContext()) {
                var updatedInterests = new List<Interest>();
                var newInterests = new List<Interest>();
                
                foreach (var interest in interests)
                {
                    if (interest.Id == 0 || interest.Id == -1) {
                        var matchingInterest = db.Interests.Where(i => i.Name.ToLower() == interest.Name.ToLower()).FirstOrDefault();

                        if (matchingInterest != null) {
                            updatedInterests.Add(matchingInterest);
                        }
                        else {
                            interest.Id = 0;
                            db.Interests.Add(interest);
                            updatedInterests.Add(interest);
                        }
                    }
                    else {
                        updatedInterests.Add(interest);
                    }
                }
                
                db.SaveChanges();

                return updatedInterests;
            }
        }
    }

    public interface IInterestsRepository
    {
        IEnumerable<Interest> GetAll();
        Interest GetById(int id);
        IEnumerable<Interest> GetByName(string query);
        List<Interest> InsertNewInterests(IEnumerable<Interest> interests);
    }
}