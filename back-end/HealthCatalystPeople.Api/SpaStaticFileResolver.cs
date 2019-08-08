using System.Diagnostics;
using System.IO;
using Microsoft.AspNetCore.SpaServices.StaticFiles;
using Microsoft.Extensions.FileProviders;

namespace HealthCatalystPeople.Api {
    public class SpaStaticFileProvider : ISpaStaticFileProvider
    {
        public IFileProvider FileProvider {
            get {
                Debug.WriteLine(Directory.GetCurrentDirectory() + "\\wwwroot");
                return new PhysicalFileProvider(Directory.GetCurrentDirectory() + "\\wwwroot");
            }
        }
    }
}