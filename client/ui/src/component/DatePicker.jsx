import * as React from "react";
import dayjs from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import {Box,Button} from '@mui/material';
import { setWheels, setVehicleType, setVehicleModel, setBookingDate,setUser ,setStep} from '../context/bookingSlice';
import { useSelector, useDispatch } from "react-redux";

export default function DateSelection() {
  const [selectEndDate, setSelectEndDate] = React.useState(dayjs());
  const [selectStartDate, setSelectStartDate] = React.useState(dayjs());
  const dispatch = useDispatch()
  const currentstep = useSelector((state) => state.booking.currentStep);

  

  const handleSaveNext = () => {
      dispatch(setBookingDate({"start_date":dayjs(selectStartDate).format("YYYY-MM-DD"),"end_date":dayjs(selectEndDate).format("YYYY-MM-DD")}));
      dispatch(setStep(currentstep+1))
    };

  return (
    <Box  sx={{display: "flex", flexDirection: "column", gap: 4,alignItems:"center"}}>
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Box sx={{ display: "flex", flexDirection: "row", gap: 4 }}>
        <DatePicker
          label="Select Start Date"
          value={selectStartDate}
          onChange={(newValue) => setSelectStartDate(newValue)}
        />
        <DatePicker
          label="Select End Date"
          value={selectEndDate}
          onChange={(newValue) => setSelectEndDate(newValue)}
        />
      </Box>
    </LocalizationProvider>
        <Button variant="contained" onClick={()=>handleSaveNext()} sx={{width:"50%"}}>
          Next
        </Button>
    </Box>
  );
}
