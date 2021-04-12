using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.StaticFiles;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Tavenem.DataStorage;
using Tavenem.Wiki.Mvc.Sample.Data;
using Tavenem.Wiki.Mvc.Sample.Services;
using Tavenem.Wiki.Web;

namespace Tavenem.Wiki.Mvc.Sample
{
    public class Startup
    {
        public IConfiguration Configuration { get; }

        public Startup(IConfiguration configuration) => Configuration = configuration;

        public void ConfigureServices(IServiceCollection services)
        {
            services.AddRazorPages();

            services.AddSignalR(options => options.EnableDetailedErrors = true);

            var dataStore = new InMemoryDataStore();
            services.AddSingleton<IDataStore>(dataStore);

            services.AddWiki(
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
        }

        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            var serviceProvider = app.ApplicationServices.CreateScope().ServiceProvider;
            Seed.AddDefaultWikiPagesAsync(
                serviceProvider.GetRequiredService<IWikiOptions>(),
                serviceProvider.GetRequiredService<IWikiWebOptions>(),
                serviceProvider.GetRequiredService<IDataStore>(),
                WikiUserManager.UserId)
                .GetAwaiter()
                .GetResult();

            app.UseStatusCodePagesWithReExecute("/Error/{0}");
            if (env.IsDevelopment())
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
        }
    }
}
