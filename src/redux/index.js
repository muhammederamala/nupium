import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialModalState = {
  servicesModal: false,
  serviceId: "",
  careerModal: false,
  careerApplicationSubmittedModal: false,
  companyModal: false,
  contactUsModal: false,
  salesModal: false,
  packagesModal: false,
};

const modalSlice = createSlice({
  name: "modal",
  initialState: initialModalState,
  reducers: {
    //services
    showServicesModal(state, action) {
      state.servicesModal = true;
      state.serviceId = action.payload.serviceId;
    },
    hideServicesModal(state) {
      state.servicesModal = false;
    },

    //career
    showCareerModal(state) {
      state.careerModal = true;
    },
    hideCareerModal(state) {
      state.careerModal = false;
    },
    showCareerApplicationSubmittedModal(state) {
      state.careerModal = false;
      state.careerApplicationSubmittedModal = true;
    },
    hideCareerApplicationSubmittedModal(state) {
      state.careerApplicationSubmittedModal = false;
    },

    //company
    showCompanyModal(state) {
      state.companyModal = true;
    },
    hideCompanyModal(state) {
      state.companyModal = false;
    },

    // contact us
    showContactUsModal(state) {
      state.contactUsModal = true;
    },
    hideContactUsModal(state) {
      state.contactUsModal = false;
    },

    // sales
    showSalesModal(state) {
      state.salesModal = true;
    },
    hideSalesModal(state) {
      state.salesModal = false;
    },

    // packages
    showPackagesModal(state) {
      state.packagesModal = true;
    },
    hidePackagesModal(state) {
      state.packagesModal = false;
    },
  },
});

const store = configureStore({
  reducer: {
    modal: modalSlice.reducer,
  },
});

export const modalActions = modalSlice.actions;

export default store;
