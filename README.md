![build](https://img.shields.io/github/workflow/status/Tavenem/Wiki.Mvc/publish/main) [![NuGet downloads](https://img.shields.io/nuget/dt/Tavenem.Wiki.Mvc)](https://www.nuget.org/packages/Tavenem.Wiki.Mvc/)

Tavenem.Wiki.Mvc
==

This is the "reference" implementation of [Tavenem.Wiki](https://github.com/Tavenem/Wiki) for the
web. It is a [Razor class
library](https://docs.microsoft.com/en-us/aspnet/core/razor-pages/ui-class) which can be included in
an [ASP.NET Core](https://docs.microsoft.com/en-us/aspnet/core) project to turn it into a wiki.

## Installation

Tavenem.Wiki.Mvc is available as a [NuGet package](https://www.nuget.org/packages/Tavenem.Wiki.Mvc/).

## Configuration

In order to use Tavenem.Wiki.Mvc in an [ASP.NET Core](https://docs.microsoft.com/en-us/aspnet/core)
project, the following steps should be taken:

1. Add [SignalR](https://docs.microsoft.com/en-us/aspnet/core/signalr/introduction) by calling
   `AddSignalR`  on an `IServiceCollection` instance in your `Program.cs` file. This is necessary
   for discussion pages to function.
1. Call one of the overloads of `AddWiki`  on an `IServiceCollection` instance in your `Program.cs`
   file. `AddWiki` has two required parameters and four optional parameters.
   
   The first parameter is either an instance of `IWikiUserManager`, or the type of an implementation
   of that interface which is available via dependency injection, or a function which provides one.
   This interface allows the wiki to get information about users. Typically this will be a wrapper
   around your actual user persistence mechanism (e.g. [ASP.NET Core
   Identity](https://docs.microsoft.com/en-us/aspnet/core/security/authentication/identity)).

   The second parameter is either an instance of `IWikiGroupManager`, or the type of an
   implementation of that interface which is available via dependency injection, or a function which
   provides one. This interface allows the wiki to get information about user groups. Typically this
   will be a wrapper around your actual user group persistence mechanism.

   The next parameter is either an instance of `WikiOptions` or a function which provides one.
   This interface allows you to configure the wiki's core features. See the README for
   [Tavenem.Wiki](https://github.com/Tavenem/Wiki) for more information.
   
   The next parameter is either an instance of `IWikiWebOptions` or a function which provides one.
   This interface allows you to configure the wiki's web implementation features. See the README for
   [Tavenem.Wiki.Web](https://github.com/Tavenem/Wiki.Web) for more information.
   
   The next parameter is either an instance of `IWikiMvcOptions` or a function which provides one.
   This interface allows you to configure the wiki's MVC implementation features, and includes the
   following properties:
   - `ArticleEndMatter`: A function which gets the name or path of a partial view which should be
     displayed after the content of the given wiki article (before the category list).
   - `ArticleFrontMatter`: A function which gets the name or path of a partial view which should be
     displayed before the content of the given wiki article (after the subtitle).
   - `CompactLayoutPath`: The path to the layout used when requesting a compact version of a wiki
     page. Wiki pages will be nested within this layout.
   
     If omitted, the main layout will be used (as specified in `MainLayoutPath`).
   - `CompactRouteHostPart`: The host part which will be recognized as indicating a request for the
     compact version of the wiki.

     If left empty the compact view cannot be reached at a particular host path.
   - `CompactRouteHostPosition`: The position (zero-based) within the parts of the host string which
     will be examined to determine a request for the compact version of the wiki.

     If left null position zero will be assumed.

     Only used when `CompactRouteHostPart` is non-empty.
   - `CompactRoutePort`: The port which will be recognized as indicating a request for the compact
     version of the wiki.

     If left null the compact view cannot be reached at a particular port.
   - `LoginPath`: The relative path to the site's login page.
     
     For security reasons, only a local path is permitted. If your authentication mechanisms are
     handled externally, this should point to a local page which redirects to that source (either
     automatically or via interaction).
   
     A query parameter with the name "returnUrl" whose value is set to the page which initiated the
     logic request will be appended to this URL (if provided). Your login page may ignore this
     parameter, but to improve user experience it should redirect the user back to this URL after
     performing a successful login. Be sure to validate that the value of the parameter is from a
     legitimate source to avoid exploits.
   
     If this option is omitted, a generic "not signed in" message will be displayed whenever a user
     who is not logged in attempts any action which requires an account.
   - `MainLayoutPath`: The path to the main layout for the application. Wiki pages will be nested
     within this layout.
   
     If omitted, a default layout will be used.

     Note: your layout **must** define a "Scripts" section, as the wiki views add required scripts
     to this section.
   - `TalkHubRoute`: The relative path to the
     [SignalR](https://docs.microsoft.com/en-us/aspnet/core/signalr/introduction)
     [Hub](https://docs.microsoft.com/en-us/aspnet/core/signalr/hubs) used for discussion pages. If
     omitted, the path "/wikiTalkHub" will be used.
   - `TenorAPIKey`: The API key to be used for [Tenor](https://tenor.com) GIF integration. If
     omitted, discussion pages will not have built-in GIF functionality.

   In addition there are two interface methods which can be overridden: `GetArticleFrontMatter` and
   `GetArticleEndMatter` these accept an `Article` parameter and should return a string containing
   the name or path of a partial view which should be displayed before (or after) the given article
   (or null if no additional partial view should be displayed).
   
   If you provide an instance of the `WikiMvcOptions` class, these methods can be provided by
   overriding the `ArticleFrontMatter` and `ArticleEndMatter` properties.
   
   The next parameter is either an instance of `IFileManager`, or the type of an implementation of
   that interface which is available via dependency injection, or a function which provides one. If
   omitted, an instance of `LocalFileManager` will be used, which stores files in a subfolder of
   wwwroot.
   
   The next parameter is either an instance of `ISearchClient`, or the type of an implementation
   of that interface which is available via dependency injection, or a function which provides one.
   If omitted, an instance of `DefaultSearchClient` will be used.
     
   Note: the `DefaultSearchClient` is not recommended for production use. It is provided only to
   ensure that basic search functionality operates when an implementation of `ISearchClient` is not
   available (e.g. during debugging if the production client cannot be used during development).
1. Call `MapWiki` in the configuration function of your `UseEndpoints`
   call.

   For example:
   ```c#
   app.UseEndpoints(endpoints =>
   {
       endpoints.MapWiki();
       endpoints.MapDefaultControllerRoute();
       endpoints.MapRazorPages();
   });
   ```
   This call should normally precede any other mapped endpoints.
1. Add references to the [Razor class
   library](https://docs.microsoft.com/en-us/aspnet/core/razor-pages/ui-class)'s stylesheets in the
   `<head>` tag of your main layout, and its scripts at the bottom of your body, before the Scripts
   section of the layout:
   ```razor
   <head>
     ...
     <link href="~/_content/Tavenem.Wiki.Mvc/libstyles.css" rel="stylesheet" />
     <link href="~/_content/Tavenem.Wiki.Mvc/styles.css" rel="stylesheet" />
   </head>
   <body>
     ...
     <script src="~/_content/Tavenem.Wiki.Mvc/libs.js"></script>
     <script src="~/_content/Tavenem.Wiki.Mvc/script.js"></script>
     @RenderSection("Scripts", required: false)
   </body>
   ```

   If you do not supply your own layout (with the `MainLayoutPath` property described above), the
   default includes these necessary references.

   (Optionally, you may import the [Sass](https://sass-lang.com) stylesheet "`styles.scss`" located
   in the `wwwroot` folder in your own `scss` file if you prefer to extend or bundle the
   "styles.css" stylesheet. You must still include the "`libstyles.css`" file, however.)

## Roadmap

Tavenem.Wiki.Mvc is currently in a **prerelease** state. Development is ongoing, and breaking
changes are possible before the first production release.

No release date is currently set for v1.0 of Tavenem.Wiki.Mvc. The project is currently in a "wait
and see" phase while [Tavenem.DataStore](https://github.com/Tavenem/DataStore) (a dependency of
Tavenem.Wiki.Mvc) is in prerelease. When that project has a stable release, a production release of
Tavenem.Wiki.Mvc will follow.

## Contributing

Contributions are always welcome. Please carefully read the [contributing](docs/CONTRIBUTING.md) document to learn more before submitting issues or pull requests.

## Code of conduct

Please read the [code of conduct](docs/CODE_OF_CONDUCT.md) before engaging with our community, including but not limited to submitting or replying to an issue or pull request.
