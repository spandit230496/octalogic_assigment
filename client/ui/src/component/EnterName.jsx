import * as React from 'react';
import { Box, Button, Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { setUser, setStep } from '../context/bookingSlice';
import { HOST } from '../HOST';
import { ToastContainer, toast } from 'material-react-toastify';
import 'material-react-toastify/dist/ReactToastify.css';

export default function EnterName() {
  const [user, setUsers] = useState({ first_name: "", last_name: "" });
  const [isValidated, setIsValidated] = useState(false);
  const currentstep = useSelector((state) => state.booking.currentStep);
  const dispatch = useDispatch();

  const validate = async () => {
    try {
      const response = await fetch(`${HOST}api/user?first_name=${user.first_name}&last_name=${user.last_name}`);
      const data = await response.json();
      if (data.success) {
        setIsValidated(true);
        toast.success("User validated successfully!");
      } else {
        setIsValidated(false);
      }
    } catch (error) {
      console.error("Error validating user:", error);
    }
  };

  const handleSaveNext = async (value) => {
    try {
      dispatch(setUser(value));
      dispatch(setStep(currentstep + 1));
    } catch (error) {}
  };

  return (
    <>
      <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} />
      <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '25ch' },
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center"
        }}
        noValidate
        autoComplete="off"
      >
        <Typography variant="h6"  color='black' gutterBottom>Can We Know You More?</Typography>
        <TextField
          value={user.first_name}
          placeholder="First Name"
          variant="outlined"
          style={{ width: "100%" }}
          onChange={(e) => setUsers({ ...user, first_name: e.target.value })}
          focused
        />
        <TextField
          placeholder="Last Name"
          value={user.last_name}
          variant="outlined"
          style={{ width: "100%" }}
          onChange={(e) => setUsers({ ...user, last_name: e.target.value })}
        />
        <Button variant="contained" onClick={validate}>Validate</Button>
        <Button variant="contained" disabled={!isValidated} onClick={() => handleSaveNext(user)}>Next</Button>
      </Box>
    </>
  );
}
