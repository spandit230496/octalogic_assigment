import * as React from "react";
import { Box, Typography, Button, List, ListItem, ListItemText } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { setVehicleModel, setStep } from "../context/bookingSlice";

export default function ModelSelection({ data }) {
  const currentStep = useSelector((state) => state.booking.currentStep);
  const dispatch = useDispatch();
  const [selectedModel, setSelectedModel] = React.useState("");

  const handleSaveNext = () => {
    if (!selectedModel) return;
    dispatch(setVehicleModel(selectedModel));
    dispatch(setStep(currentStep + 1));
  };

  return (
    <Box sx={{ width: "100%", p: 3 }}>
      <Typography variant="h6" color="black" gutterBottom>
        Select The Model
      </Typography>

      <List sx={{ bgcolor: "background.paper", borderRadius: 2, boxShadow: 1 }}>
        {data.map((model) => (
          <ListItem
            key={model.id}
            onClick={() => setSelectedModel({ model_name: model.name, id: model.id })}
            sx={{
              cursor: "pointer",
              borderRadius: 2,
              mb: 1,
              px: 2,
              py: 1.5,
              bgcolor: selectedModel?.id === model.id ? "primary.light" : "grey.50",
              "&:hover": { bgcolor: "primary.light", opacity: 0.9 },
              transition: "0.3s",
            }}
          >
            <ListItemText
              primary={
                <Typography variant="subtitle1" sx={{ fontWeight: "bold" , color: "black" }}>
                  {model.name}
                </Typography>
              }
            />
          </ListItem>
        ))}
      </List>

      <Box sx={{ textAlign: "right", mt: 3 }}>
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
