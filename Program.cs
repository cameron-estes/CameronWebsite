var builder = WebApplication.CreateBuilder(args);

var app = builder.Build();

// Configure static files with custom MIME types
var provider = new Microsoft.AspNetCore.StaticFiles.FileExtensionContentTypeProvider();
provider.Mappings[".obj"] = "application/octet-stream";
provider.Mappings[".amc"] = "application/octet-stream";
provider.Mappings[".asf"] = "application/octet-stream";

app.UseStaticFiles(new StaticFileOptions
{
    ContentTypeProvider = provider
});

// app.UseStaticFiles();

app.MapGet("/", () => Results.Redirect("/index.html"));

app.Run();

