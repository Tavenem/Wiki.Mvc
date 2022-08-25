namespace Tavenem.Wiki.Mvc;

/// <summary>
/// Information about the user's current view of the wiki.
/// </summary>
public class WikiViewState
{
    /// <summary>
    /// Whether the user has requested the compact view.
    /// </summary>
    public bool IsCompact { get; set; }
}
