import * as React from "react";
import { Box, Typography, Button } from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

export default function Congratulations({ message, onClose }) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        p: 4,
        border: "2px solid #4caf50",
        borderRadius: 2,
        backgroundColor: "#e8f5e9",
        maxWidth: 400,
        margin: "auto",
        textAlign: "center",
        gap: 2,
        color: "#1a1a1aff"
      }}
    >
      <CheckCircleOutlineIcon sx={{ fontSize: 60, color: "#4caf50" }} />
      <Typography variant="h5" sx={{ fontWeight: "bold" }}>
        Congratulations!
      </Typography>
      <Typography variant="body1">
        {message || "Your Booking has been confirmed."}
      </Typography>
      {onClose && (
        <Button
          variant="contained"
          color="success"
          sx={{ mt: 2 }}
          onClick={onClose}
        >
          Close
        </Button>
      )}
    </Box>
  );
}
