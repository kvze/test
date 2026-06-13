"use client";

import {
    ColorModeProvider,
    type ColorModeProviderProps,
} from "@/shared/ui/color-mode/color-mode";
import {
    ChakraProvider as ChakraProviderBase,
    defaultSystem,
} from "@chakra-ui/react";

export function ChakraProvider(props: ColorModeProviderProps) {
    return (
        <ChakraProviderBase value={defaultSystem}>
            <ColorModeProvider {...props} />
        </ChakraProviderBase>
    );
}
