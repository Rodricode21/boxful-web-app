import { styled } from "@mui/material/styles";
import TextFieldBase from "@mui/material/TextField";

export const TextField = styled(TextFieldBase)(({ theme }) => ({
  "& .MuiInputBase-root": {
    borderRadius: "5px",

    "&.Mui-disabled": {
      backgroundColor: theme.palette.grey[200],
    },

    textarea: {
      padding: "0",
    },
  },
  "& .MuiInputBase-input": {
    padding: "14px",

    "&.MuiInputBase-inputAdornedStart": {
      paddingLeft: "0",
    },

    "&.Mui-disabled": {
      cursor: "not-allowed",
    },
  },
  "& fieldset": {
    borderColor: "#E5E5E5",
  },
}));
