﻿using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Routing;
using Tavenem.Wiki;
using Tavenem.Wiki.Mvc;
using Tavenem.Wiki.Mvc.Hubs;
using Tavenem.Wiki.Mvc.Services.FileManager;
using Tavenem.Wiki.Mvc.Services.Search;

namespace Microsoft.Extensions.DependencyInjection;

/// <summary>
/// Contains the <see cref="MapWiki(IEndpointRouteBuilder)"/> extension method for <see
/// cref="IEndpointRouteBuilder"/>.
/// </summary>
public static class WikiEndpointRouteBuilderExtensions
{
    private const string WikiController = "Wiki";

    /// <summary>
    /// Adds support for the Tavenem.Wiki library.
    /// </summary>
    /// <param name="services">An <see cref="IServiceCollection"/> instance.</param>
    /// <param name="userManager">An <see cref="IWikiUserManager"/> instance.</param>
    /// <param name="groupManager">An <see cref="IWikiGroupManager"/> instance.</param>
    /// <param name="wikiOptions">
    /// The options used to configure the wiki system.
    /// </param>
    /// <param name="wikiMvcOptions">
    /// The options used to configure the wiki MVC system.
    /// </param>
    /// <param name="fileManager">
    /// <para>
    /// An <see cref="IFileManager"/> instance.
    /// </para>
    /// <para>
    /// If omitted, an instance of <see cref="LocalFileManager"/> will be used.
    /// </para>
    /// </param>
    /// <param name="searchClient">
    /// <para>
    /// An <see cref="ISearchClient"/> instance.
    /// </para>
    /// <para>
    /// If omitted, an instance of <see cref="DefaultSearchClient"/> will be used. Note: the
    /// default client is not recommended for production use.
    /// </para>
    /// </param>
    public static void AddWiki(
        this IServiceCollection services,
        IWikiUserManager userManager,
        IWikiGroupManager groupManager,
        WikiOptions? wikiOptions = null,
        IWikiMvcOptions? wikiMvcOptions = null,
        IFileManager? fileManager = null,
        ISearchClient? searchClient = null)
    {
        if (wikiOptions is not null)
        {
            services.AddScoped(_ => wikiOptions);
        }
        else
        {
            services.AddScoped(_ => new WikiOptions { LinkTemplate = WikiMvcOptions.DefaultLinkTemplate });
        }
        if (wikiMvcOptions is not null)
        {
            services.AddScoped(_ => wikiMvcOptions);
        }
        else
        {
            services.AddScoped<IWikiMvcOptions>(_ => new WikiMvcOptions());
        }

        services.AddScoped(_ => userManager);
        services.AddScoped(_ => groupManager);

        if (fileManager is null or LocalFileManager)
        {
            services.AddHttpContextAccessor();
        }
        if (fileManager is null)
        {
            services.AddScoped<IFileManager, LocalFileManager>();
        }
        else
        {
            services.AddScoped(_ => fileManager);
        }

        if (searchClient is null)
        {
            services.AddScoped<ISearchClient, DefaultSearchClient>();
        }
        else
        {
            services.AddScoped(_ => searchClient);
        }

        services.AddScoped(_ => new WikiViewState());
    }

