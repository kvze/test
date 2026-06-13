import { Box, HStack, Image, Text } from "@chakra-ui/react";
import type { ReactNode } from "react";

type InfoCardProps = {
    title: string;
    children: ReactNode;
    status?: ReactNode;
};

export function InfoCard({ title, children, status }: InfoCardProps) {
    return (
        <Box
            bg="white"
            border="1px solid"
            borderColor="#d7dbec"
            borderRadius="4px"
            p="12px"
            h="411px"
            minH="305px"
            display="flex"
            flexDirection="column"
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
                {status ?? (
                    <Image
                        src="/assets/icons/edit.svg"
                        alt=""
                        w="12px"
                        h="12px"
                        cursor="pointer"
                        transition="opacity 0.2s ease"
                        _hover={{ opacity: 0.65 }}
                    />
                )}
            </HStack>

            <Box flex="1" minH={0}>
                {children}
            </Box>
        </Box>
    );
}
