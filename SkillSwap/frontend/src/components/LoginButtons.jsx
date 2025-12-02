import React from 'react';


const LoginButtons = () => {
  return (
    <div className="login-buttons">
      <a href="https://skillswapbackend-f83q.onrender.com/api/auth/google">
        <button className="login-btn google">
          <img src="/icons/google.svg" alt="Google" />
          Sign in with Google
        </button>
      </a>

      <a href="https://skillswapbackend-f83q.onrender.com/api/auth/github">
        <button className="login-btn github">
          <img src="/icons/github.svg" alt="GitHub" />
          Sign in with GitHub
        </button>
      </a>

      <a href="https://skillswapbackend-f83q.onrender.com/api/auth/discord">
        <button className="login-btn discord">
          <img src="/icons/discord.svg" alt="Discord" />
          Sign in with Discord
        </button>
      </a>
    </div>
  );
};

export default LoginButtons;
