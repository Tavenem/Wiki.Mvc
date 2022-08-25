using Tavenem.DataStorage;
using Tavenem.Wiki.Queries;

namespace Tavenem.Wiki.Mvc.ViewModels;

/// <summary>
/// The history DTO.
/// </summary>
public record HistoryViewModel(
    IList<WikiUserInfo>? Editors,
    bool IsFile,
    WikiPermission Permission,
    IPagedList<RevisionViewModel>? Revisions);
