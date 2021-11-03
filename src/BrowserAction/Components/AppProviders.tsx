import { QueryClient, QueryClientProvider } from "react-query";
import React from "react";
import { SettingsContextProvider } from "../Hooks/SettingsContext";
import { RoomsContextProvider } from "../Hooks/RoomsContext";

const queryClient = new QueryClient({
  defaultOptions: { queries: { refetchOnWindowFocus: false } },
});

export const AppProviders: React.FC = ({ children }) => (
  <>
    <QueryClientProvider client={queryClient}>
      <SettingsContextProvider>
        <RoomsContextProvider>{children}</RoomsContextProvider>
      </SettingsContextProvider>
    </QueryClientProvider>
  </>
);
