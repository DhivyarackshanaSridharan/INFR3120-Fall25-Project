const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    // Explicitly set full callback URL
    callbackURL: "https://skillswapbackend-f83q.onrender.com/api/auth/google/callback"
}, async (accessToken, refreshToken, profile, done) => {
    try {
        // Debug log to confirm strategy is firing
        console.log("Google strategy triggered, profile:", profile.id);

        // Simplified user object
        const user = {
            provider: 'google',
            id: profile.id,
            email: profile.emails?.[0]?.value,
            displayName: profile.displayName
        };
        return done(null, user);
    } catch (err) {
        return done(err, null);
    }
}));
