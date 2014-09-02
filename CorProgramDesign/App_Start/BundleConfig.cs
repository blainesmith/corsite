using System.Web.Optimization;

namespace CorProgramDesign
{
    public class BundleConfig
    {
        // For more information on Bundling, visit http://go.microsoft.com/fwlink/?LinkId=254725
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/Scripts").Include(
                "~/Scripts/JQuery/jquery-{version}.js",
                "~/Scripts/Angular/angular.js",
                "~/Scripts/Bootstrap/bootstrap.js",
                "~/Scripts/Angular/angular-route.js",
                "~/Scripts/Angular/angular-resource.js",
                "~/Scripts/angular-ui/ui-bootstrap.js",
                "~/Scripts/angular-ui/ui-bootstrap-tpls.js"));

            // Use the development version of Modernizr to develop with and learn from. Then, when you're
            // ready for production, use the build tool at http://modernizr.com to pick only the tests you need.
            bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(
                "~/Scripts/modernizr-*"));

            bundles.Add(new ScriptBundle("~/Scripts/Startup").Include(
                "~/Scripts/Startup/homeModule.js",
                "~/Scripts/Startup/webAccess.js"
                ));

            bundles.Add(new ScriptBundle("~/Scripts/App/Controllers").IncludeDirectory("~/Scripts/App/Controllers",
                "*.js", true));
            bundles.Add(new ScriptBundle("~/Scripts/App/Dialogs").IncludeDirectory("~/Scripts/App/Dialogs", "*.js", true));
            bundles.Add(new ScriptBundle("~/Scripts/App/Directives").IncludeDirectory("~/Scripts/App/Directives", "*.js",
                true));
            bundles.Add(new ScriptBundle("~/Scripts/App/Filters").IncludeDirectory("~/Scripts/App/Filters", "*.js", true));
            bundles.Add(new ScriptBundle("~/Scripts/App/Services").IncludeDirectory("~/Scripts/App/Services", "*.js",
                true));

            bundles.Add(new StyleBundle("~/bundles/css").Include(
                "~/Content/bootstrap.css",
                "~/Content/site.css"));


        }
    }
}