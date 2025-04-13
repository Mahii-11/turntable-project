import { Outlet } from "react-router-dom";
import Header from "./Header";

function AppLayout() {
  return (
    <div>
      <Header />
      <main className="pt-24">
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayout;
