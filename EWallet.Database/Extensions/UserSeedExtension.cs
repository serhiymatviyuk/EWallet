using EWallet.Domain.Entities;
using EWallet.Domain.Enums;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using System.Reflection.Emit;

namespace EWallet.Database.Extensions
{
    internal static class UserSeedExtension
    {
        private const string ADMIN_ID = "fd1b9f06-ac5a-4698-b8a8-cf7d36dcee98";
        private const string ADMIN_ROLE_ID = "bc92cb8b-84cc-4c12-a41e-541bfee2f254";
        private const string USER_ROLE_ID = "bfa31584-b3e8-4296-b7d5-918f359b8154";

        public static ModelBuilder SeedDefaultUser(this ModelBuilder builder)
        {
            builder.Entity<IdentityRole>()
                .HasData(new IdentityRole
                {
                    Id = ADMIN_ROLE_ID,
                    Name = UserRole.Admin.ToString(),
                    NormalizedName = UserRole.Admin.ToString().ToUpper()
                });

            builder.Entity<IdentityRole>()
                .HasData(new IdentityRole
                {
                    Id = USER_ROLE_ID,
                    Name = UserRole.User.ToString(),
                    NormalizedName = UserRole.User.ToString().ToUpper()
                });

            var hasher = new PasswordHasher<User>();


            builder.Entity<User>()
                .HasData(new User
                {
                    Id = ADMIN_ID,
                    UserName = "admin@mail.com",
                    NormalizedUserName = "ADMIN@MAIL.COM",
                    FirstName = "Admin",
                    LastName = "Admin",
                    PasswordHash = hasher.HashPassword(null, "admiN@"),
                    CreatedDate = DateTime.UtcNow.Date,
                });


            builder.Entity<IdentityUserRole<string>>()
                .HasData(new IdentityUserRole<string>
                {
                    RoleId = ADMIN_ROLE_ID,
                    UserId = ADMIN_ID
                });

            return builder;
        }
    }
}
