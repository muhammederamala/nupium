import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import EnterpriseHomePage from './pages/Enterprise/Home/EnterpriseHomePage'
import Layout from "./Layout/Layout";

import DeleteSubjectModal from "./modal/Services/ServicesModal";
import CareerModal from "./modal/Career/CareerModal";
import ApplicationSubmittedModal from "./modal/Career/ApplicationSubmittedModal";
import CompanyModal from "./modal/Company/CompanyModal";
import ContactUsModal from "./modal/ContactUs/ContactusModal";
import Sales from "./modal/Sales/Sales";
import PackagesModal from "./modal/packages/PackagesModal";
import DashboardLoginModal from "./modal/DashboardLogin/DashboardLoginModal";
import CorporateOfficesModal from "./modal/CorporateOffices/CorporateOfficesModal";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/enterprise" element={<EnterpriseHomePage />} />
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
      <Sales />
      <PackagesModal />
      <DashboardLoginModal />
      <CorporateOfficesModal />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
