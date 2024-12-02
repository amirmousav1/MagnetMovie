import { Toaster } from "react-hot-toast";
import { Link, Outlet } from "react-router";

function AppLayout() {
  return (
    <div className="font-iranyekan">
      <Toaster position="top-center" reverseOrder={false} />

      <header className="flex justify-center pt-4">
        <div>
          <Link to="/">
            <img className="w-[125px]" src="/logo.png" alt="Logo" />
          </Link>
        </div>
      </header>
      <main className="mt-4 w-fit mx-auto">
        <Outlet />
      </main>
      <footer className="text-center py-5">
        <p dir="ltr">©{new Date().getFullYear()} - MagnetMovie</p>
      </footer>
    </div>
  );
}

export default AppLayout;
