import { useEffect, useState } from 'react';
import { Link, useLocation } from 'remix';

const routes = [
  {
    title: 'About Us',
    to: 'about',
  },
  {
    title: 'Events',
    to: 'events',
  },
  {
    title: 'Projects',
    to: 'projects',
  },
  {
    title: 'Blogs',
    to: 'blogs',
  },
  {
    title: 'Resources',
    to: 'resources',
  },
];

const Navbar = () => {
  // Get pathname
  const location = useLocation();
  const [pathname, setPathname] = useState<string>('');
  const [showBurger, setShowBurger] = useState(false);

  const handleBurger = () => {
    setShowBurger(!showBurger);
  };

  const closeBurger = () => {
    setShowBurger(false);
  };

  // Set pathname to
  useEffect(() => {
    setPathname(location.pathname);
  }, [location]);

  return (
    <nav>
      <div className={showBurger ? 'navbar responsive' : 'navbar'}>
        <ul>
          <li id="home-link">
            <Link to="" onClick={closeBurger}>
              Home
            </Link>
          </li>
          {routes.map((route) => (
            <li
              key={route.to}
              id={pathname === '/' + route.to ? 'current-link' : ''}
            >
              <Link to={route.to} onClick={closeBurger}>
                {route.title}
              </Link>
            </li>
          ))}
          <li id="burger">
            <a onClick={handleBurger}>
              <i className="fa fa-bars"></i>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
