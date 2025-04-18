"use client";
import theme, { footerColor } from "@/styles/base.theme";
import { Box, Container, Divider, Typography, useMediaQuery } from "@mui/material";
import { useTranslations } from "next-intl";
import { StyledLink } from "../../styles/componentStyles/StyledComponents.theme";
import { FooterForm } from "./FooterForm/FooterForm";
import footerMenus from "./FooterForm/footerMenuItens";

const PrimaryFooter = () => {
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const translate = useTranslations("Global");

  return (
    <Box
      sx={{
        backgroundColor: footerColor,
        width: "100%",
      }}
    >
      <Container>
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="space-around"
          gap={4}
        >

          <Box
            display="flex"
            flexDirection={isMobile ? "column" : "row"}
            alignItems={isMobile ? "center" : "flex-start"}
            justifyContent="space-between"
            gap={4}
            px={2}
          >
            {footerMenus(translate).map((menu) => (
              <Box key={menu.title} >
                <Box pb={4} >
                  <Typography variant="h5" color="white">
                    {menu.title}
                  </Typography>
                </Box>

                {!isMobile && (
                  <Box display="flex" gap={3} flexDirection="column">
                    {menu.menuItems.map((item) => (
                      <StyledLink key={item.title} href={item.path} >
                        <Typography
                          key={item.title}
                          variant="h6"
                          color="white"
                          fontSize={13}
                          sx={{
                            flexWrap: "nowrap",
                            "&:hover": { textDecoration: "underline" },
                          }}
                        >
                          {item.title}
                        </Typography>
                      </StyledLink>
                    ))}
                  </Box>
                )}
              </Box>
            ))}
            <FooterForm />
          </Box>
          <Box width="100%">
            <Divider color="white" />
          </Box>
        </Box>

      </Container>
    </Box>
  );
};

export default PrimaryFooter;