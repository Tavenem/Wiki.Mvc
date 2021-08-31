using Microsoft.AspNetCore.StaticFiles;
using Tavenem.DataStorage;
using Tavenem.Wiki;
using Tavenem.Wiki.Mvc;
using Tavenem.Wiki.Mvc.Sample.Data;
using Tavenem.Wiki.Mvc.Sample.Services;
using Tavenem.Wiki.Web;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddRazorPages();

builder.Services.AddSignalR(options => options.EnableDetailedErrors = true);

var dataStore = new InMemoryDataStore();
builder.Services.AddSingleton<IDataStore>(dataStore);

builder.Services.AddWiki(
    typeof(WikiUserManager),
    typeof(WikiGroupManager),
    new WikiOptions
    {
        LinkTemplate = WikiMvcOptions.DefaultLinkTemplate,
    },
    new WikiWebOptions
    {
        ContactPageTitle = null,
        ContentsPageTitle = null,
        CopyrightPageTitle = null,
        MaxFileSize = 0,
        PolicyPageTitle = null,
    },
    new WikiMvcOptions
    {
        CompactLayoutPath = "_Layout",
        CompactRoutePort = 5003,
        LoginPath = "/",
        MainLayoutPath = "_Layout"
    });

var app = builder.Build();

var serviceProvider = app.Services.CreateScope().ServiceProvider;
Seed.AddDefaultWikiPagesAsync(
    serviceProvider.GetRequiredService<IWikiOptions>(),
    serviceProvider.GetRequiredService<IWikiWebOptions>(),
    serviceProvider.GetRequiredService<IDataStore>(),
    WikiUserManager.UserId)
    .GetAwaiter()
    .GetResult();

app.UseStatusCodePagesWithReExecute("/Error/{0}");
if (app.Environment.IsDevelopment())
{
    app.UseDeveloperExceptionPage();
}
else
{
    app.UseExceptionHandler("/Error");
    app.UseHsts();
}

app.UseHttpsRedirection();

var provider = new FileExtensionContentTypeProvider();
provider.Mappings[".webmanifest"] = "application/manifest+json";
app.UseStaticFiles(new StaticFileOptions
{
    ContentTypeProvider = provider,
});

app.UseRouting();

app.UseAuthorization();

app.UseEndpoints(endpoints =>
{
    endpoints.MapWiki();
    endpoints.MapRazorPages();
});

app.Run();
