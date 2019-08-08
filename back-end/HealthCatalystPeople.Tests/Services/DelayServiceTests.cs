using System;
using System.Threading.Tasks;
using HealthCatalystPeople.Services;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Shouldly;

namespace HealthCatalystPeople.Tests.Services {
    [TestClass]
    public class DelayServiceTests {
        [TestMethod]
        public void GivenDuration_ShouldDelayThatLong()
        {
            var delayAmount = 8000;
            var before = DateTime.Now;
            DelayService.Pause(delayAmount);
            var after = DateTime.Now;

            before.ToFileTime().ShouldBeLessThanOrEqualTo(after.ToFileTime() - (delayAmount * 10000));
        }

        [TestMethod]
        public void GivenNoArguments_ShouldDelaySomeAmountOfTimeNotExceeding8Seconds()
        {
            var task1 = CallDelayWrappedInTask();
            var task2 = CallDelayWrappedInTask();
            var task3 = CallDelayWrappedInTask();
            var task4 = CallDelayWrappedInTask();

            var task1Completed = task1.Wait(8500);
            var task2Completed = task2.Wait(8500);
            var task3Completed = task3.Wait(8500);
            var task4Completed = task4.Wait(8500);

            task1Completed.ShouldBe(true);
            task2Completed.ShouldBe(true);
            task3Completed.ShouldBe(true);
            task4Completed.ShouldBe(true);
        }

        private Task CallDelayWrappedInTask()
        {
            return Task.Run(() => DelayService.Pause());
        }
    }
}