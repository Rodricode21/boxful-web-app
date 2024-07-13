import AddressInformation from "@/components/AddresInformation";
import OrderWrapper from "@/components/OrderWrapper";
import PackageDetails from "@/components/PackageDetails";
import useMultipleStepForm from "@/hooks/useMultipleStepForm";
import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";

const index = () => {
  const [stepComplete, setIsStepComplete] = useState(false);

  const { step, next } = useMultipleStepForm([
    <AddressInformation key={0} setIsStepComplete={setIsStepComplete} />,
    <PackageDetails key={1} />,
  ]);

  useEffect(() => {
    if (stepComplete) {
      next();
    }
  }, [stepComplete, next]);
  return <Box>{step}</Box>;
};

export default index;
