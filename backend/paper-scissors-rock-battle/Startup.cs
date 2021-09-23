using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Storage;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using paper_scissors_rock_battle.Data;
using paper_scissors_rock_battle.GraphQL.Matches;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace paper_scissors_rock_battle
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }
        readonly string MyAllowSpecificOrigins = "_myAllowSpecificOrigins";

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
             services.AddCors(options =>
    {
        options.AddPolicy(name: MyAllowSpecificOrigins,
                          builder =>
                          {
                              builder.WithOrigins("http://localhost:3000", "https://paper-scissors-rock-battle.azurewebsites.net")
                                                    .AllowAnyHeader()
                                                    .AllowAnyMethod();
                          });
    });

            services.AddPooledDbContextFactory<AppDbContext>(options =>
                options.UseSqlServer(Configuration.GetConnectionString("DefaultConnection")));
            
            services
                .AddGraphQLServer()
                .AddQueryType(d => d.Name("Query"))     //create an empty query object
                    .AddTypeExtension<MatchQueries>()  //extend the query
                .AddFiltering()
                .AddSorting()
                .AddProjections();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseHttpsRedirection();

            app.UseRouting();

            app.UseCors(builder => {
                builder.WithOrigins("http://localhost:3000", "https://paper-scissors-rock-battle.azurewebsites.net")
                        .AllowAnyHeader()
                        .AllowAnyMethod()
                        .AllowCredentials();
            });

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapGraphQL();
            });
        }
    }
}
