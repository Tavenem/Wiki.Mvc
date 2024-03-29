﻿using System.Security.Claims;

namespace Tavenem.Wiki.Mvc.Sample.Services;

/// <summary>
/// An implementation of <see cref="IWikiUserManager"/> which always returns a static user.
/// </summary>
public class WikiUserManager : IWikiUserManager
{
    public const string UserId = "A478AF94-44AF-4F21-AD65-71B77B9A569A";
    private static readonly WikiUser _User = new()
    {
        DisplayName = "User",
        Id = UserId,
        IsWikiAdmin = true,
    };

    /// <summary>
    /// Finds and returns a user, if any, who has the specified <paramref name="userId"/>.
    /// </summary>
    /// <param name="userId">The user ID to search for.</param>
    /// <returns>
    /// The <see cref="Task"/> that represents the asynchronous operation, containing the user
    /// matching the specified <paramref name="userId"/> if it exists.
    /// </returns>
    public ValueTask<IWikiUser?> FindByIdAsync(string? userId)
        => new(string.IsNullOrEmpty(userId) ? null : _User);

    /// <summary>
    /// Finds and returns a user, if any, who has the specified user name.
    /// </summary>
    /// <param name="userName">The user name to search for.</param>
    /// <returns>
    /// The <see cref="Task"/> that represents the asynchronous operation, containing the user
    /// matching the specified <paramref name="userName"/> if it exists.
    /// </returns>
    public ValueTask<IWikiUser?> FindByNameAsync(string? userName)
        => new(string.IsNullOrEmpty(userName) ? null : _User);

    /// <summary>
    /// Returns the user corresponding to the IdentityOptions.ClaimsIdentity.UserIdClaimType
    /// claim in the <paramref name="principal"/> or <see langword="null"/>.
    /// </summary>
    /// <param name="principal">The principal which contains the user id claim.</param>
    /// <returns>
    /// The user corresponding to the IdentityOptions.ClaimsIdentity.UserIdClaimType claim in
    /// the <paramref name="principal"/> or <see langword="null"/>
    /// </returns>
    public ValueTask<IWikiUser?> GetUserAsync(ClaimsPrincipal? principal)
        => new(_User);
}
