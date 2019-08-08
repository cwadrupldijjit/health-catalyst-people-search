using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using HealthCatalystPeople.Data.Entities;
using Microsoft.EntityFrameworkCore;

namespace HealthCatalystPeople.Data
{
    public class HealthCatalystPeopleContext : DbContext
    {
        public DbSet<Person> People { get; set; }
        public DbSet<Address> Addresses { get; set; }
        public DbSet<Interest> Interests { get; set; }
        public DbSet<PersonInterest> PersonInterests { get; set; }
        public DbSet<Occupation> Occupations { get; set; }
        
        // Static prepared field to ensure that it's only "prepared" once when constructed
        private static bool HasPrepared = false;

        public HealthCatalystPeopleContext(DbContextOptions<HealthCatalystPeopleContext> options) : base(options)
        {
            // Switch to prevent attempting to run migrations or seed method more than once per application lifecycle
            if (HasPrepared) return;

            try {
                Database.Migrate();
                Seed();
                HasPrepared = true;
            }
            catch (Exception e) {
                Debug.WriteLine(e);
            }
        }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            builder.Entity<Person>()
                .Property(p => p.Created)
                .HasDefaultValueSql("getdate()");
            
            builder.Entity<PersonInterest>()
                .HasKey(pi => new { pi.PersonId, pi.InterestId });
            builder.Entity<PersonInterest>()
                .HasOne<Person>(pi => pi.Person)
                .WithMany(p => p.PersonInterests)
                .HasForeignKey(pi => pi.PersonId);
            builder.Entity<PersonInterest>()
                .HasOne<Interest>(pi => pi.Interest)
                .WithMany(i => i.PersonInterests)
                .HasForeignKey(pi => pi.InterestId);
        }

