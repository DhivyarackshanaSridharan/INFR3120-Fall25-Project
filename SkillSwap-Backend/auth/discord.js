const passport = require('passport');
const DiscordStrategy = require('passport-discord').Strategy;

passport.use(new DiscordStrategy({
    clientID: process.env.DISCORD_CLIENT_ID,
    clientSecret: process.env.DISCORD_CLIENT_SECRET,
    callbackURL: process.env.DISCORD_CALLBACK_URL,
    scope: ['identify', 'email']
}, async (accessToken, refreshToken, profile, done) => {
    try {
        // Simplified user object for now
        const user = {
            provider: 'discord',
            id: profile.id,
            username: profile.username,
            email: profile.email || null
        };
        return done(null, user);
    } catch (err) {
        return done(err, null);
    }
}));
