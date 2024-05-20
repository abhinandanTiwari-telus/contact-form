import React from "react";
import { Radio, RadioGroup, FormControlLabel } from "@mui/material";

const CustomRadioGroup = ({ value, onChange, options }) => {
  return (
    <RadioGroup value={value} onChange={onChange}>
      {options.map((option) => (
        <FormControlLabel
          key={option.value}
          value={option.value}
          control={
            <Radio
              sx={{
                color: "rgb(75, 40, 109)",
                "&.Mui-checked": { color: "rgb(75, 40, 109)" },
              }}
            />
          }
          label={option.label}
        />
      ))}
    </RadioGroup>
  );
};

export default CustomRadioGroup;
