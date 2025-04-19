import { AlertProvider } from "@/components/Alert/useAlertContext";
import PrimaryNavBar from "@/components/Header/NavBar";
import { routing } from "@/i18n/routing";
import theme from "@/styles/base.theme";
import { Box, ThemeProvider } from "@mui/material";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";


export const metadata: Metadata = {
  title: "Tia Rosa CoffeeShop",
  description: "A simple coffee shop app",
  icons: {
    icon: "/images/logo.jpg",
    shortcut: "/images/logo.jpg",
    apple: "/images/logo.jpg",
  },
  alternates: {
    languages: {
      pt: "/pt",
      en: "/en",
    },
  },
  openGraph: {
    url: "https://tiarosacoffechop.co",
    siteName: "Tia Rosa Coffe Shop",
    description:
      "A simple cofee shop app",
    type: "website",
  },
};

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {

  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body style={{ margin: 0, padding: 0 }}>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <NextIntlClientProvider>
              <PrimaryNavBar />
              <AlertProvider>
                <Box component="main">
                  {children}
                  <SpeedInsights />
                </Box>
              </AlertProvider>
            </NextIntlClientProvider>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  )
}

