"use client";

import { createTheme } from "@mui/material";
import { Charm, Geist_Mono, Lexend } from "next/font/google";

const lexend = Lexend({
  variable: "--font-lexend",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const charm = Charm({
  variable: "--font-charm",
  weight: ["400", "700"]
})

const baseTheme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  palette: {
    primary: {
      main: "#8b4513", 
      contrastText: "#8b4513CC"
    },
    secondary: {
      main: "#f0e68c", 
    },
    background: {
      default: "#f5f5f5", 
      paper: "#ffffff", 
    },
  },
  typography: {
    fontFamily: `${lexend.style.fontFamily}, ${geistMono.style.fontFamily}`,
  },
});

export const theme = createTheme(baseTheme, {
  typography: {
    h1: {
      fontSize: "64px",
      fontWeight: 300,
      [baseTheme.breakpoints.only("md")]: {
        fontSize: "60px",
      },
      [baseTheme.breakpoints.only("sm")]: {
        fontSize: "56px",
      },
      [baseTheme.breakpoints.only("xs")]: {
        fontSize: "52px",
      },
    },
    h3: {
      fontSize: "48px",
      fontWeight: 300,
      [baseTheme.breakpoints.only("md")]: {
        fontSize: "44px",
      },
      [baseTheme.breakpoints.only("sm")]: {
        fontSize: "42px",
      },
      [baseTheme.breakpoints.only("xs")]: {
        fontSize: "40px",
      },
    },
    h4: {
      fontSize: "42px",
      fontWeight: 300,
      [baseTheme.breakpoints.only("md")]: {
        fontSize: "36px",
      },
      [baseTheme.breakpoints.only("sm")]: {
        fontSize: "34px",
      },
      [baseTheme.breakpoints.only("xs")]: {
        fontSize: "24px",
      },
    },
    h5: {
      fontSize: "24px",
      fontWeight: 300,
      [baseTheme.breakpoints.only("md")]: {
        fontSize: "22px",
      },
      [baseTheme.breakpoints.only("sm")]: {
        fontSize: "20px",
      },
      [baseTheme.breakpoints.only("xs")]: {
        fontSize: "18px",
      },
    },
    h6: {
      fontSize: "16px",
      fontWeight: 300,
      [baseTheme.breakpoints.only("md")]: {
        fontSize: "14px",
      },
      [baseTheme.breakpoints.only("sm")]: {
        fontSize: "12px",
      },
      [baseTheme.breakpoints.only("xs")]: {
        fontSize: "10px",
      },
    },

  },
  components: {
    MuiButton: {
      styleOverrides: {
        containedPrimary: {
          borderRadius: "0px",
          textTransform: "none",
          backgroundColor: baseTheme.palette.primary.main, 
          color: "#ffffff",
          '&:hover': {
          backgroundColor: baseTheme.palette.primary.contrastText, 

          }
        },
        outlinedPrimary: {
          width: "130px",
          height: "50px",
          borderRadius: "0px",
          textTransform: "none",
          padding: "12px 24px",
          backgroundColor:"#ffffff", 
          color: baseTheme.palette.primary.main,
          '&:hover': {
            backgroundColor: baseTheme.palette.primary.main, 
            color: baseTheme.palette.background.default
          }
        }
      }
    },

  },
});

export default theme;