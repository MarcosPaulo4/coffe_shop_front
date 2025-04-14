import PrimaryFooter from "@/components/Footer/Footer";
import PrimaryNavBar from "@/components/Header/NavBar";
import { Box } from "@mui/material";

export default function Home() {
  return (
    <>
      <PrimaryNavBar />
      <Box height={1000} />
      <PrimaryFooter />

    </>
  );
}