    /// <summary>
    /// Adds support for the Tavenem.Wiki library.
    /// </summary>
    /// <param name="services">An <see cref="IServiceCollection"/> instance.</param>
    /// <param name="userManagerType">
    /// The type of <see cref="IWikiUserManager"/> to register.
    /// </param>
    /// <param name="groupManagerType">
    /// The type of <see cref="IWikiGroupManager"/> to register.
    /// </param>
    /// <param name="wikiOptions">
    /// The options used to configure the wiki system.
    /// </param>
    /// <param name="wikiMvcOptions">
    /// The options used to configure the wiki MVC system.
    /// </param>
    /// <param name="fileManagerType">
    /// <para>
    /// The type of <see cref="IFileManager"/> to register.
    /// </para>
    /// <para>
    /// If omitted, <see cref="LocalFileManager"/> will be used.
    /// </para>
    /// </param>
    /// <param name="searchClientType">
    /// <para>
    /// The type of <see cref="ISearchClient"/> to register.
    /// </para>
    /// <para>
    /// If omitted, <see cref="DefaultSearchClient"/> will be used. Note: the default client is
    /// not recommended for production use.
    /// </para>
    /// </param>
    public static void AddWiki(
        this IServiceCollection services,
        Type userManagerType,
        Type groupManagerType,
        WikiOptions? wikiOptions = null,
        IWikiMvcOptions? wikiMvcOptions = null,
        Type? fileManagerType = null,
        Type? searchClientType = null)
    {
        if (wikiOptions is not null)
        {
            services.AddScoped(_ => wikiOptions);
        }
        else
        {
            services.AddScoped(_ => new WikiOptions { LinkTemplate = WikiMvcOptions.DefaultLinkTemplate });
        }
        if (wikiMvcOptions is not null)
        {
            services.AddScoped(_ => wikiMvcOptions);
        }
        else
        {
            services.AddScoped<IWikiMvcOptions>(_ => new WikiMvcOptions());
        }

        services.AddScoped(typeof(IWikiUserManager), userManagerType);
        services.AddScoped(typeof(IWikiGroupManager), groupManagerType);

        if (fileManagerType is null)
        {
            services.AddHttpContextAccessor();
            services.AddScoped<IFileManager, LocalFileManager>();
        }
        else
        {
            services.AddScoped(typeof(IFileManager), fileManagerType);
        }

        if (searchClientType is null)
        {
            services.AddScoped<ISearchClient, DefaultSearchClient>();
        }
        else
        {
            services.AddScoped(typeof(ISearchClient), searchClientType);
        }

        services.AddScoped(_ => new WikiViewState());
    }

    /// <summary>
    /// Adds support for the Tavenem.Wiki library.
    /// </summary>
    /// <param name="services">An <see cref="IServiceCollection"/> instance.</param>
    /// <param name="userManagerBuilder">
    /// A function which provides an <see cref="IWikiUserManager"/> instance.
    /// </param>
    /// <param name="groupManagerBuilder">
    /// A function which provides an <see cref="IWikiGroupManager"/> instance.
    /// </param>
    /// <param name="wikiOptions">
    /// The options used to configure the wiki system.
    /// </param>
    /// <param name="wikiMvcOptions">
    /// The options used to configure the wiki MVC system.
    /// </param>
    /// <param name="fileManagerBuilder">
    /// <para>
    /// A function which provides an <see cref="IFileManager"/> instance.
    /// </para>
    /// <para>
    /// If omitted, an instance of <see cref="LocalFileManager"/> will be used.
    /// </para>
    /// </param>
    /// <param name="searchClientBuilder">
    /// <para>
    /// A function which provides an <see cref="ISearchClient"/> instance.
    /// </para>
    /// <para>
    /// If omitted, an instance of <see cref="DefaultSearchClient"/> will be used. Note: the
    /// default client is not recommended for production use.
    /// </para>
    /// </param>
    public static void AddWiki(
        this IServiceCollection services,
        Func<IServiceProvider, IWikiUserManager> userManagerBuilder,
        Func<IServiceProvider, IWikiGroupManager> groupManagerBuilder,
        WikiOptions? wikiOptions = null,
        IWikiMvcOptions? wikiMvcOptions = null,
        Func<IServiceProvider, IFileManager>? fileManagerBuilder = null,
        Func<IServiceProvider, ISearchClient>? searchClientBuilder = null)
    {
        if (wikiOptions is not null)
        {
            services.AddScoped(_ => wikiOptions);
        }
        else
        {
            services.AddScoped(_ => new WikiOptions { LinkTemplate = WikiMvcOptions.DefaultLinkTemplate });
        }
        if (wikiMvcOptions is not null)
        {
            services.AddScoped(_ => wikiMvcOptions);
        }
        else
        {
            services.AddScoped<IWikiMvcOptions>(_ => new WikiMvcOptions());
        }

        services.AddScoped(userManagerBuilder);
        services.AddScoped(groupManagerBuilder);

        if (fileManagerBuilder is null)
        {
            services.AddHttpContextAccessor();
            services.AddScoped<IFileManager, LocalFileManager>();
        }
        else
        {
            services.AddScoped(fileManagerBuilder);
        }

        if (searchClientBuilder is null)
        {
            services.AddScoped<ISearchClient, DefaultSearchClient>();
        }
        else
        {
            services.AddScoped(searchClientBuilder);
        }

        services.AddScoped(_ => new WikiViewState());
    }

