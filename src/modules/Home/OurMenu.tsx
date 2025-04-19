import MenuItens from "@/data/Menu/Menu";
import theme from "@/styles/base.theme";
import WifiOutlinedIcon from '@mui/icons-material/WifiOutlined';
import { Box, Container, Divider, Stack, Typography, useMediaQuery } from "@mui/material";
import { useTranslations } from "next-intl";


interface MenuItems {
  groupby: string;
  title: string;
  value: number;
  description: string
}


const OurMenu = () => {
  const isMedium = useMediaQuery(theme.breakpoints.down("md"))
  const translate = useTranslations("Global")


  const groupedItems = MenuItens(translate).reduce((acc, item) => {
    if (!acc[item.groupby]) {
      acc[item.groupby] = [];
    }
    acc[item.groupby].push(item);
    return acc;
  }, {} as Record<string, MenuItems[]>);

  return (
    <Box bgcolor="#D7CCC8" >
      <Container id="ourMenu">
        <Box display="flex" flexDirection="column" gap={4} >
          <Box>
            <Stack spacing={1} textAlign="center">
              <Typography variant="h4" fontWeight="bold">
                {translate("ourMenu")}
              </Typography>
              <Typography variant="h6">
                {translate("ourMenuDescription")}
              </Typography>
              <Typography variant="h6">
                {translate("ourMenuDescription2")}
              </Typography>
            </Stack>
          </Box>



          <Box
            display="flex"
            gap={2}
            pt={2}
            flexDirection={isMedium ? "column" : "row"}
            justifyContent="space-around"
            alignItems="flex-start"
          >
            {Object.entries(groupedItems).map(([group, items]) => (
              <Box key={group} display="flex" flexDirection="column" alignContent="flex-start" p={2} >
                <Box display="flex" pb={4}>
                  <Typography variant="h4" fontWeight="bold">{group}</Typography>
                </Box>
                {items.map((item) => (
                  <Box key={item.title} display="flex" flexDirection="column" gap={1}>
                    <Box display="flex" justifyContent="space-between" alignContent="center" gap={isMedium ? 10 : 20}>
                      <Typography variant="h6" fontWeight="bold">{item.title}</Typography>
                      <Typography variant="h6" color="orange">R$ {item.value.toFixed(2)}</Typography>
                    </Box>
                    <Typography variant="h6" fontWeight="light">{item.description}</Typography>
                    <Divider />
                  </Box>
                ))}
              </Box>
            ))
            }
          </Box >

          <Box
            p={4}
            display="flex"
            justifyContent="center"
            bgcolor={theme.palette.primary.main}
            borderRadius={2}
            sx={{
              boxShadow: "2px 4px 4 px 2px rgba(0, 0, 0, 0.2)",
            }}

          >
            <Stack textAlign="center" spacing={1}>
              <Typography variant="h4" color="#ffffff">{translate("internet")}</Typography>
              <Typography variant="h6" color="#ffffff" fontSize={13}>{translate("wifi")}</Typography>
              <Box display="flex" justifyContent="center">
                <WifiOutlinedIcon sx={{ color: "orange", width: 40, height: 40 }} />

              </Box>
            </Stack>

          </Box>

        </Box>
      </Container >
    </Box >

  )
}

export default OurMenu;