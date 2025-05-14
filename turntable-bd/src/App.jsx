import "./i18next-config";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Helmet } from "react-helmet";
import Home from "./pages/Home";
import Menu, { loader as menuLoader } from "./features/menu/Menu";
import TurntableDetailItem, {
  loader as TurntableDetailsLoader,
} from "./features/menu/TurntableDetailItem";
import TurntableMenu, {
  loader as turntableLoader,
} from "./features/menu/TurntableMenu";
import TurntablePartDetail, {
  loader as TurntablePartDetailsLoader,
} from "./features/menu/TurntablePartDetail";
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
import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./features/admin/AdminDashboard";
import ManageTurntables from "./features/admin/ManageTurntables ";
import ProtectedRoute from "./components/ProtectedRoute";
import ManageParts from "./features/admin/ManageParts";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <Home /> },
      {
        path: "/🎵Turntables",
        element: <Menu />,
        loader: menuLoader,
        errorElement: <Error />,
      },

      {
        path: "/🎵Turntables/:id",
        element: <TurntableDetailItem />,
        loader: TurntableDetailsLoader,
        errorElement: <Error />, //TurntablePartDetail
      },
      {
        path: "/PartsHub",
        element: <TurntableMenu />,
        loader: turntableLoader,
        errorElement: <Error />,
      },

      {
        path: "/PartsHub/:id",
        element: <TurntablePartDetail />,
        loader: TurntablePartDetailsLoader,
        errorElement: <Error />,
      },

      {
        path: "/services",
        element: <ServicesPage />,
      },
      { path: "/contact", element: <ContactForm /> },
      { path: "/login", element: <AdminLogin /> },
      { path: "/meet-our-founder", element: <MeetOurFounder /> },
      { path: "/cart", element: <Cart /> },

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
    ),
    errorElement: <Error />,
    children: [
      { path: "turntables", element: <ManageTurntables /> },
      { path: "parts", element: <ManageParts /> },
    ],
  },
]);

function App() {
  return (
    <>
      <Helmet>
        <title>Turntable Store - Your One Stop Shop</title>
        <meta
          name="description"
          content="Shop premium turntables and parts at unbeatable prices. High-quality products, fast shipping, and excellent customer service."
        />
      </Helmet>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
