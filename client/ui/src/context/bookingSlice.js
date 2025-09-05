import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentStep:0,
  user:{},
  wheels: "",
  vehicleType: "",
  vehicleModel: "",
  bookingDate: null,
};

const bookingSlice = createSlice({
  name: "booking",
  initialState,
  reducers: {
    setStep:(state,action)=>{
       state.currentStep =action.payload
    },
    setUser:(state,action)=>{
       state.user =action.payload
    },
    setWheels: (state, action) => {
      state.wheels = action.payload;
    },
    setVehicleType: (state, action) => {
      state.vehicleType = action.payload;
    },
    setVehicleModel: (state, action) => {
      state.vehicleModel = action.payload;
    },
    setBookingDate: (state, action) => {
      state.bookingDate = action.payload;
    },
  },
});

export const { setWheels, setVehicleType, setVehicleModel, setBookingDate,setUser ,setStep} =
  bookingSlice.actions;

export default bookingSlice.reducer;