    /// <summary>
    /// Adds support for the Tavenem.Wiki library.
    /// </summary>
    /// <param name="services">An <see cref="IServiceCollection"/> instance.</param>
    /// <param name="userManager">An <see cref="IWikiUserManager"/> instance.</param>
    /// <param name="groupManager">An <see cref="IWikiGroupManager"/> instance.</param>
    /// <param name="wikiOptionsBuilder">
    /// A function which provides the options used to configure the wiki system.
    /// </param>
    /// <param name="wikiMvcOptionsBuilder">
    /// A function which provides the options used to configure the wiki MVC system.
    /// </param>
    /// <param name="fileManager">
    /// <para>
    /// An <see cref="IFileManager"/> instance.
    /// </para>
    /// <para>
    /// If omitted, an instance of <see cref="LocalFileManager"/> will be used.
    /// </para>
    /// </param>
    /// <param name="searchClient">
    /// <para>
    /// An <see cref="ISearchClient"/> instance.
    /// </para>
    /// <para>
    /// If omitted, an instance of <see cref="DefaultSearchClient"/> will be used. Note: the
    /// default client is not recommended for production use.
    /// </para>
    /// </param>
    public static void AddWiki(
        this IServiceCollection services,
        IWikiUserManager userManager,
        IWikiGroupManager groupManager,
        Func<IServiceProvider, WikiOptions> wikiOptionsBuilder,
        Func<IServiceProvider, IWikiMvcOptions> wikiMvcOptionsBuilder,
        IFileManager? fileManager = null,
        ISearchClient? searchClient = null)
    {
        services.AddScoped(wikiOptionsBuilder);
        services.AddScoped(wikiMvcOptionsBuilder);
        services.AddScoped(_ => userManager);
        services.AddScoped(_ => groupManager);

        if (fileManager is null or LocalFileManager)
        {
            services.AddHttpContextAccessor();
        }
        if (fileManager is null)
        {
            services.AddScoped<IFileManager, LocalFileManager>();
        }
        else
        {
            services.AddScoped(_ => fileManager);
        }

        if (searchClient is null)
        {
            services.AddScoped<ISearchClient, DefaultSearchClient>();
        }
        else
        {
            services.AddScoped(_ => searchClient);
        }

        services.AddScoped(_ => new WikiViewState());
    }

    /// <summary>
    /// Adds support for the Tavenem.Wiki library.
    /// </summary>
    /// <param name="services">An <see cref="IServiceCollection"/> instance.</param>
    /// <param name="userManagerType">
    /// The type of <see cref="IWikiUserManager"/> to register.
    /// </param>
    /// <param name="groupManagerType">
    /// The type of <see cref="IWikiGroupManager"/> to register.
    /// </param>
    /// <param name="wikiOptionsBuilder">
    /// A function which provides the options used to configure the wiki system.
    /// </param>
    /// <param name="wikiMvcOptionsBuilder">
    /// A function which provides the options used to configure the wiki MVC system.
    /// </param>
    /// <param name="fileManagerType">
    /// <para>
    /// The type of <see cref="IFileManager"/> to register.
    /// </para>
    /// <para>
    /// If omitted, <see cref="LocalFileManager"/> will be used.
    /// </para>
    /// </param>
    /// <param name="searchClientType">
    /// <para>
    /// The type of <see cref="ISearchClient"/> to register.
    /// </para>
    /// <para>
    /// If omitted, <see cref="DefaultSearchClient"/> will be used. Note: the default client is
    /// not recommended for production use.
    /// </para>
    /// </param>
    public static void AddWiki(
        this IServiceCollection services,
        Type userManagerType,
        Type groupManagerType,
        Func<IServiceProvider, WikiOptions> wikiOptionsBuilder,
        Func<IServiceProvider, IWikiMvcOptions> wikiMvcOptionsBuilder,
        Type? fileManagerType = null,
        Type? searchClientType = null)
    {
        services.AddScoped(wikiOptionsBuilder);
        services.AddScoped(wikiMvcOptionsBuilder);
        services.AddScoped(typeof(IWikiUserManager), userManagerType);
        services.AddScoped(typeof(IWikiGroupManager), groupManagerType);

        if (fileManagerType is null)
        {
            services.AddHttpContextAccessor();
            services.AddScoped<IFileManager, LocalFileManager>();
        }
        else
        {
            services.AddScoped(typeof(IFileManager), fileManagerType);
        }

        if (searchClientType is null)
        {
            services.AddScoped<ISearchClient, DefaultSearchClient>();
        }
        else
        {
            services.AddScoped(typeof(ISearchClient), searchClientType);
        }

        services.AddScoped(_ => new WikiViewState());
    }

