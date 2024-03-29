// import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { store } from "./Redux/Store.js";
import { Provider } from "react-redux";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import theme from "./Theme/theme.js";
import { TerminalContextProvider } from "react-terminal";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    {/* <React.StrictMode> */}
    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
    <ChakraProvider theme={theme}>
      <TerminalContextProvider>
        <App />
      </TerminalContextProvider>
    </ChakraProvider>
    {/* </React.StrictMode> */}
  </Provider>
);
