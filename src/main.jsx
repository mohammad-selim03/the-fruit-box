import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { RouterProvider } from "react-router";
import { router } from "./routes/Routes";
import ContextProvider from "./context/Context";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { HelmetProvider } from "react-helmet-async";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <ContextProvider>
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router}>
          <ReactQueryDevtools initialIsOpen={false} />
          <App />
        </RouterProvider>
      </QueryClientProvider>
    </HelmetProvider>
  </ContextProvider>
);
