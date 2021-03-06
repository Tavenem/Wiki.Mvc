using System.Globalization;
using Tavenem.DataStorage;

namespace Tavenem.Wiki.Mvc.ViewModels;

/// <summary>
/// The category DTO.
/// </summary>
public record CategoryViewModel : WikiItemViewModel
{
    /// <summary>
    /// The included articles.
    /// </summary>
    public IList<IGrouping<string, CategoryPageViewModel>>? Articles { get; init; }

    /// <summary>
    /// The included files.
    /// </summary>
    public IList<IGrouping<string, CategoryFileViewModel>>? Files { get; init; }

    /// <summary>
    /// The included categories.
    /// </summary>
    public IList<IGrouping<string, SubcategoryViewModel>>? Subcategories { get; init; }

    /// <summary>
    /// Initialize a new instance of <see cref="CategoryViewModel"/>.
    /// </summary>
    public CategoryViewModel(
        WikiRouteData data,
        string html,
        bool isDiff,
        IList<IGrouping<string, CategoryPageViewModel>>? articles,
        IList<IGrouping<string, CategoryFileViewModel>>? files,
        IList<IGrouping<string, SubcategoryViewModel>>? subcategories) : base(data, html, isDiff)
    {
        Articles = articles;
        Files = files;
        Subcategories = subcategories;
    }

    /// <summary>
    /// Get a new <see cref="CategoryViewModel"/>.
    /// </summary>
    public static async Task<CategoryViewModel> NewAsync(
        IWikiOptions options,
        IDataStore dataStore,
        WikiRouteData data,
        WikiItemViewModel vm)
    {
        var articles = new List<Article>();
        var files = new List<WikiFile>();
        var subCategories = new List<Category>();
        if (data.WikiItem is Category category)
        {
            foreach (var id in category.ChildIds)
            {
                var child = await dataStore.GetItemAsync<Article>(id).ConfigureAwait(false);
                if (child is null)
                {
                    continue;
                }
                if (child is Category subCategory)
                {
                    subCategories.Add(subCategory);
                }
                else if (child is WikiFile file)
                {
                    files.Add(file);
                }
                else if (child is Article article)
                {
                    articles.Add(article);
                }
            }
        }

        return new CategoryViewModel(
            data,
            vm.Html,
            vm.IsDiff,
            articles
                .Select(x => new CategoryPageViewModel(x.Title, x.WikiNamespace, Article.GetFullTitle(options, x.Title, x.WikiNamespace)))
                .GroupBy(x => StringInfo.GetNextTextElement(x.Title, 0))
                .ToList(),
            files
                .Select(x => new CategoryFileViewModel(x.Title, x.FileSize))
                .GroupBy(x => StringInfo.GetNextTextElement(x.Title, 0))
                .ToList(),
            subCategories
                .Select(x => new SubcategoryViewModel(x.Title, x.ChildIds.Count))
                .GroupBy(x => StringInfo.GetNextTextElement(x.Title, 0))
                .ToList());
    }
}
