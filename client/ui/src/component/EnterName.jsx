import * as React from 'react';
import {Box,Button} from '@mui/material';
import TextField from '@mui/material/TextField';
import {useState} from 'react'
import { useSelector, useDispatch } from "react-redux";
import { setUser,setStep } from '../context/bookingSlice';
import { HOST } from '../HOST';





export default function EnterName() {

  const [user,setUsers]=useState({
                              "first_name":"",
                              "last_name":""
                            })
  const [isValidated,setIsValidated]= useState(false)

  const currentuser = useSelector((state) => state.booking.user);
  const currentstep = useSelector((state) => state.booking.currentStep)
  const dispatch = useDispatch();

  const validate = async () => {
  try {
    const response = await fetch(`${HOST}api/user?first_name=${user.first_name}&last_name=${user.last_name}`);
    const data = await response.json();
    console.log(data);

    if (data.success) {
      setIsValidated(true);
    } else {
      setIsValidated(false);
    }

  } catch (error) {
    console.error("Error validating user:", error);
  }
};


  const handleSaveNext =  async (value) => {
    try{
    dispatch(setUser(value));
    dispatch(setStep(currentstep+1))
    }
    catch(error){

    }
  };
  return (
    <>
    <Box
      component="form"
      sx={{ '& > :not(style)': { m: 1, width: '25ch' },"display":"flex","flexDirection":"column","justifyContent":"center","alignItems":"center" }}
      noValidate
      autoComplete="off"

    >
      <TextField value={user.first_name} id="outlined-basic"  variant="outlined"  style={{"width":"100%"}} onChange={(e)=>setUsers({...user,"first_name":e.target.value})}/>
     <TextField id="outlined-basic" value={user.last_name} variant="outlined"  style={{"width":"100%"}} onChange={(e)=>setUsers({...user,"last_name":e.target.value})}/>
     <Button variant='contained' onClick={()=>{validate()}}>Validate</Button>
     <Button variant='contained' disabled={!isValidated} onClick={()=>handleSaveNext(user)}>Next</Button>
      
    </Box>
    </>
  );
}
