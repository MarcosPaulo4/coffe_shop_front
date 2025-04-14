"use client"
import LocalCafeOutlinedIcon from '@mui/icons-material/LocalCafeOutlined';
import { AppBar, Box, Button, Link, Typography, useMediaQuery, useTheme } from "@mui/material";
import { useTranslations } from 'next-intl';
import MobileNavBar from './MobileNavBar';
import { StyledLink, StyledToolbar } from './styles/StyledComponents.theme';


const PrimaryNavBar = () => {
  const translate = useTranslations('Navbar')
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"))
  return (
    <>

      {!isMobile ? (
        <Box>
          <AppBar component="nav">
            <StyledToolbar>

              <Link href="#" underline='none' color={'#000'}>
                <Box display="flex" alignItems="center" gap={1}>
                  <LocalCafeOutlinedIcon />
                  <Typography fontFamily="charm" variant="h5">CoffeShop</Typography>
                </Box>
              </Link>
              <Box display="flex" gap={6} alignItems="center">
                <StyledLink href="#">{translate('menu')}</StyledLink>
                <StyledLink href="#" >{translate('aboutUs')}</StyledLink>
                <StyledLink href="#" >{translate('contact')}</StyledLink>
              </Box>

              <Button variant="contained" style={{
                width: 120,
                height: 40
              }}>
                {translate('orderNow')}
              </Button>
            </StyledToolbar>

          </AppBar >

        </Box >
      ) : (
        <MobileNavBar />
      )}


    </>

  )
}

export default PrimaryNavBar;



