import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes/Route";
import { Toaster } from "./components/ui/sonner";
import { HelmetProvider } from "react-helmet-async";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HelmetProvider>
      {/* <QueryClientProvider client={queryClient}> */}
      {/* <AuthProvider> */}

      <RouterProvider router={router} />
      <Toaster position="top-right" closeButton duration={4000} />

      {/* </AuthProvider> */}
      {/* </QueryClientProvider> */}
    </HelmetProvider>
  </StrictMode>,
);
