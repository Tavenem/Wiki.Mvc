using Tavenem.DataStorage;
using Tavenem.Wiki.Web;

namespace Tavenem.Wiki.Mvc.ViewModels;

/// <summary>
/// The user DTO.
/// </summary>
public record UserViewModel(string Id, bool PageExists, string UserName)
{
    /// <summary>
    /// Initialize a new instance of <see cref="UserViewModel"/>.
    /// </summary>
    public UserViewModel(
        IWikiOptions wikiOptions,
        IWikiWebOptions wikiWebOptions,
        IDataStore dataStore,
        IWikiUser user) : this(
            user.Id,
            Article.GetArticle(wikiOptions, dataStore, user.Id, wikiWebOptions.UserNamespace) is not null,
            user.UserName) { }
}
