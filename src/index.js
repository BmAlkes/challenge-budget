import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import theme from "./styles/theme";
import GlobalStyles from "./styles/global";
import { ThemeProvider } from "styled-components";
import { TransactionProvider } from "./context/TransactionContext";

ReactDOM.render(
    <React.StrictMode>
        <GlobalStyles />
        <ThemeProvider theme={theme}>
            <TransactionProvider>
                <App />
            </TransactionProvider>
        </ThemeProvider>
    </React.StrictMode>,
    document.getElementById("root")
);
