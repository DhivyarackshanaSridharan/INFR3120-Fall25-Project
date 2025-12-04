export default function NavBar({ user, onLogout }) {
  const token = localStorage.getItem('token');

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light px-3 shadow-sm">

      {/* Left side */}
      <div className="navbar-left">
        <span className="navbar-tagline">Welcome to SkillSwap</span>
      </div>

      {/* Right side */}
      <div className="navbar-right collapse navbar-collapse">
        <ul className="navbar-nav ms-auto">

          {/* Home Link */}
          <li className="nav-item">
            <a className="nav-link" href="#/">Home</a>
          </li>

          {/* If NOT logged in */}
          {!token ? (
            <>
              <li className="nav-item">
                <a className="nav-link" href="#/login">Login</a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#/register">Register</a>
              </li>
            </>
          ) : (
            <>
              {/* New Profile Link */}
              <li className="nav-item">
                <a className="nav-link" href="#/profile">My Profile</a>
              </li>

              {/* Logout button */}
              <li className="nav-item">
                <button
                  className="btn btn-outline-danger ms-2"
                  onClick={() => {
                    localStorage.removeItem('token');
                    onLogout?.();
                    window.location.hash = '#/login';
                  }}
                >
                  Logout
                </button>
              </li>
            </>
          )}
        </ul>

        {/* Signed in as */}
        {user && (
          <span className="navbar-text ms-3">
            Signed in as <strong>{user.name}</strong>
          </span>
        )}
      </div>
    </nav>
  );
}
