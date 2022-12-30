import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";
import "./styles/globals.css";
import { StateProvider } from "./context";
import { BrowserRouter as Router } from "react-router-dom";

// This is the chainId your dApp will work on.
const activeChainId = ChainId.Mumbai;

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
    <ThirdwebProvider autoConnect={true} desiredChainId={activeChainId}>
      <Router>
        <StateProvider>
          <App />
        </StateProvider>
      </Router>
    </ThirdwebProvider>
);
