import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { useSelector, useDispatch } from "react-redux";
import { setVehicleModel, setStep } from '../context/bookingSlice';

export default function ModelSelection() {
  const currentStep = useSelector((state) => state.booking.currentStep);
  const dispatch = useDispatch();
  const [selectedModel, setSelectedModel] = React.useState("");

  const models = [
    { id: 1, name: "Brunch this weekend?" },
    { id: 2, name: "Summer BBQ" },
    { id: 3, name: "Oui Oui" },
  ];

  const handleSaveNext = () => {
    if (!selectedModel) return; // optionally show a warning
    dispatch(setVehicleModel(selectedModel));
    dispatch(setStep(currentStep + 1));
  };

  return (
    <Box sx={{ width: "100%", bgcolor: "background.paper", p: 2 }}>
      <List>
        {models.map((model) => (
          <React.Fragment key={model.id}>
            <ListItem 
              button 
              selected={selectedModel === model.name} 
              onClick={() => setSelectedModel(model.name)}
            >
              <ListItemText
                primary={model.name}
                secondary={
                  <Typography
                    component="span"
                    variant="body2"
                    sx={{ color: "text.primary", display: "inline" }}
                  >
                    Description for {model.name}
                  </Typography>
                }
              />
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
