using System.Linq;
using HealthCatalystPeople.Data.Entities;

namespace HealthCatalystPeople.Data.Repositories {
    public class AddressRepository : IAddressRepository {
        public void RemoveIfNotReferenced(Address address)
        {
            using (var db = ContextFactory.GetContext())
            {
                if (!db.People.Any(p => p.AddressId == address.Id)) {
                    db.Addresses.Remove(address);
                    db.SaveChanges();
                }
            }
        }
    }

    public interface IAddressRepository {
        void RemoveIfNotReferenced(Address address);
    }
}