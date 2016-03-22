using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace WebAppMvc.Controllers
{
    public class HomeController : Controller
    {
        const string platformCookieKey = "user_platform";

        public ActionResult Index(string platform)
        {
            if (!string.IsNullOrWhiteSpace(platform))
            {
                HttpContext.Response.SetCookie(new HttpCookie(platformCookieKey, platform));
            }
            else
            {
                platform = "web";
            }
           
            ViewBag.Platform = platform;
            return View();
        }


        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }
    }
}