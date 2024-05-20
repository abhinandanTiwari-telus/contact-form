import React, { useState } from "react";
import {
  Container,
  Box,
  Typography,
  TextField,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Button,
  Paper,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import "../customBox.css";

const PhoneNumberForm = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [method, setMethod] = useState("sms");
  const [errors, setErrors] = useState({});

  const validatePhoneNumber = (number) => {
    const phonePattern = /^[2-9]{1}[0-9]{2}-[0-9]{3}-[0-9]{4}$/;
    if (!number) {
      return "Phone number is required";
    } else if (!phonePattern.test(number)) {
      return "Invalid phone number format";
    }
    return "";
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const phoneError = validatePhoneNumber(phoneNumber);
    if (phoneError) {
      setErrors({ phoneNumber: phoneError });
    } else {
      setErrors({});
      console.log({
        phoneNumber,
        method: method === "sms" ? "sms" : "phone call",
      });
    }
  };

  return (
    <Container>
      <Box
        mt={4}
        p={2}
        display="flex"
        alignItems="center"
        style={{ overflowY: "auto" }}
      >
        <ArrowBackIcon sx={{ cursor: "pointer" }} />
        <Typography ml={1}>Back to verify your profile</Typography>
      </Box>

      <Box p={2}>
        <Paper elevation={3}>
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
                We'll contact you by text message or phone call about account
                updates for your home products and services, for verification
                when calling in and for exclusive offers or surveys.
              </Typography>
            </Box>
          </Box>
        </Paper>

        <Box mt={4}>
          <form onSubmit={handleSubmit}>
            <FormControl fullWidth margin="normal">
              <h4 style={{ margin: 0, marginBottom: "5px" }}>
                Enter your contact phone number
              </h4>
              <p style={{ margin: 0, marginBottom: "5px" }}>
                Mobile phone number preferred
              </p>
              <TextField
                label="Phone number (xxx-xxx-xxxx)"
                variant="outlined"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                error={!!errors.phoneNumber}
                helperText={errors.phoneNumber}
                sx={{ width: "100%", maxWidth: "270px" }}
              />
            </FormControl>

            <FormControl component="fieldset" margin="normal">
              <h4 style={{ margin: 0 }}>
                We'll send you code to confirm this phone number. Where should
                we send it?
              </h4>
              <RadioGroup
                value={method}
                onChange={(e) => setMethod(e.target.value)}
              >
                <FormControlLabel
                  value="sms"
                  control={
                    <Radio
                      sx={{
                        color: "rgb(75, 40, 109)",
                        "&.Mui-checked": {
                          color: "rgb(75, 40, 109)",
                        },
                      }}
                    />
                  }
                  label="Text message"
                />

                <FormControlLabel
                  value="phone"
                  control={
                    <Radio
                      sx={{
                        color: "rgb(75, 40, 109)",
                        "&.Mui-checked": {
                          color: "rgb(75, 40, 109)",
                        },
                      }}
                    />
                  }
                  label="Phone call"
                />
              </RadioGroup>
            </FormControl>
            <Box>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                style={{
                  borderRadius: 50,
                  backgroundColor: "#248700",
                  marginTop: "5px",
                }}
              >
                Continue
              </Button>
            </Box>
          </form>
        </Box>
      </Box>
    </Container>
  );
};

export default PhoneNumberForm;
