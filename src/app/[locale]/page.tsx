"use client"

import AlertMessage from "@/components/Alert/AlertMessage";
import PrimaryFooter from "@/components/Footer/Footer";
import EspecialMenu from "@/modules/Home/Menu";
import Presentation from "@/modules/Home/Presentation";
import { footerColor } from "@/styles/base.theme";
import { Box } from "@mui/material";

export default function Home() {
  return (
    <>
      <AlertMessage />
      <Presentation />
      <EspecialMenu />
      <Box component="footer" p={0} width="100%" sx={{ backgroundColor: footerColor }}>
        <PrimaryFooter />
      </Box>
    </>
  );
}

