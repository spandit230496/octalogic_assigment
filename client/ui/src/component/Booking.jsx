import * as React from 'react';
import { Box, Button, Typography, Divider } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { setStep } from '../context/bookingSlice';

export default function Book() {
  const dispatch = useDispatch();
  const currentstep = useSelector((state) => state.booking.currentStep);
  const user = useSelector((state) => state.booking.user);
  const wheels = useSelector((state) => state.booking.wheels);
  const vehicleType = useSelector((state) => state.booking.vehicleType);
  const model = useSelector((state) => state.booking.model);
  const bookingDate = useSelector((state) => state.booking.bookingDate);

  const handleConfirm = () => {
    alert("Booking Confirmed!");
    dispatch(setStep(currentstep + 1)); // move to next step if needed
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
        borderRadius: "8px"
      }}
    >
      <Typography variant="h6">Booking Summary</Typography>
      <Divider />

      <Typography><strong>Name:</strong> {user.first_name} {user.last_name}</Typography>
      <Typography><strong>Wheels:</strong> {wheels?.wheel || "Not selected"}</Typography>
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
