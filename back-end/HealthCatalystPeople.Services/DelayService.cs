using System;
using System.Threading;

namespace HealthCatalystPeople.Services {
    public static class DelayService
    {
        private static Random randomGenerator = new Random();
        
        public static void Pause(int duration = -1)
        {
            if (duration == -1) {
                duration = getRandomDuration();
            }
            
            Thread.Sleep(duration);
        }

        private static int getRandomDuration()
        {
            return randomGenerator.Next(0, 8) * 1000;
        }
    }
}