        private void Seed()
        {
            if (People.Count() > 0) {
                // Don't re-seed database if people already exist in the database
                return;
            }

            // Ensure that the database is refreshed in case entities exist
            Addresses.RemoveRange(Addresses);
            Interests.RemoveRange(Interests);
            Occupations.RemoveRange(Occupations);

#region Occupations
            var jedi = new Occupation { Name = "Jedi" };
            var sith = new Occupation { Name = "Sith" };
            var senator = new Occupation { Name = "Senator" };
            var bountyHunter = new Occupation { Name = "Bounty Hunter" };
            var smuggler = new Occupation { Name = "Smuggler" };
            var moistureFarmer = new Occupation { Name = "Moisture Farmer" };
            var general = new Occupation { Name = "General" };
            var stormtrooper = new Occupation { Name = "Stormtrooper" };
            var droid = new Occupation { Name = "Droid" };
            var king = new Occupation { Name = "King" };
            var emperor = new Occupation { Name = "Emperor" };

            Occupations.AddRange(new List<Occupation>
            {
                jedi,
                sith,
                senator,
                bountyHunter,
                smuggler,
                moistureFarmer,
                general,
                stormtrooper,
                droid,
                king,
                emperor,
            });

            SaveChanges();
#endregion

#region Addresses
            // TODO: Change this to be accurate
            var jediTemple = new Address
            {
                AddressLine1 = "Jedi Temple",
                Region = "Senatorial District",
                City = "Coruscant",
                Planet = "Coruscant",
            };

            var millenniumFalcon = new Address
            {
                AddressLine1 = "Millennium Falcon",
                AddressLine2 = "Unknown Location",
                Planet = "Galaxy",
            };

            var alderaan = new Address
            {
                AddressLine1 = "Great Palace",
                City = "Organa City",
                Region = "Royal PLains",
                Planet = "Alderaan",
            };

            var larsFarm = new Address
            {
                AddressLine1 = "Lars Farm",
                Region = "Desolate Plains",
                Planet = "Tatooine",
            };

            var bensHut = new Address
            {
                AddressLine1 = "Ben's Hut",
                Region = "Dune Sea",
                Planet = "Tatooine",
            };

            var slaveII = new Address
            {
                AddressLine1 = "Slave II",
                Region = "Location Unknown",
                Planet = "Space",
            };

            var deathStar = new Address
            {
                AddressLine1 = "Corridors 53 x 78",
                AddressLine2 = "Barracks 893a",
                City = "Residential Level",
                Region = "Northeastern Quadrant",
                Planet = "Galaxy",
            };

            var senateBuilding = new Address
            {
                AddressLine1 = "Senate Building",
                AddressLine2 = "Accommodations Section, Ste 361",
                Region = "Senatorial District",
                City = "Coruscant",
                Planet = "Coruscant",
            };

            var imperialPalace = new Address
            {
                AddressLine1 = "Imperial Palace",
                AddressLine2 = "Emperor's Suite",
                Region = "Imperial District",
                City = "Coruscant",
                Planet = "Coruscant",
            };

            var dagobah = new Address
            {
                AddressLine1 = "Yoda's Hut",
                Region = "Forgotten Swamps",
                Planet = "Dagobah",
            };

            var unknown = new Address
            {
                AddressLine1 = "Unknown",
            };

            Addresses.AddRange(new List<Address>
            {
                jediTemple,
                millenniumFalcon,
                alderaan,
                larsFarm,
                bensHut,
                slaveII,
                deathStar,
                senateBuilding,
                imperialPalace,
                dagobah,
                unknown,
            });

            SaveChanges();
#endregion

#region Interests
            var flying = new Interest { Name = "Flying" };
            var meditating = new Interest { Name = "Meditating" };
            var fighting = new Interest { Name = "Fighting" };
            var eating = new Interest { Name = "Eating" };
            var farming = new Interest { Name = "Farming" };
            var politicalUpheaval = new Interest { Name = "Political Upheaval" };
            var socializing = new Interest { Name = "Socializing" };
            var racing = new Interest { Name = "Racing" };
            var tracking = new Interest { Name = "Tracking" };
            var familyTime = new Interest { Name = "Family Time" };
            var gambling = new Interest { Name = "Gambling" };
            var playingDejarik = new Interest { Name = "Playing Dejarik" };
            var theForce = new Interest { Name = "The Force" };
            var espionage = new Interest { Name = "Espionage" };
            var chances = new Interest { Name = "Chances" };
            var translating = new Interest { Name = "Translating" };
            var problemSolving = new Interest { Name = "Problem Solving" };

            Interests.AddRange(new List<Interest>
            {
                flying,
                meditating,
                fighting,
                eating,
                farming,
                politicalUpheaval,
                socializing,
                racing,
                tracking,
                familyTime,
                gambling,
                playingDejarik,
                theForce,
                espionage,
                chances,
                translating,
                problemSolving,
            });

            SaveChanges();
#endregion

#region People
            var luke = new Person
            {
                FirstName = "Luke",
                LastName = "Skywalker",
                OccupationId = moistureFarmer.Id,
                AddressId = larsFarm.Id,
                Age = 16,
                Picture = "https://upload.wikimedia.org/wikipedia/en/9/9b/Luke_Skywalker.png",
                Email = "getmeoutahere@imail.net",
                Notes = "Restless and sometimes whiny youth; prefers to spend time with friends picking up power converters; has much potential, but does not yet know it",
            };
            
            var leia = new Person
            {
                FirstName = "Leia",
                LastName = "Organa",
                OccupationId = senator.Id,
                AddressId = senateBuilding.Id,
                Age = 16,
                Picture = "https://upload.wikimedia.org/wikipedia/en/1/1b/Princess_Leia%27s_characteristic_hairstyle.jpg",
                Email = "lorgana@imperialsenate.gov",
                Notes = "Adopted daughter of Bail Organa, royalty of Alderaan; schooled on all sorts of craft between espionage, deception, political positioning, marksmanship, and leadership; also unaware of her great Force ability",
            };

            var han = new Person
            {
                FirstName = "Han",
                LastName = "Solo",
                Age = 28,
                OccupationId = smuggler.Id,
                AddressId = millenniumFalcon.Id,
                Picture = "https://upload.wikimedia.org/wikipedia/en/b/be/Han_Solo_depicted_in_promotional_image_for_Star_Wars_%281977%29.jpg",
                Email = "solo@freightrunnersassociation.org",
                Notes = "Han is a proficient smuggler who also tends to make mistakes that get him into trouble; is very good at miraculously recovering from bad situations",
            };

            var chewie = new Person
            {
                FirstName = "Chewbacca",
                LastName = "",
                OccupationId = smuggler.Id,
                AddressId = millenniumFalcon.Id,
                Age = 107,
                Picture = "https://upload.wikimedia.org/wikipedia/en/6/6d/Chewbacca-2-.jpg",
                Email = "chewie@freightrunnersassociation.org",
                Notes = "A Wookiee who has a life-debt to Han and is his best friend; copilot of the Millennium Falcon; party to all of the antics Han has done",
            };

            var obiWan = new Person
            {
                FirstName = "Obi Wan",
                LastName = "Kenobi",
                OccupationId = jedi.Id,
                AddressId = bensHut.Id,
                Age = 74,
                Picture = "https://upload.wikimedia.org/wikipedia/en/3/32/Ben_Kenobi.png",
                Email = "ben@wanderinghermits.com",
                Notes = "Taking on the alias of Ben, he is really a Jedi in hiding; after battling and leaving his pupil, Anakin, for dead, he took Anakin's son to the remote Tatooine in an effort to hid his existance from the Galactic Empire; a proficient Jedi, though not as spry as he used to be",
            };

            var c3p0 = new Person
            {
                FirstName = "C-3PO",
                LastName = "",
                OccupationId = droid.Id,
                AddressId = larsFarm.Id,
                Age = 36,
                Picture = "https://upload.wikimedia.org/wikipedia/en/5/5c/C-3PO_droid.png",
                Email = "",
                Notes = "Protocol droid originally created by Anakin Skywalker; very good about telling everybody that can hear what the probabilities of something happening might be; excellent translator despite his extreme pessimism; bought by Lars from some Jawas who'd picked them up from the Dune Sea",
            };

            var r2d2 = new Person
            {
                FirstName = "R2D2",
                LastName = "",
                OccupationId = droid.Id,
                AddressId = larsFarm.Id,
                Age = 48,
                Picture = "https://upload.wikimedia.org/wikipedia/en/3/39/R2-D2_Droid.png",
                Email = "",
                Notes = "Astromech droid that is like the Swiss army knife of all droids; likes to live life on the edge and takes risks regularly; purchased by Owen Lars from some Jawas who'd picked him up in the trecherous rocky canyons near the Dune Sea",
            };

            var darthVader = new Person
            {
                FirstName = "Darth",
                LastName = "Vader",
                OccupationId = sith.Id,
                AddressId = deathStar.Id,
                Age = 44,
                Picture = "https://upload.wikimedia.org/wikipedia/en/7/76/Darth_Vader.jpg",
                Email = "vader@galacticempire.gov",
                Notes = "The sinister dark hand of the Emperor; used to be called Anakin Skywalker and was a Jedi of the Jedi Order based on Coruscant; after some very terrible life choices, he took up the new name and became a Sith; somehow never decided to check in on his new \"nephew\" (that has his same last name) which his uncle and aunt started looking after...",
            };

            var palpatine = new Person
            {
                FirstName = "Emperor",
                LastName = "Palpatine",
                OccupationId = emperor.Id,
                AddressId = imperialPalace.Id,
                Age = 86,
                Picture = "https://upload.wikimedia.org/wikipedia/en/8/8f/Emperor_RotJ.png",
                Email = "palpatine@galacticempire.gov",
                Notes = "Emperor over the Galactic Empire and Dark Lord of the Sith; favorite thing to do is electrocute his adversaries to death; dictatorial status definite",
            };

            var yoda = new Person
            {
                FirstName = "Yoda",
                LastName = "",
                OccupationId = jedi.Id,
                AddressId = dagobah.Id,
                Age = 308,
                Picture = "https://upload.wikimedia.org/wikipedia/en/9/9b/Yoda_Empire_Strikes_Back.png",
                Email = "",
                Notes = "Old and shriveled Jedi master; one of the few surviving Jedi in self-imposed exile; extremely powerful in the Force",
            };
            
            var bobaFett = new Person
            {
                FirstName = "Boba",
                LastName = "Fett",
                OccupationId = bountyHunter.Id,
                AddressId = slaveII.Id,
                Age = 34,
                Picture = "https://upload.wikimedia.org/wikipedia/en/3/3e/FettbobaJB.png",
                Email = "fett@mercenaryforhire.net",
                Notes = "Skilled bounty hunter, possibly the best in the galaxy; never fails and tracks his quarry carefully; would not recommend sending him an email directly; he will find you",
            };

            var bossk = new Person
            {
                FirstName = "Bossk",
                LastName = "",
                OccupationId = bountyHunter.Id,
                AddressId = unknown.Id,
                Age = 25,
                Picture = "https://vignette.wikia.nocookie.net/starwars/images/1/1d/Bossk.png/revision/latest?cb=20130219044712",
                Email = "bossk@mercenaryforhire.net",
                Notes = "Trandoshan whose brutal methods have been effective in tracking down and often killing his quarry; should be as intimidated about hiring him as you would be if he was looking for you",
            };
            
            var bail = new Person
            {
                FirstName = "Bail",
                LastName = "Organa",
                OccupationId = king.Id,
                AddressId = alderaan.Id,
                Age = 59,
                Picture = "https://upload.wikimedia.org/wikipedia/en/d/db/BailOrgana.jpeg",
                Email = "borgana@alderaan.gov",
                Notes = "King of Alderaan; part-time senator, though much of that is now handled by Leia; one of the founders of the Rebel Alliance, though as quiet about this fact as he can be so the imperial intelligence doesn't catch wind of it",
            };

            var owenLars = new Person
            {
                FirstName = "Owen",
                LastName = "Lars",
                OccupationId = moistureFarmer.Id,
                AddressId = larsFarm.Id,
                Age = 53,
                Picture = "https://vignette.wikia.nocookie.net/starwars/images/e/eb/OwenCardTrader.png/revision/latest?cb=20171108050140",
                Email = "owenlars@moisturefarmersunited.org",
                Notes = "Uncle to Luke and stepbrother to Anakin Skywalker; extremely fearful of the Empire, worried for their scrutiny if they were ever to find out that Luke was the son and heir to Anakin Skywalker, now Darth Vader",
            };

            var beruLars = new Person
            {
                FirstName = "Beru",
                LastName = "Lars",
                OccupationId = moistureFarmer.Id,
                AddressId = larsFarm.Id,
                Age = 56,
                Picture = "https://vignette.wikia.nocookie.net/starwars/images/c/cc/BeruCardTrader.png/revision/latest?cb=20170713063118",
                Email = "berulars@moisturefarmersunited.org",
                Notes = "Aunt to Luke and wife to Owen Lars; considerably less fearful of the Empire than her husband; more understanding of Luke's situation than her husband",
            };
            
            People.AddRange(new List<Person>
            {
                luke,
                leia,
                han,
                chewie,
                obiWan,
                c3p0,
                r2d2,
                darthVader,
                palpatine,
                yoda,
                bobaFett,
                bossk,
                bail,
                owenLars,
                beruLars,
            });

            SaveChanges();
#endregion

#region PersonInterests
            PersonInterests.AddRange(new List<PersonInterest>
            {
                new PersonInterest { PersonId = luke.Id, InterestId = flying.Id },
                new PersonInterest { PersonId = luke.Id, InterestId = fighting.Id },
                new PersonInterest { PersonId = luke.Id, InterestId = theForce.Id },
                new PersonInterest { PersonId = luke.Id, InterestId = socializing.Id },
                new PersonInterest { PersonId = leia.Id, InterestId = politicalUpheaval.Id },
                new PersonInterest { PersonId = leia.Id, InterestId = fighting.Id },
                new PersonInterest { PersonId = leia.Id, InterestId = espionage.Id },
                new PersonInterest { PersonId = han.Id, InterestId = fighting.Id },
                new PersonInterest { PersonId = han.Id, InterestId = flying.Id },
                new PersonInterest { PersonId = han.Id, InterestId = gambling.Id },
                new PersonInterest { PersonId = chewie.Id, InterestId = fighting.Id },
                new PersonInterest { PersonId = chewie.Id, InterestId = flying.Id },
                new PersonInterest { PersonId = chewie.Id, InterestId = gambling.Id },
                new PersonInterest { PersonId = chewie.Id, InterestId = playingDejarik.Id },
                new PersonInterest { PersonId = obiWan.Id, InterestId = fighting.Id },
                new PersonInterest { PersonId = obiWan.Id, InterestId = theForce.Id },
                new PersonInterest { PersonId = obiWan.Id, InterestId = meditating.Id },
                new PersonInterest { PersonId = c3p0.Id, InterestId = translating.Id },
                new PersonInterest { PersonId = c3p0.Id, InterestId = chances.Id },
                new PersonInterest { PersonId = r2d2.Id, InterestId = problemSolving.Id },
                new PersonInterest { PersonId = darthVader.Id, InterestId = theForce.Id },
                new PersonInterest { PersonId = darthVader.Id, InterestId = fighting.Id },
                new PersonInterest { PersonId = darthVader.Id, InterestId = flying.Id },
                new PersonInterest { PersonId = darthVader.Id, InterestId = meditating.Id },
                new PersonInterest { PersonId = palpatine.Id, InterestId = meditating.Id },
                new PersonInterest { PersonId = palpatine.Id, InterestId = theForce.Id },
                new PersonInterest { PersonId = palpatine.Id, InterestId = politicalUpheaval.Id },
                new PersonInterest { PersonId = bobaFett.Id, InterestId = fighting.Id },
                new PersonInterest { PersonId = bobaFett.Id, InterestId = problemSolving.Id },
                new PersonInterest { PersonId = bobaFett.Id, InterestId = espionage.Id },
                new PersonInterest { PersonId = bobaFett.Id, InterestId = flying.Id },
                new PersonInterest { PersonId = bobaFett.Id, InterestId = tracking.Id },
                new PersonInterest { PersonId = bossk.Id, InterestId = fighting.Id },
                new PersonInterest { PersonId = bossk.Id, InterestId = espionage.Id },
                new PersonInterest { PersonId = bossk.Id, InterestId = tracking.Id },
                new PersonInterest { PersonId = bail.Id, InterestId = familyTime.Id },
                new PersonInterest { PersonId = bail.Id, InterestId = politicalUpheaval.Id },
                new PersonInterest { PersonId = bail.Id, InterestId = espionage.Id },
                new PersonInterest { PersonId = owenLars.Id, InterestId = farming.Id },
                new PersonInterest { PersonId = owenLars.Id, InterestId = eating.Id },
                new PersonInterest { PersonId = beruLars.Id, InterestId = farming.Id },
                new PersonInterest { PersonId = beruLars.Id, InterestId = familyTime.Id },
                new PersonInterest { PersonId = beruLars.Id, InterestId = eating.Id },
                new PersonInterest { PersonId = yoda.Id, InterestId = meditating.Id },
                new PersonInterest { PersonId = yoda.Id, InterestId = theForce.Id },
                new PersonInterest { PersonId = yoda.Id, InterestId = fighting.Id },
            });

            SaveChanges();
#endregion
        }
    }
}
