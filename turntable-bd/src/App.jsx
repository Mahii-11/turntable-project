import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Menu, { loader as menuLoader } from "./features/menu/Menu";
import Cart from "./features/cart/Cart";
import CreateOrder, {
  action as createOrderAction,
} from "./features/order/CreateOrder";
import Order, { loader as orderLoader } from "./features/order/Order";
import AppLayout from "./ui/AppLayout";
import Error from "./ui/Error";
import ServicesPage from "./pages/ServicesPage";
import ContactForm from "./pages/ContactForm";
import MeetOurFounder from "./pages/MeetOurFounder";
import TurntableMenu, {
  loader as turntableLoader,
} from "./features/menu/TurntableMenu";

import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./features/admin/AdminDashboard";
import ManageTurntables from "./features/admin/ManageTurntables ";
import ProtectedRoute from "./components/ProtectedRoute"; // Correct path based on your folder structure
import ManageParts from "./features/admin/ManageParts";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/login", element: <AdminLogin /> },
      {
        path: "/🎵Turntables",
        element: <Menu />,
        loader: menuLoader,
        errorElement: <Error />,
      },

      {
        path: "/PartsHub",
        element: <TurntableMenu />,
        loader: turntableLoader,
        errorElement: <Error />,
      },
      {
        path: "/services",
        element: <ServicesPage />,
      },
      {
        path: "/contact",
        element: <ContactForm />,
      },

      {
        path: "/meet-our-founder",
        element: <MeetOurFounder />,
      },
      { path: "/cart", element: <Cart /> },
      // { path: "/login", element: <AdminLogin /> },
      {
        path: "/order/new",
        element: <CreateOrder />,
        action: createOrderAction,
      },
      {
        path: "/order/:id",
        element: <Order />,
        loader: orderLoader,
        errorElement: <Error />,
      },
    ],
  },
  {
    path: "/admin",
    element: (
      <ProtectedRoute>
        <AdminDashboard />
      </ProtectedRoute>
    ), // Admin Dashboard protected by ProtectedRoute
    children: [
      { path: "turntables", element: <ManageTurntables /> },
      { path: "parts", element: <ManageParts /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
