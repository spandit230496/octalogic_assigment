import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import { useState } from "react";
import EnterName from "../component/EnterName";
import WheelSelection from "../component/WheelSelection";
import TypeOfVehicle from "../component/TypesOfVehicle";
import ModelSelection from "../component/ModelSelection";
import DateSelection from "../component/DatePicker";
import {useDispatch,useSelector} from 'react-redux'
import { useEffect } from "react";


const steps = [
  "Fill Name",
  "Select Number of Wheels",
  "Select Type Of Vehicle",
  "Select Model Of Vehicle",
  "Select Date",
  "Book",
];


export default function Steps() {
const currentstep = useSelector((state) => state.booking.currentStep);
const currentwheel = useSelector((state)=>state.booking.wheel)
const currenttype = useSelector((state)=>state.booking.type)
const currentmodel = useSelector((state)=>state.booking.model)
const [stepCount, setStepCount] = useState(currentstep);

const [typeOfVehicle,setTypeOfVehicle]= useState([])
const [ModelOfVehicle,setModelOfVehicle]= useState([])


useEffect(()=>{setStepCount(currentstep)},[currentstep])

  const StepContent = () => {
    switch (stepCount) {
      case 0:
        return <EnterName/>;
      case 1:
        return <WheelSelection/>;
      case 2:
        return <TypeOfVehicle/>;
      case 3:
        return <ModelSelection/>;
      case 4:
        return <DateSelection/>;
      default:
        return <div>✅ Done!</div>;
    }
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Stepper activeStep={stepCount} alternativeLabel>
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>

      <Box sx={{ mt: 4 }}>
        <StepContent />
      </Box>
    </Box>
  );
}
