import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter, BrowserRouter, MemoryRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import "@fontsource/roboto";

import App from "@/pages/App";
import { CssBaseline } from "@mui/material";

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  // <React.StrictMode>
  <HashRouter>
    <QueryClientProvider client={queryClient}>
      <CssBaseline />
      <App />
    </QueryClientProvider>
  </HashRouter>
  // </React.StrictMode>
);
