import { Box, HStack, Text } from "@chakra-ui/react";
import type { ReactNode } from "react";

type InfoCardProps = {
    title: string;
    children: ReactNode;
    action?: ReactNode;
};

export function InfoCard({ title, children, action }: InfoCardProps) {
    return (
        <Box
            bg="white"
            border="1px solid"
            borderColor="#d7dbec"
            borderRadius="4px"
            p="12px"
            minH="305px"
        >
            <HStack justify="space-between" mb="10px">
                <Text
                    fontSize="10px"
                    fontWeight="500"
                    color="#303235"
                    textTransform="uppercase"
                    letterSpacing="0.1em"
                >
                    {title}
                </Text>

                {action}
            </HStack>

            {children}
        </Box>
    );
}
