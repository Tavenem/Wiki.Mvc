using System.ComponentModel.DataAnnotations;
using Tavenem.DataStorage;
using Tavenem.Wiki.MarkdownExtensions.Transclusions;

namespace Tavenem.Wiki.Mvc.ViewModels;

/// <summary>
/// The upload DTO.
/// </summary>
public class UploadViewModel
{
    /// <summary>
    /// The allowed editor IDs.
    /// </summary>
    [Display(Name = "Allowed editors (optional)")]
    public string? AllowedEditors { get; set; }

    /// <summary>
    /// The allowed viewer IDs.
    /// </summary>
    [Display(Name = "Allowed viewers (optional)")]
    public string? AllowedViewers { get; set; }

    /// <summary>
    /// The optional comment.
    /// </summary>
    [Display(Name = "Revision comment (e.g. briefly describe your changes)")]
    public string? Comment { get; set; }

    /// <summary>
    /// The associated <see cref="WikiRouteData"/>.
    /// </summary>
    public WikiRouteData Data { get; }

    /// <summary>
    /// Whether the editor should be the only editor.
    /// </summary>
    [Display(Name = "Make me the only editor")]
    public bool EditorSelf { get; set; }

    /// <summary>
    /// The file ID.
    /// </summary>
    [Required]
    public string? File { get; set; }

    /// <summary>
    /// The markdown content.
    /// </summary>
    public string? Markdown { get; set; }

    /// <summary>
    /// Whether an overwrite has been confirmed.
    /// </summary>
    public bool OverwriteConfirm { get; set; }

    /// <summary>
    /// Whether the user has overwrite permission.
    /// </summary>
    public bool OverwritePermission { get; set; }

    /// <summary>
    /// The ID of the owner.
    /// </summary>
    public string? Owner { get; set; }

    /// <summary>
    /// Whether to make the owner the editor.
    /// </summary>
    [Display(Name = "Make me the owner")]
    public bool OwnerSelf { get; set; }

    /// <summary>
    /// The rendered preview.
    /// </summary>
    public string? Preview { get; }

    /// <summary>
    /// Whether this is a request to show a preview.
    /// </summary>
    public bool ShowPreview { get; set; }

    /// <summary>
    /// The title.
    /// </summary>
    [Required]
    public string? Title { get; set; }

    /// <summary>
    /// Whether the editor should be the only viewer.
    /// </summary>
    [Display(Name = "Make me the only viewer")]
    public bool ViewerSelf { get; set; }

    /// <summary>
    /// Initialize a new instance of <see cref="UploadViewModel"/>.
    /// </summary>
    public UploadViewModel() => Data = new WikiRouteData();

    /// <summary>
    /// Initialize a new instance of <see cref="UploadViewModel"/>.
    /// </summary>
    public UploadViewModel(WikiRouteData data, string? markdown, string? preview, string? title)
    {
        Data = data;
        Markdown = markdown;
        Preview = preview;
        Title = title;
    }

    /// <summary>
    /// Get a new instance of <see cref="UploadViewModel"/>.
    /// </summary>
    public static async Task<UploadViewModel> NewAsync(
        WikiOptions options,
        IDataStore dataStore,
        WikiRouteData data,
        string? markdown = null,
        string? previewTitle = null)
    {
        string? preview = null;
        if (!string.IsNullOrWhiteSpace(previewTitle))
        {
            var (wikiNamespace, title, _, _) = Article.GetTitleParts(options, previewTitle);
            var fullTitle = Article.GetFullTitle(options, title, wikiNamespace);
            preview = string.IsNullOrWhiteSpace(markdown)
                ? null
                : MarkdownItem.RenderHtml(
                    options,
                    dataStore,
                    await TransclusionParser.TranscludeAsync(
                        options,
                        dataStore,
                        title,
                        fullTitle,
                        markdown));
        }

        return new UploadViewModel(
            data,
            markdown,
            preview,
            previewTitle);
    }
}
