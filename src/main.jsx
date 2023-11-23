import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { store } from "./Redux/Store.js";
import { Provider } from "react-redux";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "./Theme/theme.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <React.StrictMode>
      {/* <ChakraProvider theme={theme}> */}
      <App />
      {/* </ChakraProvider> */}
    </React.StrictMode>
  </Provider>
);
