namespace EWallet.Common.Helpers
{
    public static class PasswordHasher
    {
        // Value for algorithm, should be between 4 and 31
        private const int SALT_WORK_FACTOR = 12;

        private static string GetRandomSalt()
        {
            return BCrypt.Net.BCrypt.GenerateSalt(SALT_WORK_FACTOR);
        }

        public static string HashPassword(string password)
        {
            return BCrypt.Net.BCrypt.HashPassword(password, GetRandomSalt());
        }

        public static bool ValidatePassword(string password, string correctHash)
        {
            return BCrypt.Net.BCrypt.Verify(password, correctHash);
        }
    }
}
