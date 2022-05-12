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

  // Set pathname to
  useEffect(() => {
    setPathname(location.pathname);
  }, [location]);

  return (
    <nav>
      <div className="navbar">
        <ul>
          <li id="home-link">
            <Link to="">Home</Link>
          </li>
          {routes.map((route) => (
            <li
              key={route.to}
              id={pathname === '/' + route.to ? 'current-link' : ''}
            >
              <Link to={route.to}>{route.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
