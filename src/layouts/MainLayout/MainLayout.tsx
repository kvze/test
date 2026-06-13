import { Box, Flex } from "@chakra-ui/react";
import type { ReactNode } from "react";
import Sidebar from "./Sidebar/Sidebar";

type MainLayoutProps = {
    children: ReactNode;
};

export function MainLayout({ children }: MainLayoutProps) {
    return (
        <Flex minH="100vh">
            <Sidebar />
            <Box flex="1" minW={0}>
                {children}
            </Box>
        </Flex>
    );
}
