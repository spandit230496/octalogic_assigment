import * as React from 'react';
import { Box, Button, Typography, Divider } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { setStep } from '../context/bookingSlice';
import {HOST} from '../HOST'

export default function Book() {
  const dispatch = useDispatch();
  const currentstep = useSelector((state) => state.booking.currentStep);
  const user = useSelector((state) => state.booking.user);
  const wheels = useSelector((state) => state.booking.wheels);
  const vehicleType = useSelector((state) => state.booking.vehicleType);
  const model = useSelector((state) => state.booking.vehicleModel);
  const bookingDate = useSelector((state) => state.booking.bookingDate);
  

  const handleConfirm = async () => {
  try {
    const payload = {
      first_name: user?.first_name,
      last_name: user?.last_name,
      vehicle_id: model?.id,
      vehicle_type_id: vehicleType?.id,
      start_date: bookingDate?.start_date,
      end_date: bookingDate?.end_date,
    };

    const response = await fetch(`${HOST}api/booking/book`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    const data = await response.json();
    dispatch(setStep(currentstep + 1));
  } catch (err) {
    console.error("Error confirming booking:", err);
    alert("There was an error confirming your booking. Please try again.");
  }
};


  return (
    <Box
      sx={{
        p: 3,
        display: "flex",
        flexDirection: "column",
        gap: 2,
        maxWidth: "400px",
        margin: "auto",
        border: "1px solid #ccc",
        borderRadius: "8px",
        color:"black"


      }}
    >
      <Typography variant="h6">Booking Summary</Typography>
      <Divider />

      <Typography><strong>Name:</strong> {user.first_name} {user.last_name}</Typography>
      <Typography><strong>Vehicle:</strong>  {wheels==2?"Bike":"Car"} </Typography>
      <Typography><strong>Vehicle Type:</strong> {vehicleType?.vehicle_type || "Not selected"}</Typography>
      <Typography><strong>Model:</strong> {model?.model_name || "Not selected"}</Typography>
      <Typography>
            <strong>Booking Date:</strong>{" "}
            {bookingDate
            ? `${bookingDate.start_date} to ${bookingDate.end_date}`
            : "Not selected"}
      </Typography>


      <Button variant="contained" onClick={handleConfirm} sx={{ mt: 2 }}>
        Confirm Booking
      </Button>
    </Box>
  );
}
