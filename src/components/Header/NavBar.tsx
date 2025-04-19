"use client"
import LocalCafeOutlinedIcon from '@mui/icons-material/LocalCafeOutlined';
import { AppBar, Box, Button, Link, Typography, useMediaQuery, useTheme } from "@mui/material";
import { useTranslations } from 'next-intl';
import { StyledLink, StyledToolbar } from '../../styles/componentStyles/StyledComponents.theme';
import MobileNavBar from './MobileNavBar';


const PrimaryNavBar = () => {
  const translate = useTranslations('Global')
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
                  <Typography fontFamily="charm" variant="h4">CoffeShop</Typography>
                </Box>
              </Link>
              <Box display="flex" gap={6} alignItems="center">
                <StyledLink href="#ourMenu">{translate('menu')}</StyledLink>
                <StyledLink href="#ourHistory" >{translate('aboutUs')}</StyledLink>
                <StyledLink href="#contact" >{translate('contact')}</StyledLink>
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