    /// <summary>
    /// Adds support for the Tavenem.Wiki library.
    /// </summary>
    /// <param name="services">An <see cref="IServiceCollection"/> instance.</param>
    /// <param name="userManagerBuilder">
    /// A function which provides an <see cref="IWikiUserManager"/> instance.
    /// </param>
    /// <param name="groupManagerBuilder">
    /// A function which provides an <see cref="IWikiGroupManager"/> instance.
    /// </param>
    /// <param name="wikiOptionsBuilder">
    /// A function which provides the options used to configure the wiki system.
    /// </param>
    /// <param name="wikiMvcOptionsBuilder">
    /// A function which provides the options used to configure the wiki MVC system.
    /// </param>
    /// <param name="fileManagerBuilder">
    /// <para>
    /// A function which provides an <see cref="IFileManager"/> instance.
    /// </para>
    /// <para>
    /// If omitted, an instance of <see cref="LocalFileManager"/> will be used.
    /// </para>
    /// </param>
    /// <param name="searchClientBuilder">
    /// <para>
    /// A function which provides an <see cref="ISearchClient"/> instance.
    /// </para>
    /// <para>
    /// If omitted, an instance of <see cref="DefaultSearchClient"/> will be used. Note: the
    /// default client is not recommended for production use.
    /// </para>
    /// </param>
    public static void AddWiki(
        this IServiceCollection services,
        Func<IServiceProvider, IWikiUserManager> userManagerBuilder,
        Func<IServiceProvider, IWikiGroupManager> groupManagerBuilder,
        Func<IServiceProvider, WikiOptions> wikiOptionsBuilder,
        Func<IServiceProvider, IWikiMvcOptions> wikiMvcOptionsBuilder,
        Func<IServiceProvider, IFileManager>? fileManagerBuilder = null,
        Func<IServiceProvider, ISearchClient>? searchClientBuilder = null)
    {
        services.AddScoped(wikiOptionsBuilder);
        services.AddScoped(wikiMvcOptionsBuilder);
        services.AddScoped(userManagerBuilder);
        services.AddScoped(groupManagerBuilder);

        if (fileManagerBuilder is null)
        {
            services.AddHttpContextAccessor();
            services.AddScoped<IFileManager, LocalFileManager>();
        }
        else
        {
            services.AddScoped(fileManagerBuilder);
        }

        if (searchClientBuilder is null)
        {
            services.AddScoped<ISearchClient, DefaultSearchClient>();
        }
        else
        {
            services.AddScoped(searchClientBuilder);
        }

        services.AddScoped(_ => new WikiViewState());
    }

    /// <summary>
    /// <para>
    /// Adds endpoints for the Tavenem.Wiki library.
    /// </para>
    /// <para>
    /// Should be added after setting <see cref="WikiOptions.MainPageTitle"/>, if a custom
    /// value is to be set.
    /// </para>
    /// <para>
    /// Should be added before all other endpoint mapping to ensure that wiki patterns are
    /// matched before falling back to default routing logic.
    /// </para>
    /// </summary>
    /// <param name="endpoints">An <see cref="IEndpointRouteBuilder"/> instance.</param>
    public static void MapWiki(this IEndpointRouteBuilder endpoints)
    {
        var provider = endpoints.ServiceProvider.CreateScope().ServiceProvider;
        var options = provider.GetRequiredService<WikiOptions>();
        var mvcOptions = provider.GetRequiredService<IWikiMvcOptions>();

        endpoints.MapHub<WikiTalkHub>(mvcOptions?.TalkHubRoute ?? WikiMvcOptions.DefaultTalkHubRoute);

        endpoints.MapControllerRoute(
            name: "wiki-ns",
            pattern: $"{options.WikiLinkPrefix}/{{wikiNamespace}}:{{title}}/{{action=Read}}",
            defaults: new { controller = WikiController });
        endpoints.MapControllerRoute(
            name: "wiki",
            pattern: $"{options.WikiLinkPrefix}/{{title={options.MainPageTitle}}}/{{action=Read}}",
            defaults: new { controller = WikiController, wikiNamespace = options.DefaultNamespace });
    }
}
