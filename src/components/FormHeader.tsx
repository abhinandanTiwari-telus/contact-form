import React from "react";
import "../assets/formHeader.css";
import { Box, Typography } from "@mui/material";

interface FormHeaderProps {
  heading: string;
  subheading: string;
}

const FormHeader = (props: FormHeaderProps) => {
  const { heading, subheading } = props;
  return (
    <Box className="parentBox">
      <Box className="firstChildBox">
        <Typography variant="h4" gutterBottom>
          {heading}
        </Typography>
      </Box>
      <Box className="seconChildBox">
        <Typography variant="body1">{subheading}</Typography>
      </Box>
    </Box>
  );
};

export default FormHeader;
