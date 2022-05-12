import { Outlet } from 'remix';

export default function Blogs() {
  return (
    <div>
      <header></header>

      <main>
        <div>
          <Outlet />
        </div>
      </main>
    </div>
  );
}
