import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import { useState } from "react";
import EnterName from "./EnterName";
import WheelSelection from "./wheelSelection";
import TypeOfVehicle from "./TypesOfVehicle";
import ModelSelection from "./ModelSelection";
import DateSelection from "./DatePicker";


const steps = [
  "Fill Name",
  "Select Number of Wheels",
  "Select Type Of Vehicle",
  "Select Model Of Vehicle",
  "Select Date",
  "Done",
];

export default function Steps() {
  const [stepCount, setStepCount] = useState(0);

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
          <Step key={label} onClick={() => setStepCount(index)}>
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
