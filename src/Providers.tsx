import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/react-query";

interface IProvidersProps {
  children: React.ReactNode;
}

export default function Providers({ children }: IProvidersProps) {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
