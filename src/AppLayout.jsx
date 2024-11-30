import { Toaster } from "react-hot-toast";
import { Link, Outlet } from "react-router";

function AppLayout() {
  return (
    <div className="font-iranyekan">
      <Toaster position="top-center" reverseOrder={false} />

      <header className="flex justify-center pt-4">
        <div>
          <Link to="/">
            <img className="w-[125px]" src="../public/logo.png" alt="Logo" />
          </Link>
        </div>
      </header>
      <main className="mt-4">
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayout;
