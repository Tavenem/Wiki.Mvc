﻿using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace Tavenem.Wiki.Mvc.Sample.Pages;

public class IndexModel : PageModel
{
    public IActionResult OnGet() => Redirect("/wiki");
}
