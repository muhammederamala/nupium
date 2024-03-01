import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import Layout from "./Layout/Layout";

import DeleteSubjectModal from "./modal/Services/ServicesModal";
import CareerModal from "./modal/Career/CareerModal";
import ApplicationSubmittedModal from "./modal/Career/ApplicationSubmittedModal";
import CompanyModal from "./modal/Company/CompanyModal";
import ContactUsModal from "./modal/ContactUs/ContactusModal";

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
      <CareerModal />
      <ApplicationSubmittedModal />
      <CompanyModal />
      <ContactUsModal />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
