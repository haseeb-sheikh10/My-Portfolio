import { extendTheme } from "@chakra-ui/react";

const CustomTheme = {
  styles: {
    global: (props) => ({
      "html, body": {
        fontSize: "sm",
        color: props.colorMode === "dark" ? "white" : "black",
        lineHeight: "tall",
      },
      a: {
        color: props.colorMode === "dark" ? "teal.300" : "teal.500",
      },
      div: {
        background: "#12130f",
      },
    }),
  },
};

export const theme = extendTheme({ CustomTheme });
