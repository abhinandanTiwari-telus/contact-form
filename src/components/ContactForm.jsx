import React, { useState } from "react";
import { Box, TextField, FormControl, Button, Paper } from "@mui/material";
import FormHeader from "./FormHeader";
import CustomRadioGroup from "./common/CustomRadioGroup";
import { options } from "../constants";
import BackButton from "./common/BackButton";
import "../assets/form.css";

const ContactForm = () => {
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
    <>
      <BackButton textmsg={"Back to verify your profile"} />

      <Box p={2}>
        <Paper elevation={3}>
          <FormHeader />
        </Paper>

        <Box mt={4}>
          <form onSubmit={handleSubmit}>
            <FormControl fullWidth margin="normal">
              <h4 className="phoneInputHeading">
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

              <CustomRadioGroup
                value={method}
                onChange={(e) => setMethod(e.target.value)}
                options={options}
              />
            </FormControl>

            <Box>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                className="submitBtn"
              >
                Continue
              </Button>
            </Box>
          </form>
        </Box>
      </Box>
    </>
  );
};

export default ContactForm;
