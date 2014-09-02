using System.Web.Mvc;

namespace CorProgramDesign.Controllers
{
    public class SignInController : Controller
    {
        public ActionResult SignInModal()
        {
            return PartialView();
        }
    }
}
