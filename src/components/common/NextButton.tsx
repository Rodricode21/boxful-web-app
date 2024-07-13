import React from "react";
import Button from "@mui/material/Button";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { SxProps } from "@mui/material/styles";

interface NextButtonProps {
  text: string;
}

const buttonStyles: SxProps = {
  backgroundColor: "#1976d2",
  color: "white",
  "&:hover": {
    backgroundColor: "#1565c0",
  },
  display: "flex",
  alignItems: "center",
  gap: "8px",
  padding: "16px 24px",
  borderRadius: "4px",
  textTransform: "lowercase",
};

const NextButton: React.FC<NextButtonProps> = ({ text }) => {
  return (
    <Button sx={buttonStyles} type="submit">
      {text}
      <ArrowForwardIcon />
    </Button>
  );
};

export default NextButton;
