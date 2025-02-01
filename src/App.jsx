import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./ui/Home";
import Menu, { loader as menuLoader } from "./features/menu/Menu";
import Cart from "./features/cart/Cart";
import CreateOrder from "./features/order/CreateOrder";
import Order, { loader as orderLoader } from "./features/order/Order";
import AppLayout from "./ui/AppLayout";
import Error from "./ui/Error";

const router = createBrowserRouter([
  {
    // pathを省略することで、親ルートとなり、下の子ルートの共通レイアウトとしての役割を持つ
    element: <AppLayout></AppLayout>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/menu",
        element: <Menu></Menu>,
        // import loader as menuLoader
        loader: menuLoader,
        errorElement: <Error></Error>,
      },
      {
        path: "/cart",
        element: <Cart></Cart>,
      },
      {
        path: "/order/new",
        element: <CreateOrder></CreateOrder>,
      },
      {
        path: "/order/:orderId",
        element: <Order></Order>,
        loader: orderLoader,
        errorElement: <Error></Error>,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
