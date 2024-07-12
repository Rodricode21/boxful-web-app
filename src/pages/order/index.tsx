import AddressInformation from "@/components/AddresInformation";
import React from "react";

const index = () => {
  return <AddressInformation />;
};

export default index;

// "use client";
// import VerificatioCode from "@/components/VerificationCode";
// import useMultistepForm from "@/hooks/useMultipleStepForm";
// import { Box } from "@mui/system";
// import { useSearchParams } from "next/navigation";
// import { useEffect, useState } from "react";
// import SignupInformation from "./SignupInformation";

// const SignUpMultiStep = () => {
//   const [stepComplete, setIsStepComplete] = useState(false);
//   const [email, setEmail] = useState("");
//   const [code, setCode] = useState("");
//   const searchParams = useSearchParams();

//   const { step, next } = useMultistepForm([
//     <SignupInformation
//       key={0}
//       setIsStepComplete={setIsStepComplete}
//       setEmail={setEmail}
//       setCode={setCode}
//     />,
//     <VerificatioCode key={1} email={email} code={code} />,
//   ]);

//   useEffect(() => {
//     if (stepComplete) {
//       next();
//     }
//   }, [stepComplete, next]);

//   return <Box>{step}</Box>;
// };

// export default SignUpMultiStep;
