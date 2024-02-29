import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialModalState = {
  servicesModal: false,
  serviceId: "",
  careerModal: false,
};

const modalSlice = createSlice({
  name: "modal",
  initialState: initialModalState,
  reducers: {
    showServicesModal(state, action) {
      state.servicesModal = true;
      state.serviceId = action.payload.serviceId;
    },
    hideServicesModal(state) {
      state.servicesModal = false;
    },
    showCareerModal(state) {
      state.careerModal = true;
    },
    hideCareerModal(state) {
      state.careerModal = false;
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
