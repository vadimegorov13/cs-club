import type { LinksFunction, MetaFunction } from 'remix';
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from 'remix';
import globalStyles from '~/styles/global.css';
import navbarStyles from '~/styles/navbar.css';
import indexStyles from '~/styles/index.css';
import Footer from './components/Layout/Footer';
import Navbar from './components/Layout/Navbar';

export const links: LinksFunction = () => {
  return [
    {
      rel: 'stylesheet',
      href: globalStyles,
    },
    {
      rel: 'stylesheet',
      href: navbarStyles,
    },
    {
      rel: 'stylesheet',
      href: indexStyles,
    },
  ];
};


export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>

      <body>
        <Navbar />

        <main>
          <Outlet />

          <ScrollRestoration />
          <Scripts />
          {process.env.NODE_ENV === 'development' && <LiveReload />}
        </main>

        <Footer />
      </body>
    </html>
  );
}

export const meta: MetaFunction = () => {
  return { title: 'CS Club' };
};