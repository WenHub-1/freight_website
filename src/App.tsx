import { Suspense } from "react";
import { RouterProvider } from "react-router-dom";
import { Toaster } from "sonner";
import appRoutes from "./routes/router";
import Providers from "./Providers";
import { Loader2 } from "lucide-react";

function App() {
  return (
    <Providers>
      <Suspense
        fallback={
          <div className="flex items-center justify-center h-screen">
            <Loader2 className="animate-spin text-primary size-16" />
          </div>
        }
      >
        <RouterProvider router={appRoutes} />
      </Suspense>
      <Toaster richColors position="top-center" />
    </Providers>
  );
}

export default App;
