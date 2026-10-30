import { Outlet } from "react-router-dom";
import OwnerNavigationSidebar from "./OwnerNavigationSidebar/OwnerNavigationSidebar";

const OwnerDashboardLayout = () => {
  return (
    <div className={`select-none flex`}>
      <OwnerNavigationSidebar />

      <main className="flex-1 min-w-[1000px]">
        <Outlet />
      </main>
    </div>
  );
};

export default OwnerDashboardLayout;
