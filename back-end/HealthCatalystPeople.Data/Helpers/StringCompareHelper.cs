using System;

namespace HealthCatalystPeople.Data.Helpers {
    public class StringCompareHelper : IStringCompareHelper {
        /// <summary>
        /// Levenshtein string similarity comparison
        /// </summary>
        /// <param name="s1">First string to compare</param>
        /// <param name="s2">Second string to compare</param>
        /// <returns>
        ///     An int representing the "distance" it would need to travel in order
        ///     to be considered similar or the same
        /// </returns>
        public int GetLevenshteinDistance(string s1, string s2)
        {
            var s1Length = s1.Length;
            var s2Length = s2.Length;

            var matrix = new int[s1Length + 1, s2Length + 1];

            for (var i = 0; i < s1Length; i++) {
                matrix[i, 0] = i;
            }

            for (var i = 0; i < s2Length; i++) {
                matrix[0, i] = i;
            }

            for (var i = 1; i < s1Length; i++) {
                var s1Elem = s1[i - 1];

                for (var j = 1; j < s2Length; j++) {
                    var s2Elem = s2[j - 1];
                    var cost = s1Elem == s2Elem ? 0 : 1;

                    matrix[i, j] = Math.Min(matrix[i-1, j] + 1, Math.Min(matrix[i, j - 1] + 1, matrix[i - 1, j - 1] + cost));
                }
            }

            return matrix[s1Length, s2Length];
        }
    }

    public interface IStringCompareHelper {
        int GetLevenshteinDistance(string s1, string s2);
    }
}