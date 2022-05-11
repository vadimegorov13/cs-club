import { Outlet } from 'remix';

export default function About() {
  return (
    <div>

      <main>
        <div>
          <Outlet />
        </div>
      </main>
    </div>
  );
}