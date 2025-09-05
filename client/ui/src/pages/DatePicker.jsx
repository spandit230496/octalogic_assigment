import * as React from "react";
import dayjs from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import {Box,Button} from '@mui/material';

export default function DateSelection({ onBook }) {
  const [selectedDate, setSelectedDate] = React.useState(dayjs());

  const handleBook = () => {
    if (onBook) onBook(selectedDate);
    console.log("Booked date:", selectedDate.format("YYYY-MM-DD"));
  };

  return (
    <Box  sx={{display: "flex", flexDirection: "column", gap: 4,alignItems:"center"}}>
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Box sx={{ display: "flex", flexDirection: "row", gap: 4 }}>
        <DatePicker
          label="Select Date"
          value={selectedDate}
          onChange={(newValue) => setSelectedDate(newValue)}
        />
        <DatePicker
          label="Select Date"
          value={selectedDate}
          onChange={(newValue) => setSelectedDate(newValue)}
        />
      </Box>
    </LocalizationProvider>
        <Button variant="contained" onClick={handleBook} sx={{width:"50%"}}>
          Book
        </Button>
    </Box>
  );
}
