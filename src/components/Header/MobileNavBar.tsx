import LocalCafeOutlinedIcon from '@mui/icons-material/LocalCafeOutlined';
import { AppBar, Box, Link, Typography } from "@mui/material";
import { StyledToolbar } from "../../styles/componentStyles/StyledComponents.theme";
import { HamburguerMenu } from './HamburguerMenu';


const MobileNavBar = () => {
  return (
    <>
      <Box >
        <AppBar component="nav">
          <StyledToolbar>
            <Box display="flex" alignItems="center" gap={4}>
              <Link href="#" underline='none' color={'#000'}>
                <Box display="flex" alignItems="center" gap={1}>
                  <LocalCafeOutlinedIcon />
                  <Typography fontFamily="charm" variant="h4">CoffeShop</Typography>
                </Box>
              </Link>
              <HamburguerMenu />
            </Box>
          </StyledToolbar>
        </AppBar>
      </Box>

    </>
  )

}

export default MobileNavBar;