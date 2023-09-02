using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using DAL.Data;
using DAL.UnitOfWork;
using BLL.Mappar;
using BLL.Service;
using BLL.Services;

namespace ValleyCamp.Api
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            //Set up DbConext And Connection String 
            services.AddDbContext<DataContext>(options => options.UseSqlServer(Configuration.GetConnectionString("Default"))); 
            services.AddControllers();
            services.AddCors();

            //Dependency Injected Here
            services.AddScoped<IUnitOfWork,UnitOfWork>();
            services.AddScoped<CampService,CampService>();
            services.AddScoped<UserService, UserService>();
            services.AddScoped<BookedCampService,BookedCampService>();
            services.AddAutoMapper(typeof(AutoMapperProfiles).Assembly);
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            //SetUP All the MiddleWare
            app.UseRouting();
            app.UseCors(m => m.AllowAnyOrigin().AllowAnyHeader().AllowAnyMethod());
            app.UseAuthentication();
            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}
