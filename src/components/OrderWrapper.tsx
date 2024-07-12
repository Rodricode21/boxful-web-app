import { Box, SxProps, Typography } from "@mui/material";
import React from "react";

const OrderWrapper: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  return (
    <Box sx={OrderContainer}>
      <Box sx={{ marginLeft: "200px", paddingTop: "40px" }}>
        <Typography variant="h6">Crea una Orden</Typography>
        <Typography variant="body1">
          Dale una ventaja competitiva con entregas el mismo día (Área
          Metropolitana) y el día siguiente a nivel nacional.
        </Typography>
      </Box>

      <Box sx={Wrapper}>
        <Box display={"grid"} gap={"16px"}>
          {children}
        </Box>
      </Box>
    </Box>
  );
};

export default OrderWrapper;

const Wrapper: SxProps = {
  marginLeft: "200px",
  marginTop: "20px",
  marginRight: "200px",
  marginBottom: "20px",
  backgroundColor: "white",
  borderRadius: "8px",
  padding: "40px",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
};

const OrderContainer: SxProps = {
  width: "100%",
  minHeight: "100vh",
  height: "100%",
  backgroundColor: "#E5E8EE",
};
