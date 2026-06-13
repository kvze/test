import { Box, HStack, Text } from "@chakra-ui/react";
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
            h={"411px"}
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
                    <Box cursor={"pointer"}>
                        <svg
                            width="12"
                            height="12"
                            viewBox="0 0 12 12"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                opacity="0.4"
                                d="M1.33333 10.6667H2.28333L8.8 4.15L7.85 3.2L1.33333 9.71667V10.6667ZM0 12V9.16667L8.8 0.383333C8.93333 0.261111 9.08056 0.166667 9.24167 0.1C9.40278 0.0333333 9.57222 0 9.75 0C9.92778 0 10.1 0.0333333 10.2667 0.1C10.4333 0.166667 10.5778 0.266667 10.7 0.4L11.6167 1.33333C11.75 1.45556 11.8472 1.6 11.9083 1.76667C11.9694 1.93333 12 2.1 12 2.26667C12 2.44444 11.9694 2.61389 11.9083 2.775C11.8472 2.93611 11.75 3.08333 11.6167 3.21667L2.83333 12H0ZM8.31667 3.68333L7.85 3.2L8.8 4.15L8.31667 3.68333Z"
                                fill="#1C1B1F"
                            />
                        </svg>
                    </Box>
                )}
            </HStack>

            <Box flex="1" minH={0}>
                {children}
            </Box>
        </Box>
    );
}
