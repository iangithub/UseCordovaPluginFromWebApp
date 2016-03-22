using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(WebAppMvc.Startup))]
namespace WebAppMvc
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
