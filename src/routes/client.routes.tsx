import { UserRole } from "@/shared/types/userRole.type";
import ProfilePage from "@/pages/profilePage/ProfilePage";
import { CartProvider } from "@/pages/clientPages/shared/context/cart/CartProvider";
import RestaurantsPage from "../pages/clientPages/restaurantsPage/RestaurantsPage";
import RestaurantPage from "../pages/clientPages/restaurantPage/RestaurantPage";
import DishPage from "../pages/clientPages/dishPage/DishPage";
import CartPage from "../pages/clientPages/cartPage/CartPage";
import { ClientOrdersPage } from "../pages/clientPages/clientOrdersPage/ClientOrdersPage";
import ClientPageLayout from "../layouts/ClientPageLayout/ClientPageLayout";
import { AddressProvider } from "../pages/clientPages/shared/context/address/AddressProvider";
import RequireRole from "../shared/components/RequiredRole";

export const clientRoutes = [
  {
    element: (
      <AddressProvider>
        <CartProvider>
          <ClientPageLayout />
        </CartProvider>
      </AddressProvider>
    ),
    children: [
      { path: "restaurants", element: <RestaurantsPage /> },
      {
        path: "restaurants/:restaurantId",
        element: <RestaurantPage />,
      },
      {
        path: "restaurants/:restaurantId/dishes/:dishId",
        element: <DishPage />,
      },
      {
        element: <RequireRole allowedRole={UserRole.Client} />,
        children: [
          {
            path: "cart",
            element: <CartPage />,
          },
          {
            path: "orders",
            element: <ClientOrdersPage />,
          },
          {
            path: "profile",
            element: <ProfilePage />,
          },
        ],
      },
    ],
  },
];
