using Tavenem.DataStorage;
using Tavenem.Wiki.Web;

namespace Tavenem.Wiki.Mvc.ViewModels;

/// <summary>
/// The group DTO.
/// </summary>
public record GroupViewModel : WikiItemViewModel
{
    /// <summary>
    /// The included users.
    /// </summary>
    public IList<UserViewModel> Users { get; set; }

    /// <summary>
    /// Initialize a new instance of <see cref="GroupViewModel"/>.
    /// </summary>
    public GroupViewModel(
        WikiRouteData data,
        string html,
        bool isDiff,
        IEnumerable<UserViewModel> users) : base(data, html, isDiff) => Users = users.ToList();

    /// <summary>
    /// Get a new <see cref="GroupViewModel"/>.
    /// </summary>
    public static async Task<GroupViewModel> NewAsync(
        IWikiOptions wikiOptions,
        IWikiWebOptions wikiWebOptions,
        IDataStore dataStore,
        IWikiGroupManager groupManager,
        WikiRouteData data,
        WikiItemViewModel vm)
    {
        var users = new List<IWikiUser>();
        if (data.Group is not null)
        {
            users.AddRange(await groupManager.GetUsersInGroupAsync(data.Group).ConfigureAwait(false));
        }

        return new GroupViewModel(
            data,
            vm.Html,
            vm.IsDiff,
            users.Select(x => new UserViewModel(wikiOptions, wikiWebOptions, dataStore, x)));
    }
}
