import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import Layout from "./Layout/Layout";

import DeleteSubjectModal from "./modal/Services/ServicesModal";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
      </Route>
    )
  );
  return (
    <div>
      <DeleteSubjectModal />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
