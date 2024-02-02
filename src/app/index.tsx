import PostPage from "@pages/post/index";
import "./index.scss";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Home } from "@pages/index";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/post/:postId",
    element: <PostPage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
