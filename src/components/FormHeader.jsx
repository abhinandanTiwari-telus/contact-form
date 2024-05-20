import React from "react";
import "../assets/customBox.css";
import { Box, Typography } from "@mui/material";

const FormHeader = () => {
  return (
    <Box
      className="parentBox"
      sx={{ border: "1px solid #ccc", borderRadius: "5px" }}
    >
      <Box className="firstChildBox">
        <Typography
          variant="h4"
          gutterBottom
          style={{ color: "rgb(75, 40, 109)" }}
        >
          Add your contact phone number
        </Typography>
      </Box>
      <Box className="seconChildBox">
        <Typography variant="body1">
          We'll contact you by text message or phone call about account updates
          for your home products and services, for verification when calling in
          and for exclusive offers or surveys.
        </Typography>
      </Box>
    </Box>
  );
};

export default FormHeader;
