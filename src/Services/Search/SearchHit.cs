﻿namespace Tavenem.Wiki.Mvc.Services.Search;

/// <summary>
/// A search hit.
/// </summary>
public class SearchHit : ISearchHit
{
    /// <summary>
    /// An excerpt from the matching article (optional).
    /// </summary>
    public string? Excerpt { get; set; }

    /// <summary>
    /// Gets the full title of this item (including namespace if the namespace is not
    /// <see cref="WikiOptions.DefaultNamespace"/>).
    /// </summary>
    public string FullTitle { get; set; }

    /// <summary>
    /// The title of the matching wiki item.
    /// </summary>
    public string Title { get; set; }

    /// <summary>
    /// The namespace of the matching wiki item.
    /// </summary>
    public string WikiNamespace { get; set; }

    /// <summary>
    /// Initialize a new instance of <see cref="SearchHit"/>.
    /// </summary>
    /// <param name="title">
    /// The title of the matching wiki item.
    /// </param>
    /// <param name="wikiNamespace">
    /// The namespace of the matching wiki item.
    /// </param>
    /// <param name="fullTitle">
    /// The full title of the matching wiki item.
    /// </param>
    /// <param name="exceprt">
    /// An excerpt from the matching article (optional).
    /// </param>
    public SearchHit(string title, string wikiNamespace, string fullTitle, string? exceprt = null)
    {
        Excerpt = exceprt;
        FullTitle = fullTitle;
        Title = title;
        WikiNamespace = wikiNamespace;
    }
}
