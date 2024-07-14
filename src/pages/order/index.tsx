import AddressInformation from "@/components/AddresInformation";
import PackageDetails from "@/components/PackageDetails";
import useMultipleStepForm from "@/hooks/useMultipleStepForm";
import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";

const Index = () => {
  const [stepComplete, setIsStepComplete] = useState(false);
  const [backStep, setBackStep] = useState(false);

  const { step, next, back } = useMultipleStepForm([
    <AddressInformation key={0} setIsStepComplete={setIsStepComplete} />,
    <PackageDetails key={1} setBackStep={setBackStep} />,
  ]);

  useEffect(() => {
    if (stepComplete) {
      next();
      setIsStepComplete(false);
    }
  }, [stepComplete, next]);

  useEffect(() => {
    if (backStep) {
      back();
      setBackStep(false);
    }
  }, [backStep, back]);

  return <Box>{step}</Box>;
};

export default Index;
