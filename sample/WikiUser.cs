using Microsoft.AspNetCore.Identity;

namespace Tavenem.Wiki.Mvc.Sample;

/// <summary>
/// A user of the wiki.
/// </summary>
public class WikiUser : IdentityUser, IWikiUser
{
    /// <summary>
    /// <para>
    /// The date and time when this user's account was last disabled.
    /// </para>
    /// <para>
    /// <seealso cref="IsDisabled"/>
    /// </para>
    /// </summary>
    public DateTimeOffset? DisabledStart { get; set; }

    /// <summary>
    /// A list of the group IDs to which this user belongs (if any).
    /// </summary>
    public List<string>? Groups { get; set; }

    /// <summary>
    /// Whether this user's account has been (soft) deleted.
    /// </summary>
    public bool IsDeleted { get; set; }

    /// <summary>
    /// Whether this user's account has been disabled.
    /// </summary>
    public bool IsDisabled { get; set; }

    /// <summary>
    /// Whether this user is a wiki administrator.
    /// </summary>
    public bool IsWikiAdmin { get; set; }

    /// <summary>
    /// The date and time when this account was last used to sign in.
    /// </summary>
    public DateTimeOffset LastAccess { get; set; }

    /// <summary>
    /// <para>
    /// The total number of kilobytes of uploaded files permitted for this user.
    /// </para>
    /// <para>
    /// A negative value indicates that the user may upload files without limit.
    /// </para>
    /// <para>
    /// This value may be overridden by the value assigned to any <see cref="IWikiGroup"/> to
    /// which this user belongs. Any negative value indicates that the user may upload without
    /// limit. Otherwise, the maximum value among the groups and the user's individual limit is
    /// used.
    /// </para>
    /// </summary>
    public int UploadLimit { get; set; }

    /// <summary>
    /// Initializes a new instance of <see cref="WikiUser"/>.
    /// </summary>
    /// <remarks>
    /// The Id property is initialized to form a new GUID string value.
    /// </remarks>
    public WikiUser() { }

    /// <summary>
    /// Initializes a new instance of <see cref="WikiUser"/>.
    /// </summary>
    /// <param name="userName">The user name.</param>
    /// <remarks>
    /// The Id property is initialized to form a new GUID string value.
    /// </remarks>
    public WikiUser(string userName) : base(userName) { }
}
