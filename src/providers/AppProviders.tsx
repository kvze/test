import type { ReactNode } from "react";
import { ChakraProvider } from "./ChakraProvider";
import { CurrentUserProvider } from "./CurrentUserProvider";

type AppProvidersProps = {
    children: ReactNode;
};

export function AppProviders({ children }: AppProvidersProps) {
    return (
        <ChakraProvider>
            <CurrentUserProvider>{children}</CurrentUserProvider>
        </ChakraProvider>
    );
}
