"use client"

import AlertMessage from "@/components/Alert/AlertMessage";
import PrimaryFooter from "@/components/Footer/Footer";
import MenuCards from "@/modules/Home/MenuCards/MenuCards";
import Presentation from "@/modules/Home/Presentation";
import { footerColor } from "@/styles/base.theme";
import { Box } from "@mui/material";

export default function Home() {
  return (
    <>
      <AlertMessage />
      <Presentation />
      <MenuCards />
      <Box component="footer" p={0} width="100%" sx={{ backgroundColor: footerColor }}>
        <PrimaryFooter />
      </Box>
    </>
  );
}

