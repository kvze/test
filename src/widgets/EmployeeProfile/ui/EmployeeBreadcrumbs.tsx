import { Box, Flex, HStack, Text } from "@chakra-ui/react";

type EmployeeBreadcrumbsProps = {
    employeeName: string;
    employeeId: string;
};

export function EmployeeBreadcrumbs({
    employeeName,
    employeeId,
}: EmployeeBreadcrumbsProps) {
    return (
        <HStack justify="space-between" mb="18px">
            <HStack gap="10px">
                <Text
                    fontSize="14px"
                    color="#5b6283"
                    fontWeight={"400"}
                    _hover={{ color: "#3f4050" }}
                    cursor={"pointer"}
                >
                    Работники
                </Text>
                <Box>
                    <svg
                        width="11"
                        height="9"
                        viewBox="0 0 11 9"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M5.77699 8.90909L5.01136 8.15341L8.16335 5.00142H0V3.90767H8.16335L5.01136 0.765622L5.77699 -2.6226e-06L10.2315 4.45454L5.77699 8.90909Z"
                            fill="#5B6283"
                        />
                    </svg>
                </Box>
                <Text
                    fontSize="14px"
                    color="#5b6283"
                    fontWeight={"400"}
                    _hover={{ color: "#3f4050" }}
                    cursor={"pointer"}
                >
                    База работников
                </Text>
                <Box>
                    <svg
                        width="11"
                        height="9"
                        viewBox="0 0 11 9"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M5.77699 8.90909L5.01136 8.15341L8.16335 5.00142H0V3.90767H8.16335L5.01136 0.765622L5.77699 -2.6226e-06L10.2315 4.45454L5.77699 8.90909Z"
                            fill="#5B6283"
                        />
                    </svg>
                </Box>
                <Text
                    fontSize="14px"
                    color="#5b6283"
                    fontWeight={"400"}
                    _hover={{ color: "#3f4050" }}
                    cursor={"pointer"}
                >
                    {employeeName}
                </Text>
            </HStack>
            <Flex gap={"5px"} align={"center"}>
                <Text
                    fontSize="14px"
                    color="#5b6283"
                    fontWeight={"400"}
                    opacity={"0.5"}
                >
                    №&nbsp; {employeeId}
                </Text>
                <Box pb={"2px"} cursor={"pointer"}>
                    <svg
                        width="10"
                        height="13"
                        viewBox="0 0 10 13"
                        fill="#1d558f"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            opacity="0.3"
                            d="M10 0H3.125V1.3H8.75V9.75H10V0ZM7.5 2.6H0V13H7.5V2.6ZM6.25 3.9V11.7H1.25V3.9H6.25Z"
                            fill="#1D558F"
                        />
                    </svg>
                </Box>
            </Flex>
        </HStack>
    );
}
