import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { HOST } from "../HOST";

import EnterName from "../component/EnterName";
import WheelSelection from "../component/WheelSelection";
import TypeOfVehicle from "../component/TypesOfVehicle";
import ModelSelection from "../component/ModelSelection";
import DateSelection from "../component/DatePicker";
import Book from "../component/Booking";

const steps = [
  "Fill Name",
  "Select Number of Wheels",
  "Select Type Of Vehicle",
  "Select Model Of Vehicle",
  "Select Date",
  "Book",
];

export default function Steps() {
  const currentStep = useSelector((state) => state.booking.currentStep);
  const currentWheel = useSelector((state) => state.booking.wheels);
  const currentType = useSelector((state) => state.booking.vehicleType);

  const [stepCount, setStepCount] = useState(currentStep);
  const [typeOfVehicle, setTypeOfVehicle] = useState([]);
  const [modelOfVehicle, setModelOfVehicle] = useState([]);

  const fetchType = async (wheels) => {
    if (!wheels) return;
    try {
      const response = await fetch(`${HOST}api/vehicle/vehicle-type?wheels=${wheels}`);
      const data = await response.json();
      setTypeOfVehicle(data.data.vehicle_type || []);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchModel = async (typeId) => {
    if (!typeId) return;
    try {
      const response = await fetch(`${HOST}api/vehicle/model?vehicle_type_id=${typeId}`);
      const data = await response.json();
      setModelOfVehicle(data.data || []);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    setStepCount(currentStep);
  }, [currentStep]);

  useEffect(() => {
    fetchType(currentWheel);
  }, [currentWheel]);

  useEffect(() => {
    fetchModel(currentType?.vehicle_type_id);
  }, [currentType]);

  const StepContent = () => {
    switch (stepCount) {
      case 0:
        return <EnterName />;
      case 1:
        return <WheelSelection />;
      case 2:
        return <TypeOfVehicle data={typeOfVehicle} />;
      case 3:
        return <ModelSelection data={modelOfVehicle} />;
      case 4:
        return <DateSelection />;
      case 5:
        return <Book />;
      default:
        return <div>✅ Done!</div>;
    }
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Stepper activeStep={stepCount} alternativeLabel>
        {steps.map((label) => (
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
