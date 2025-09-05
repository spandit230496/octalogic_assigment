import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { Box, Button } from "@mui/material";
import { setWheels, setVehicleType, setVehicleModel, setBookingDate,setUser ,setStep} from '../context/bookingSlice';
import { useSelector, useDispatch } from "react-redux";

export default function WheelSelection({ onSelect, data }) {
  const currentstep = useSelector((state) => state.booking.currentStep);
  const dispatch = useDispatch();

  const [selected, setSelected] = React.useState({});

  const handleChange = (event) => {
    const selectedName = event.target.value;
    const selectedObj = data.find(v => v.name === selectedName);
    if (!selectedObj) return;

    setSelected({
      vehicle_type: selectedObj.name,
      vehicle_type_id: selectedObj.id
    });

    if (onSelect) {
      onSelect({
        vehicle_type: selectedObj.name,
        vehicle_type_id: selectedObj.id
      });
    }
  };

  const handleSaveNext = () => {
    if (!selected.vehicle_type_id) return;
    dispatch(setVehicleType(selected));
    dispatch(setStep(currentstep + 1));
  };

  return (
    <Box display="flex" alignItems="center" justifyContent="space-between" flexDirection="column" gap={3}>
      <FormControl>
        <FormLabel id="wheel-selection-label" sx={{ color: "black" }}>
          Select Vehicle Type
        </FormLabel>
        <RadioGroup
          row
          aria-labelledby="wheel-selection-label"
          name="wheel-selection-group"
          value={selected.vehicle_type || ""}
          onChange={handleChange}
        >
          {data && data.length > 0 && data.map(val => (
            <FormControlLabel
              value={val.name}
              key={val.id}
              control={<Radio />}
              label={val.name}
              sx={{ color: "black" }}
            />
          ))}
        </RadioGroup>
      </FormControl>

      <Button
        variant="contained"
        disabled={!selected.vehicle_type_id}
        onClick={handleSaveNext}
      >
        Next
      </Button>
    </Box>
  );
}

