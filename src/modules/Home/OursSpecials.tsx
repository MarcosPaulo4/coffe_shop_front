import { StyledLink } from "@/styles/componentStyles/StyledComponents.theme";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Box, Container, Stack, Typography } from "@mui/material";
import { useTranslations } from "next-intl";
import MenuCards from "./components/MenuCards/MenuCards";

const EspecialMenu = () => {
  const translate = useTranslations('Global')

  return (
    <Box sx={{ backgroundColor: "#f1f1f1f1" }}>
      <Container>
        <Stack spacing={1} textAlign="center">
          <Typography variant="h3">{translate("ourSpecials")}</Typography>
        </Stack>
        <Stack textAlign="center" pt={2}>
          <Typography variant="h6">
            {translate("meetOurProducts")}
          </Typography>
          <Typography variant="h6">
            {translate("moreLoved")}
          </Typography>

          <Typography variant="h6">
            {translate("flavor")}
          </Typography>
        </Stack>
        <MenuCards />

        <StyledLink href="#" sx={{
          textDecoration: "underline", "&:hover": {
            textDecoration: "underline"
          }
        }}>
          <Box display="flex" justifyContent="center" pt={2} alignItems="center" gap={2}>
            {translate('seeMenu')}
            <ArrowForwardIosIcon sx={{ width: 15, height: 15 }} />
          </Box>

        </StyledLink>

      </Container>
    </Box>



  )
}

export default EspecialMenu;