"use client"

import AlertMessage from "@/components/Alert/AlertMessage";
import PrimaryFooter from "@/components/Footer/Footer";
import History from "@/modules/Home/History";
import OurMenu from "@/modules/Home/Menu";
import EspecialMenu from "@/modules/Home/OursSpecials";
import Presentation from "@/modules/Home/Presentation";
import { footerColor } from "@/styles/base.theme";
import { Box } from "@mui/material";

export default function Home() {
  return (
    <>
      <AlertMessage />
      <Presentation />
      <EspecialMenu />
      <History />
      <OurMenu />
      <Box component="footer" p={0} width="100%" sx={{ backgroundColor: footerColor }}>
        <PrimaryFooter />
      </Box>
    </>
  );
}

