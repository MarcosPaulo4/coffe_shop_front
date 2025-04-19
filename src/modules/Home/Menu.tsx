import theme from "@/styles/base.theme";
import { Box, Container, Divider, Stack, Typography, useMediaQuery } from "@mui/material";

const OurMenu = () => {
  const isMedium = useMediaQuery(theme.breakpoints.down("md"))

  return (
    <Container>
      <Stack spacing={1} textAlign="center">
        <Typography variant="h4" fontWeight="bold">
          Nosso Menu
        </Typography>
        <Typography variant="h6">
          Descubra nossa variedade de cafés especiais, sobremesas caseiras e lanches
        </Typography>
        <Typography variant="h6">
          preparados com ingredientes selecionados.
        </Typography>
      </Stack>


      <Box display="flex" gap={2} pt={2} flexDirection={isMedium ? "column" : "row"} justifyContent="space-around" alignItems="flex-start">
        <Box
          display="flex"
          flexDirection="column"
          alignContent="flex-start"
          p={2}
        >
          <Box display="flex" pb={4}>
            <Typography variant="h4">Coffe</Typography>
          </Box>

          <Box display="flex" justifyContent="space-between" alignContent="center" gap={20}>
            <Typography variant="h6">Espresso</Typography>
            <Typography variant="h6" color="orange">R$ 7.90</Typography>
          </Box>
          <Box display="flex" gap={1} flexDirection="column">
            <Typography variant="h6" >
              decrição
            </Typography>
            <Box>
              <Divider />
            </Box>
          </Box>
        </Box>



        <Box
          display="flex"
          flexDirection="column"
          alignContent="flex-start"
          p={2}
        >
          <Typography variant="h4">Dessert</Typography>
        </Box>
      </Box>

    </Container>
  )
}

export default OurMenu;