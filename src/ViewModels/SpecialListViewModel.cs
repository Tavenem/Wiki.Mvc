using System.Text;
using Tavenem.DataStorage;
using Tavenem.Wiki.Queries;

namespace Tavenem.Wiki.Mvc.ViewModels;

/// <summary>
/// The wiki page list DTO.
/// </summary>
public record SpecialListViewModel(
    WikiRouteData Data,
    SpecialListType Type,
    bool Descending,
    string Description,
    IPagedList<LinkInfo> Links,
    string? SecondaryDescription = null,
    string? Sort = null,
    string? Filter = null)
{
    /// <summary>
    /// Initialize a new <see cref="SpecialListViewModel"/>.
    /// </summary>
    public SpecialListViewModel(
        WikiOptions wikiOptions,
        WikiRouteData data,
        SpecialListType type,
        bool descending,
        IPagedList<LinkInfo> links,
        string? sort = null,
        string? filter = null) : this(
            data,
            type,
            descending,
            GetDescription(wikiOptions, type, data),
            links,
            GetSecondaryDescription(wikiOptions, type),
            sort,
            filter)
    { }

    private static string GetDescription(WikiOptions options, SpecialListType type, WikiRouteData data) => type switch
    {
        SpecialListType.All_Categories => "This page lists all categories, either alphabetically or by most recent update.",
        SpecialListType.All_Files => "This page lists all files, either alphabetically or by most recent update.",
        SpecialListType.All_Pages => "This page lists all articles, either alphabetically or by most recent update.",
        SpecialListType.All_Redirects => "This page lists all articles which redirect to another page, either alphabetically or by most recent update.",
        SpecialListType.Broken_Redirects => "This page lists all articles which redirect to an article that does not exist, either alphabetically or by most recent update.",
        SpecialListType.Double_Redirects => "This page lists all articles which redirect to a page that redirects someplace else, either alphabetically or by most recent update.",
        SpecialListType.Missing_Pages => "This page lists all pages which are linked but do not exist.",
        SpecialListType.Uncategorized_Articles => "This page lists all articles which are not categorized, either alphabetically or by most recent update.",
        SpecialListType.Uncategorized_Categories => "This page lists all categories which are not categorized, either alphabetically or by most recent update.",
        SpecialListType.Uncategorized_Files => "This page lists all files which are not categorized, either alphabetically or by most recent update.",
        SpecialListType.Unused_Categories => "This page lists all categories which have no articles or subcategories, either alphabetically or by most recent update.",
        SpecialListType.What_Links_Here => $"The following pages link to {Article.GetFullTitle(options, data.Title, data.WikiNamespace, data.IsTalk)}.",
        _ => string.Empty,
    };

    private static string? GetSecondaryDescription(WikiOptions wikiOptions, SpecialListType type)
    {
        if (type is SpecialListType.All_Categories
            or SpecialListType.All_Files
            or SpecialListType.All_Pages)
        {
            if (!string.IsNullOrEmpty(wikiOptions.ContentsPageTitle))
            {
                return $"For a more organized overview you may wish to check the <a href=\"/{wikiOptions.WikiLinkPrefix}/{wikiOptions.SystemNamespace}:{wikiOptions.ContentsPageTitle}\" class=\"wiki-link wiki-link-exists\">{wikiOptions.ContentsPageTitle}</a> page.";
            }
        }
        else if (type == SpecialListType.Uncategorized_Categories)
        {
            var sb = new StringBuilder("Note that top-level categories might show up in this list deliberately, and may not require categorization.");
            if (!string.IsNullOrEmpty(wikiOptions.ContentsPageTitle))
            {
                sb.Append("Top-level categories are typically linked on the <a href=\"/")
                    .Append(wikiOptions.WikiLinkPrefix)
                    .Append('/')
                    .Append(wikiOptions.SystemNamespace)
                    .Append(':')
                    .Append(wikiOptions.ContentsPageTitle)
                    .Append("\" class=\"wiki-link wiki-link-exists\">")
                    .Append(wikiOptions.ContentsPageTitle)
                    .Append("</a>, or in some other prominent place (such as the <a href=\"/")
                    .Append(wikiOptions.WikiLinkPrefix)
                    .Append('/')
                    .Append(wikiOptions.MainPageTitle)
                    .Append("\">")
                    .Append(wikiOptions.MainPageTitle)
                    .Append("</a>).");
            }
            return sb.ToString();
        }
        else if (type == SpecialListType.Unused_Categories)
        {
            return "Note that some categories may be intended to classify articles with problems, and might show up in this list deliberately when no such issues currently exist. These types of categories should not be removed even when empty.";
        }
        return null;
    }
}
