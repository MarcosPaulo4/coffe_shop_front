import LocalCafeOutlinedIcon from '@mui/icons-material/LocalCafeOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import { AppBar, Box, IconButton, Link, Typography } from "@mui/material";
import { useTranslations } from "next-intl";
import { useState } from 'react';
import { StyledToolbar } from "./styles/StyledComponents.theme";


interface MobileNavBarProps {
  onClick: () => void;
}


const MobileNavBar = ({ onClick }: MobileNavBarProps) => {
  const translate = useTranslations('Navbar')
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  }


  return (
    <>
      <Box >
        <AppBar component="nav">
          <StyledToolbar>
            <Box display="flex" alignItems="center" gap={1}>
              <Link href="#" underline='none' color={'#000'}>
                <Box display="flex" alignItems="center" gap={1}>
                  <LocalCafeOutlinedIcon />
                  <Typography fontFamily="charm" variant="h5">CoffeShop</Typography>
                </Box>
              </Link>
              <IconButton onClick={handleOpen}>
                <MenuOutlinedIcon />
              </IconButton>
            </Box>

          </StyledToolbar>
        </AppBar>
      </Box>

    </>
  )

}

export default MobileNavBar;