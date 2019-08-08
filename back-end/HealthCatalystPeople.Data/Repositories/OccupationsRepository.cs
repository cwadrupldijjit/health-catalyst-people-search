using System.Collections.Generic;
using System.Linq;
using HealthCatalystPeople.Data.Entities;
using HealthCatalystPeople.Data.Helpers;

namespace HealthCatalystPeople.Data.Repositories {
    public class OccupationsRepository : IOccupationsRepository {
        private readonly IStringCompareHelper _stringCompareHelper;

        public OccupationsRepository(IStringCompareHelper stringCompareHelper)
        {
            _stringCompareHelper = stringCompareHelper;
        }
        
        public IEnumerable<Occupation> FindOccupationByName(string name)
        {
            using (var db = ContextFactory.GetContext())
            {
                var lowerName = name.ToLower();

                return db.Occupations
                    .Where(o => o.Name.ToLower().Contains(lowerName))
                    .OrderBy(o => _stringCompareHelper.GetLevenshteinDistance(o.Name.ToLower(), lowerName))
                    .ToList();
            }
        }

        public Occupation InsertIfNotExists(Occupation occupation)
        {
            using (var db = ContextFactory.GetContext())
            {
                Occupation occupationRecord;

                var lowerOccupationName = occupation.Name.ToLower();
                
                if (db.Occupations.Any(o => o.Name.ToLower() == lowerOccupationName)) {
                    occupationRecord = db.Occupations.Where(o => o.Name.ToLower() == lowerOccupationName).FirstOrDefault();
                }
                else {
                    db.Occupations.Add(occupation);
                    db.SaveChanges();
                    occupationRecord = occupation;
                }

                return occupationRecord;
            }
        }

        public void RemoveIfNotReferenced(Occupation occupation)
        {
            using (var db = ContextFactory.GetContext())
            {
                if (!db.People.Any(p => p.OccupationId == occupation.Id)) {
                    db.Occupations.Remove(occupation);
                    db.SaveChanges();
                }
            }
        }
    }

    public interface IOccupationsRepository {
        IEnumerable<Occupation> FindOccupationByName(string name);
        Occupation InsertIfNotExists(Occupation occupation);
        void RemoveIfNotReferenced(Occupation occupation);
    }
}