import { StyledLink } from "@/styles/componentStyles/StyledComponents.theme";
import { Box, Container, Typography } from "@mui/material";
import { useTranslations } from "next-intl";
import MenuCards from "./MenuCards/MenuCards";

const EspecialMenu = () => {
  const translate = useTranslations('Global')

  return (
    <Container>
      <Box
        display="flex"
        gap={2}
        flexDirection="column"
      >

        <Box
          display="flex"
          justifyContent="center"
        >
          <Typography variant="h3">Specials</Typography>
        </Box>

        <Box
          display="flex"
          justifyContent="center"
        >
          <Typography variant="h6">
            Conheça alguns dos nossos
            produtos mais amados pelos clientes e comece
            a se apaixonar pelo sabor inconfundível do Coffee Shops Tia Rosa.
          </Typography>
        </Box>
      </Box>

      <MenuCards />
      <Box display="flex" justifyContent="center" pt={2}>
        <StyledLink href="#">{translate('menu')}</StyledLink>
      </Box>

    </Container>


  )
}

export default EspecialMenu;