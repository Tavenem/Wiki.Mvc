namespace Tavenem.Wiki.Mvc.Models;

/// <summary>
/// A type of wiki page list.
/// </summary>
public enum SpecialListType
{
    /// <summary>
    /// All category pages.
    /// </summary>
    All_Categories = 0,

    /// <summary>
    /// All files.
    /// </summary>
    All_Files = 1,

    /// <summary>
    /// All pages.
    /// </summary>
    All_Pages = 2,

    /// <summary>
    /// All redirected pages.
    /// </summary>
    All_Redirects = 3,

    /// <summary>
    /// All redirects which lead to nonexistent pages.
    /// </summary>
    Broken_Redirects = 4,

    /// <summary>
    /// All redirects which lead to other redirects.
    /// </summary>
    Double_Redirects = 5,

    /// <summary>
    /// All pages referred to in a link which do not exist.
    /// </summary>
    Missing_Pages = 6,

    /// <summary>
    /// All articles with no assigned category.
    /// </summary>
    Uncategorized_Articles = 7,

    /// <summary>
    /// All categories with no assigned category.
    /// </summary>
    Uncategorized_Categories = 8,

    /// <summary>
    /// All files with no assigned category.
    /// </summary>
    Uncategorized_Files = 9,

    /// <summary>
    /// All categories with no pages assigned to them.
    /// </summary>
    Unused_Categories = 10,

    /// <summary>
    /// The list of pages which link to a page.
    /// </summary>
    What_Links_Here = 11
}
