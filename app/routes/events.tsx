import { Outlet } from 'remix';

export default function Events() {
  return (
    <div>
      <header></header>
      <main>
        <div>
          <div className="blue-header-container"> Upcoming Events</div>
          <Outlet />
        </div>
      </main>
    </div>
  );
}
