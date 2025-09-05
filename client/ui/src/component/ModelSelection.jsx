import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useSelector, useDispatch } from "react-redux";
import { setVehicleModel, setStep } from '../context/bookingSlice';

export default function ModelSelection({ data }) {
  const currentStep = useSelector((state) => state.booking.currentStep);
  const dispatch = useDispatch();
  const [selectedModel, setSelectedModel] = React.useState(null);

  const handleSaveNext = () => {
    if (!selectedModel) return;
    dispatch(setVehicleModel(selectedModel));
    dispatch(setStep(currentStep + 1));
  };

  return (
    <Box sx={{ width: "100%", bgcolor: "background.paper", p: 2 }}>
      <List>
        {data.data.map((model) => (
          <React.Fragment key={model.id}>
            <ListItem 
              button 
              selected={selectedModel?.id === model.id} 
              onClick={() => setSelectedModel({ model_name: model.name, id: model.id })}
            >
              <ListItemText primary={model.name} />
            </ListItem>
            <Divider variant="inset" component="li" />
          </React.Fragment>
        ))}
      </List>

      <Box sx={{ textAlign: "right", mt: 2 }}>
        <Button 
          variant="contained" 
          color="primary" 
          onClick={handleSaveNext} 
          disabled={!selectedModel}
        >
          Next
        </Button>
      </Box>
    </Box>
  );
}
