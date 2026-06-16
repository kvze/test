import {
    ChakraProvider as ChakraProviderBase,
    defaultSystem,
} from "@chakra-ui/react";
import type { ReactNode } from "react";

interface ChakraProviderProps {
    children: ReactNode;
}

export function ChakraProvider({ children }: ChakraProviderProps) {
    return (
        <ChakraProviderBase value={defaultSystem}>
            {children}
        </ChakraProviderBase>
    );
}
