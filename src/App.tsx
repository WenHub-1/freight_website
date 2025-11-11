import { Suspense } from "react";
import { RouterProvider } from "react-router-dom";
import appRoutes from "./routes/router";

function App() {
  return (
    <Suspense fallback={<>Loading</>}>
      <RouterProvider router={appRoutes} />
    </Suspense>
  );
}

export default App;
