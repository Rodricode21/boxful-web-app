import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { useRouter } from "next/router";
import { Box, Typography } from "@mui/material";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const router = useRouter();
  return (
    <Box display={"grid"} justifyContent={"center"}>
      <p>creo que lo que estas buscando esta /order</p>
      <Typography
        onClick={() => router.push("/order")}
        sx={{ cursor: "pointer" }}
      >
        click aqui
      </Typography>
    </Box>
  );
}
