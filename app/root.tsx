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
import containerStyles from '~/styles/containers.css';
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
      href: containerStyles,
    },
  ];
};

export default function App() {
  return (
    <Document>
      <Outlet />
    </Document>
  );
}

const Document = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        ></link>
        <Meta />
        <Links />
      </head>

      <body>
        <Navbar />

        <main>
          {children}

          <ScrollRestoration />
          <Scripts />
          {process.env.NODE_ENV === 'development' && <LiveReload />}
        </main>

        <Footer />
      </body>
    </html>
  );
};

export const ErrorBoundary = ({ error }: { error: Error }) => {
  return (
    <Document>
      <div className="error-container">
        <h1>App Error</h1>
        <pre>{error.message}</pre>
      </div>
    </Document>
  );
};

export const meta: MetaFunction = () => {
  return { title: 'CS Club' };
};
