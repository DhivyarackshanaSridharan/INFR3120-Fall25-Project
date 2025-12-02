const passport = require('passport');
const GitHubStrategy = require('passport-github2').Strategy;

passport.use(new GitHubStrategy({
    clientID: process.env.GITHUB_CLIENT_ID,
    clientSecret: process.env.GITHUB_CLIENT_SECRET,
    callbackURL: process.env.BASE_URL + "/api/auth/github/callback"
}, async (accessToken, refreshToken, profile, done) => {
    try {
        // Simplified user object for now
        const user = {
            provider: 'github',
            id: profile.id,
            username: profile.username,
            email: (profile.emails && profile.emails[0]?.value) || null
        };
        return done(null, user);
    } catch (err) {
        return done(err, null);
    }
}));
