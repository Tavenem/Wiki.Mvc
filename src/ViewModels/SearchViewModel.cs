using Tavenem.Wiki.Mvc.Services.Search;

namespace Tavenem.Wiki.Mvc.ViewModels
{
    /// <summary>
    /// The search DTO.
    /// </summary>
    public record SearchViewModel(ISearchResult SearchResult, Article? ExactMatch = null);
}
