import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar/navbar";

import Home from "./components/Home/home";
import Collection from "./components/MyCollection/collection";
import Error from "./components/Error/error";
import store from "./components/store/store";
import { Provider } from "react-redux";
function App() {
  const route = createBrowserRouter([
    {
      path: "/",
      element: <Navbar />,
      children: [
        { path: "/", element: <Home /> },
        {
          path: "/mycollection",
          element: <Collection />,
        },
      ],
      errorElement: <Error />,
    },
  ]);
  return (
    <>
      <RouterProvider router={route} />
      
    </>
  );
}

export default App;
