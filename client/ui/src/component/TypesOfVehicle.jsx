import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { Box, Button } from "@mui/material";
import { setWheels, setVehicleType, setVehicleModel, setBookingDate,setUser ,setStep} from '../context/bookingSlice';
import { useSelector, useDispatch } from "react-redux";

export default function WheelSelection({ onSelect }) {

  const currentstep = useSelector((state) => state.booking.currentStep)
  const wheels=useSelector((state)=>state.booking.wheels)
  const dispatch = useDispatch();

  const handleSaveNext = () => {
    dispatch(setVehicleType(selected))
    dispatch(setStep(currentstep+1))
  };

  const [selected, setSelected] = React.useState("");

  const handleChange = (event) => {
    setSelected(event.target.value);
    if (onSelect) {
      onSelect(event.target.value);
    }
  };

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      flexDirection="column" 
      gap={3}
    >
      <FormControl>
        <FormLabel id="wheel-selection-label" sx={{ color: "black" }}>
          Select Vehicle
        </FormLabel>
        <RadioGroup
          row
          aria-labelledby="wheel-selection-label"
          name="wheel-selection-group"
          value={selected}
          onChange={handleChange}
        >
          <FormControlLabel
            value="2"
            control={<Radio />}
            label="2 Wheeler"
            sx={{ color: "black" }}
          />
          <FormControlLabel
            value="4"
            control={<Radio />}
            label="4 Wheeler"
            sx={{ color: "black" }}
          />
        </RadioGroup>
      </FormControl>

      <Button
        variant="contained"
        // disabled={!selected}
        onClick={()=>{handleSaveNext()}}
      >
        Next
      </Button>
    </Box>
  );
}
