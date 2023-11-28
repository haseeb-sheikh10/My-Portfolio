import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const globalStyles = {
  colors: {
    gray: {
      700: "#1f2733",
    },
    primary: {
      500: "#5b9279",
    },

    secondary: {
      500: "#8fcb9b",
    },
  },
  styles: {
    global: (props) => ({
      body: {
        bg: mode("#eae6e5", "#12130f")(props),
        color: mode("gray.700", "#eae6e5")(props),
      },
    }),
  },
  fonts: {
    heading: `'Ubuntu', 'Roboto'`,
    body: `'Ubuntu', 'Roboto'`,
  },
};

const config = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const theme = extendTheme({ config }, globalStyles);

export default theme;
