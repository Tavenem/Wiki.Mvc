using System.Text.Json.Serialization;
using Tavenem.DataStorage;

namespace Tavenem.Wiki.Mvc.Sample;

/// <summary>
/// <para>
/// Represents a group of users.
/// </para>
/// <para>
/// Groups may be assigned ownership, viewing, or editing permissions on wiki items, just like
/// individual users may.
/// </para>
/// </summary>
public class WikiGroup : IdItem, IWikiGroup
{
    /// <summary>
    /// The display name for this group.
    /// </summary>
    public string GroupName { get; set; }

    /// <summary>
    /// The type discriminator for this type.
    /// </summary>
    public const string WikiGroupIdItemTypeName = ":WikiGroup:";

    /// <summary>
    /// A built-in, read-only type discriminator.
    /// </summary>
    [JsonPropertyOrder(-1)]
    public string IdItemTypeName => WikiGroupIdItemTypeName;

    /// <summary>
    /// <para>
    /// The owner of this group.
    /// </para>
    /// <para>
    /// May be a user or another group.
    /// </para>
    /// </summary>
    public string Owner { get; set; }

    /// <summary>
    /// <para>
    /// The total number of kilobytes of uploaded files permitted for users who belong to this
    /// group.
    /// </para>
    /// <para>
    /// A negative value indicates that group members may upload files without limit.
    /// </para>
    /// <para>
    /// This value may be overridden by the value assigned to individual group members, or by
    /// the value of other groups to which a user belongs. Any negative value indicates that the
    /// user may upload without limit. Otherwise, the maximum value among the groups and the
    /// user's individual limit is used.
    /// </para>
    /// </summary>
    public int UploadLimit { get; set; }

    /// <summary>
    /// Initializes a new instance of <see cref="UserGroup"/>.
    /// </summary>
    /// <param name="groupName">
    /// The display name for this group.
    /// </param>
    /// <param name="owner">
    /// <para>
    /// The owner of this group.
    /// </para>
    /// <para>
    /// May be a user or another group.
    /// </para>
    /// </param>
    /// <param name="uploadLimit">
    /// <para>
    /// The total number of kilobytes of uploaded files permitted for users who belong to this
    /// group.
    /// </para>
    /// <para>
    /// A negative value indicates that group members may upload files without limit.
    /// </para>
    /// <para>
    /// This value may be overridden by the value assigned to individual group members, or by
    /// the value of other groups to which a user belongs. Any negative value indicates that the
    /// user may upload without limit. Otherwise, the maximum value among the groups and the
    /// user's individual limit is used.
    /// </para>
    /// </param>
    public WikiGroup(
        string groupName,
        string owner,
        int uploadLimit)
    {
        GroupName = groupName;
        Owner = owner;
        UploadLimit = uploadLimit;
    }

    /// <summary>
    /// Initializes a new instance of <see cref="UserGroup"/>.
    /// </summary>
    /// <param name="id">The item's <see cref="IdItem.Id"/>.</param>
    /// <param name="idItemTypeName">The type discriminator.</param>
    /// <param name="groupName">
    /// The display name for this group.
    /// </param>
    /// <param name="owner">
    /// <para>
    /// The owner of this group.
    /// </para>
    /// <para>
    /// May be a user or another group.
    /// </para>
    /// </param>
    /// </param>
    /// <param name="uploadLimit">
    /// <para>
    /// The total number of kilobytes of uploaded files permitted for users who belong to this
    /// group.
    /// </para>
    /// <para>
    /// A negative value indicates that group members may upload files without limit.
    /// </para>
    /// <para>
    /// This value may be overridden by the value assigned to individual group members, or by
    /// the value of other groups to which a user belongs. Any negative value indicates that the
    /// user may upload without limit. Otherwise, the maximum value among the groups and the
    /// user's individual limit is used.
    /// </para>
    /// </param>
    /// <remarks>
    /// Note: this constructor is most useful for deserializers.
    /// </remarks>
    [JsonConstructor]
    public WikiGroup(
        string id,
#pragma warning disable IDE0060 // Remove unused parameter: Used by deserializers.
        string idItemTypeName,
#pragma warning restore IDE0060 // Remove unused parameter
        string groupName,
        string owner,
        int uploadLimit) : base(id)
    {
        GroupName = groupName;
        Owner = owner;
        UploadLimit = uploadLimit;
    }
}
