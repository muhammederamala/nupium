import { useEffect } from "react";
import {
  RouterProvider,
} from "react-router-dom";

import DeleteSubjectModal from "./modal/Services/ServicesModal";
import CareerModal from "./modal/Career/CareerModal";
import ApplicationSubmittedModal from "./modal/Career/ApplicationSubmittedModal";
import CompanyModal from "./modal/Company/CompanyModal";
import ContactUsModal from "./modal/ContactUs/ContactusModal";
import Sales from "./modal/Sales/Sales";
import PackagesModal from "./modal/packages/PackagesModal";
import DashboardLoginModal from "./modal/DashboardLogin/DashboardLoginModal";
import CorporateOfficesModal from "./modal/CorporateOffices/CorporateOfficesModal";
import SubscrptionForm from "./modal/SubscriptionForm/SubscriptionForm";
import WelcomeModal from "./modal/Welcome/WelcomeModal";

import { modalActions } from "./redux";
import { useDispatch } from "react-redux";
import Router from "./routes/Route";

function App() {
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(modalActions.)
  // }, []);

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
      <SubscrptionForm />
      <WelcomeModal />
      <RouterProvider router={Router}></RouterProvider>
    </div>
  );
}

export default App;
