using Tavenem.Wiki.Queries;

namespace Tavenem.Wiki.Mvc.ViewModels;

/// <summary>
/// The revision DTO.
/// </summary>
public record RevisionViewModel(
    Revision Revision,
    WikiUserInfo? Editor);