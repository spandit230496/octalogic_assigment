import * as React from 'react';
import {Box,Button} from '@mui/material';
import TextField from '@mui/material/TextField';
import {useState} from 'react'
import { useSelector, useDispatch } from "react-redux";
import { setUser,setStep } from '../context/bookingSlice';





export default function EnterName() {

  const [user,setUsers]=useState({
                              "first_name":"sandip",
                              "last_name":"pandit"
                            })

  const currentuser = useSelector((state) => state.booking.user);
  const currentstep = useSelector((state) => state.booking.currentStep)
  const dispatch = useDispatch();

  const handleSaveNext = (value) => {
    dispatch(setUser(value));
    dispatch(setStep(currentstep+1))
  };
  return (
    <>
    <Box
      component="form"
      sx={{ '& > :not(style)': { m: 1, width: '25ch' },"display":"flex","flexDirection":"column","justifyContent":"center","alignItems":"center" }}
      noValidate
      autoComplete="off"

    >
      <TextField value={user.first_name} id="outlined-basic"  variant="outlined"  style={{"width":"100%"}}/>
     <TextField id="outlined-basic" value={user.last_name} variant="outlined"  style={{"width":"100%"}}/>
     <Button variant='contained'>Validate</Button>
     <Button variant='contained'  onClick={()=>handleSaveNext(user)}>Next</Button>
      
    </Box>
    </>
  );
}
