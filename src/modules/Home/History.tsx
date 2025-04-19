import theme from "@/styles/base.theme";
import { Box, Container, Typography, useMediaQuery } from "@mui/material";
import { useTranslations } from "next-intl";
import historyItems from "../../data/HistoryItens/historyItens";


const History = () => {
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"))
  const isMedium = useMediaQuery(theme.breakpoints.down("md"))
  const mobileWidth = isMobile ? 300 : 450

  const translate = useTranslations("Global")

  const items = historyItems(translate)
  const col1 = items.slice(0, 2);
  const col2 = items.slice(2, 4);

  return (
    <Container >
      <Box display="flex" gap={8} alignItems="center" flexDirection={isMedium ? "column" : "row"}>
        <Box display="flex" >
          <Box
            sx={{
              height: 300,
              width: mobileWidth,
              borderRadius: 3,
              backgroundImage: "linear-gradient(180deg, rgba(66, 66, 66, 0.4) 0%, rgba(36,36,36,0.4) 100%), url(/images/history.jpg)",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          />
        </Box>


        <Box display="flex" gap={2} flexDirection="column">
          <Typography variant="h4" fontWeight="bold">
            {translate("history.title")}
          </Typography>

          <Typography variant="h6" >
            {translate("history.description")}
          </Typography>
          <Typography variant="h6" >
            {translate("history.description2")}
          </Typography>
          <Typography variant="h6">
            {translate("history.description3")}
          </Typography>

          <Typography variant="h6" fontWeight="bold">{translate("history.ourValues")}</Typography>

          <Box display="flex" gap={2}>
            {[col1, col2].map((column, index) => (
              <Box
                key={index}
                display="flex"
                flexDirection="column"
                alignItems="flex-start"
                gap={2}
              >
                {column.map((item, i) => (
                  <Box key={i} display="flex" alignItems="flex-start" gap={2}>
                    {item.icon}
                    <Box>
                      <Typography variant="h6" fontWeight="bold">
                        {item.title}
                      </Typography>
                      <Typography variant="h6" fontSize={13}>
                        {item.description}
                      </Typography>
                    </Box>
                  </Box>
                ))}
              </Box>
            ))}
          </Box>


        </Box>
      </Box>
    </Container>
  )
}

export default History;