import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import {
  SignInButton,
  UserButton,
  useClerk,
  useUser,
} from '@clerk/react';

const Nav = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { signOut } = useClerk();
  const { isSignedIn, isLoaded, user } = useUser();

  // Navigation item definitions
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'How It Works', path: '/how-it-works' },
    { name: 'About', path: '/about' },
    { name: 'Research', path: '/research' },
  ];

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/' || location.pathname === '/home';
    return location.pathname.startsWith(path);
  };

  const handleSignOut = async () => {
    await signOut();
    navigate('/');
  };

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-slate-950/80 border-b border-slate-800/80 shadow-lg shadow-black/20">
      <nav className="max-w-7xl mx-auto sm:px-6 lg:px-8" aria-label="Main Navigation">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Brand / Logo */}
          <Link
            to="/"
            className="flex items-center gap-5 group focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded-lg p-1 transition-transform duration-200 hover:scale-[1.02]"
          >
            <img className="h-10" src="/logo.png" alt="logo" />
            <span className="font-extrabold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-purple-300 text-lg sm:text-xl uppercase">
              Smart Learning Agent
            </span>
          </Link>

          {/* Navigation Links (Desktop) */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`relative py-1 text-sm font-medium transition-colors duration-200 ${
                  isActive(item.path)
                    ? 'text-white font-semibold'
                    : 'text-slate-400 hover:text-slate-100'
                }`}
              >
                {item.name}
                {isActive(item.path) && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full" />
                )}
              </Link>
            ))}
          </div>

          {/* Action Buttons (Desktop) */}
          <div className="hidden md:flex items-center gap-4">
            {!isLoaded ? (
              <div className="w-20 h-8 bg-slate-800/50 animate-pulse rounded-lg" />
            ) : isSignedIn ? (
              <div className="flex items-center gap-4">
                <button
                  type="button"
                  onClick={handleSignOut}
                  className="px-4 py-2 text-sm font-semibold text-slate-300 hover:text-white border border-slate-700 hover:border-red-500/50 hover:bg-red-500/10 rounded-lg transition-all duration-200 cursor-pointer"
                >
                  Sign Out
                </button>
                <UserButton />
              </div>
            ) : (
              <SignInButton mode="modal">
                <button
                  type="button"
                  className="px-4 py-2 text-sm font-semibold text-slate-200 hover:text-white border border-slate-700 hover:border-slate-500 rounded-lg transition-all duration-200 hover:bg-slate-800/60 cursor-pointer"
                >
                  Sign In
                </button>
              </SignInButton>
            )}

            <Link
              to="/get-started"
              className="px-5 py-2 text-sm font-semibold text-white bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500 rounded-lg shadow-md shadow-purple-600/30 hover:shadow-purple-600/50 transform hover:-translate-y-0.5 transition-all duration-200"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800/60 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              aria-label="Toggle navigation menu"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-slate-800/80 space-y-3 bg-slate-950/95 rounded-b-xl px-2">
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-3 py-2 rounded-md text-base font-medium transition-colors ${
                    isActive(item.path)
                      ? 'bg-slate-800/90 text-white font-semibold'
                      : 'text-slate-400 hover:text-white hover:bg-slate-900'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            <div className="pt-3 border-t border-slate-800/80 flex flex-col gap-2">
              {!isLoaded ? (
                <div className="w-full h-10 bg-slate-900/50 animate-pulse rounded-lg" />
              ) : isSignedIn ? (
                <div className="flex items-center justify-between px-3 py-2 bg-slate-900/80 rounded-lg border border-slate-800">
                  <div className="flex items-center gap-3">
                    <UserButton />
                    <span className="text-sm font-medium text-slate-200 truncate max-w-[150px]">
                      {user?.fullName || user?.primaryEmailAddress?.emailAddress || 'User Account'}
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={async () => {
                      await signOut();
                      setMobileMenuOpen(false);
                      navigate('/');
                    }}
                    className="px-3 py-1.5 text-xs font-semibold text-red-400 hover:text-white border border-red-500/30 hover:border-red-500/80 hover:bg-red-500/20 rounded-md transition-all cursor-pointer"
                  >
                    Sign Out
                  </button>
                </div>
              ) : (
                <SignInButton mode="modal">
                  <button
                    type="button"
                    onClick={() => setMobileMenuOpen(false)}
                    className="w-full text-center px-4 py-2 text-sm font-semibold text-slate-200 border border-slate-700 hover:border-slate-500 rounded-lg bg-slate-900/50 hover:bg-slate-800/60 transition-all cursor-pointer"
                  >
                    Sign In
                  </button>
                </SignInButton>
              )}

              <Link
                to="/get-started"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center px-4 py-2 text-sm font-semibold text-white bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-lg shadow-md shadow-purple-600/30 transition-all"
              >
                Get Started
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Nav;

