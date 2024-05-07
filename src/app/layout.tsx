"use client";
import "@/styles/globals.css";
import "@/styles/fonts.css";
import createTheme from "@/theme";
import { Box, PaletteMode, ThemeProvider, responsiveFontSizes } from "@mui/material";
import { useState } from "react";
import { Toaster } from "react-hot-toast";


interface IRootLayout {
  children: React.ReactNode;
}

const RootLayout = ({
  children,
}: Readonly<IRootLayout>) => {

  const [themeMode, setThemeMode] = useState<PaletteMode>('light')
  const [openMediaMenu, setOpenMediaMenu] = useState(false)

  const theme = responsiveFontSizes( createTheme(themeMode) )



  return (
    <html lang="en">
      <head>
      <title>PayStack</title>
      </head>

      <body 
      suppressHydrationWarning
      >
      <ThemeProvider theme={theme}>
        {children}
      </ThemeProvider>
      <Toaster />
      </body>
    </html>
  );
}


export default RootLayout