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
  dashboardModal: false,
  corporateOfficesModal: false,
  subscriptionFormModal: false,
  welcomeModal: false,
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

    // dashboard login
    showDashboardModal(state) {
      state.dashboardModal = true;
    },
    hideDashboardLogin(state) {
      state.dashboardModal = false;
    },

    //corporate offices
    showCorporateOfficesModal(state) {
      state.corporateOfficesModal = true;
    },
    hideCorporateOfficesModal(state) {
      state.corporateOfficesModal = false;
    },

    // subscription form
    showSubscriptionFormModal(state) {
      state.subscriptionFormModal = true;
    },
    hideSubscriptionFormModal(state) {
      state.subscriptionFormModal = false;
    },

    //welcome
    showWelcomeModal(state) {
      state.welcomeModal = true;
    },
    hideWelcomeModal(state) {
      state.welcomeModal = false;
    },
  },
});

const initialSubscriptionForm = {
  country: "",
  password: "",
  email: "",
  firstName: "",
  middleName: "",
  lastName: "",
  contact: "",
  address: "",
  propertyNo: "",
  streetName: "",
  city: "",
  state: "",
  landMark: "",
  zipCode: "",
  BusinessName: "",
  CategoryType: "",
  ActivationDate: "",
  timingSchedule: "",
  solution: { solutionType: "", selectedSolutions: "" },
};

const subscriptionFormSlice = createSlice({
  name: "subscriptionForm",
  initialState: initialSubscriptionForm,
  reducers: {
    setSelectedSolutionType(state, action) {
      const { solutionType } = action.payload;
      state.solution = {
        ...state.solution,
        solutionType: solutionType,
      };
    },
    setSelectedSolutions(state, action) {
      const { selectedSolutions } = action.payload;
      state.solution = {
        ...state.solution,
        selectedSolutions: selectedSolutions,
      };
    },
  },
});

// const initialUserState = {
//   individual: false,
//   enterprise: false,
// };

// const userLoginSlice = createSlice({
//   name: "userLogin",
//   initialState: initialUserState,
//   reducers: {},
// });

const store = configureStore({
  reducer: {
    modal: modalSlice.reducer,
    subscriptionForm: subscriptionFormSlice.reducer,
  },
});

export const modalActions = modalSlice.actions;
export const subscriptionFormActions = subscriptionFormSlice.actions;

export default store;
