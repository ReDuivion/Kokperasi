import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ChakraBaseProvider, ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import UserContext from "./Context/UserContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        {/* <UserContext> */}

        <ChakraProvider>
            <BrowserRouter> 
                <App />
            </BrowserRouter>
        </ChakraProvider>
        {/* </UserContext> */}
    </React.StrictMode>
);
