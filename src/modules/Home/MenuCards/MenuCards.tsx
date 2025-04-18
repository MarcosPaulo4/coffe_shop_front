import theme from "@/styles/base.theme";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import { Box, Button, Card, CardActions, CardContent, CardMedia, Container, IconButton, Typography, useMediaQuery } from "@mui/material";
import { useTranslations } from "next-intl";
import { useRef } from "react";
import { cardMediaStyles, cardStyles, iconButtonStyles, scrollBox } from "./menuCards.theme";
import cardMenuItens from "./menuCardsItens";

const MenuCards = () => {
  const translate = useTranslations("Global");
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"))
  const scrollRef = useRef<HTMLDivElement>(null);

  const mobileW = isMobile ? 200 : 300

  const scroll = (direction: "left" | "right") => {
    const scrollAmount = 300;
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <Container>
      <Box position="relative">
        <IconButton
          onClick={() => scroll("left")}
          sx={{ left: -40, ...iconButtonStyles }}
        >
          <ChevronLeft />
        </IconButton>

        <Box
          ref={scrollRef}
          sx={scrollBox} >
          {cardMenuItens(translate).map((menu) => (
            <Card key={menu.title} sx={{
              maxWidth: mobileW, ...cardStyles,
            }}
            >
              <CardMedia
                component="img"
                height={200}
                image={menu.img}
                alt={menu.title}
                sx={cardMediaStyles}
              />
              <CardContent>
                <Box display="flex" justifyContent="flex-start" flexDirection="column" gap={2}>
                  <Typography variant="h5" color={theme.palette.primary.contrastText}>{menu.title}</Typography>
                  <Typography variant="h6">
                    {menu.description}
                  </Typography>
                </Box>
              </CardContent>
              <Box>
              </Box>
              <CardActions>
                <Box pl={1}>
                  <Button sx={{ width: 100 }} variant="contained" size="small">{translate("menu")}</Button>
                </Box>
              </CardActions>
            </Card>

          ))}
        </Box>
        <IconButton
          onClick={() => scroll("right")}
          sx={{ right: -40, ...iconButtonStyles }}
        >
          <ChevronRight />
        </IconButton>
      </Box>
    </Container>
  )

}

export default MenuCards;