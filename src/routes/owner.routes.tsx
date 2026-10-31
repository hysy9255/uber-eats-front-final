import { Navigate } from "react-router-dom";
import { UserRole } from "../shared/types/userRole.type";
import OwnerDashboardLayout from "../layouts/RestaurantDashboardLayout/OwnerDashboardLayout";
import RestaurantPromotionsPage from "../pages/restaurantDashboardPages/RestaurantPromotionsPage";
import RestaurantSettingsPage from "../pages/restaurantDashboardPages/RestaurantSettingsPage/RestaurantSettingsPage";
import RestaurantOrdersPage from "../pages/restaurantDashboardPages/RestaurantOrdersPage/RestaurantOrdersPage";
import MenuManagementPage from "../pages/restaurantDashboardPages/MenuManagementPage/MenuManagementPage";
import RestaurantOverviewPage from "../pages/restaurantDashboardPages/RestaurantOverviewPage/RestaurantOverviewPage";
import RestaurantHoursPage from "../pages/restaurantDashboardPages/RestaurantHoursPage/RestaurantHoursPage";
import { RestaurantDashboardProvider } from "../pages/restaurantDashboardPages/shared/context/RestaurantDashboardProvider";
import RequireRole from "../shared/components/RequiredRole";
import { MenuManagementProvider } from "../pages/restaurantDashboardPages/MenuManagementPage/context/MenuManagementProvider";
import { MenuModalProvider } from "../pages/restaurantDashboardPages/MenuManagementPage/components/MenuTable/context/MenuModalProvider";

export const ownerRoutes = [
  {
    element: <RequireRole allowedRole={UserRole.Owner} />,
    children: [
      {
        path: "dashboard",
        element: (
          <RestaurantDashboardProvider>
            <OwnerDashboardLayout />
          </RestaurantDashboardProvider>
        ),
        children: [
          {
            index: true,
            element: <Navigate to="overview" replace />,
          },
          {
            path: "overview",
            element: <RestaurantOverviewPage />,
          },
          {
            path: "orders",
            element: <RestaurantOrdersPage />,
          },
          {
            path: "menu",
            element: (
              <MenuManagementProvider>
                <MenuModalProvider>
                  <MenuManagementPage />
                </MenuModalProvider>
              </MenuManagementProvider>
            ),
          },
          {
            path: "hours",
            element: <RestaurantHoursPage />,
          },
          {
            path: "promotions",
            element: <RestaurantPromotionsPage />,
          },
          {
            path: "settings",
            element: <RestaurantSettingsPage />,
          },
        ],
      },
    ],
  },
];
