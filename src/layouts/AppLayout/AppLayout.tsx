import Header from "@/widgets/Header/ui/Header";
import Sidebar from "@/widgets/Sidebar/ui/Sidebar";
import { Box, Flex } from "@chakra-ui/react";
import type { ReactNode } from "react";

type AppLayoutProps = {
    title: string;
    children: ReactNode;
};

export function AppLayout({ title, children }: AppLayoutProps) {
    return (
        <Flex minH="100vh">
            <Sidebar />
            <Box flex="1" minW={0}>
                <Header title={title} />
                {children}
            </Box>
        </Flex>
    );
}
