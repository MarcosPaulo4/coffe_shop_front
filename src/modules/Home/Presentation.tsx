import theme from "@/styles/base.theme";
import { Box, Container, Stack, Typography, useMediaQuery } from "@mui/material";
import { useTranslations } from "next-intl";

const Presentation = () => {
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"))
  const mobileHeight = isMobile ? 400 : 450
  const translate = useTranslations("Global.presentation")
  return (
    <Box sx={{
      height: mobileHeight,
      backgroundImage: "linear-gradient(180deg, rgba(66, 66, 66, 0.4) 0%, rgba(36,36,36,0.4) 100%), url(/images/banner5.jpg)",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      display: "flex",
      justifyContent: "center",
      alignContent: "center"
    }}>
      <Container >
        <Stack spacing={1} textAlign="center" pt={10}>
          <Typography color="white" variant="h3" fontFamily="youngCherif">
            {translate("titlePart1")}
          </Typography>
          <Typography color="white" variant="h3" fontFamily="youngCherif">
            {translate("titlePart2")}
          </Typography>
          <Typography color="white" variant="h3" fontFamily="youngCherif">
            {translate("titlePart3")}
          </Typography>
        </Stack>
        <Stack textAlign="center" pt={4}>
          <Typography color="white" variant="h6">
            {translate("subtitlePart1")}
          </Typography>
          <Typography color="white" variant="h6">
            {translate("subtitlePart2")}
          </Typography>
        </Stack>
      </Container>



    </Box>


  )
}

export default Presentation;