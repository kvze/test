import { HStack, Text } from "@chakra-ui/react";

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
            <HStack gap="8px">
                <Text fontSize="12px" color="#53617a">
                    Работники
                </Text>
                <Text fontSize="12px" color="#9aa6b8">
                    →
                </Text>
                <Text fontSize="12px" color="#53617a">
                    База работников
                </Text>
                <Text fontSize="12px" color="#9aa6b8">
                    →
                </Text>
                <Text fontSize="12px" color="#53617a">
                    {employeeName}
                </Text>
            </HStack>

            <Text fontSize="12px" color="#8a96ad">
                №&nbsp; {employeeId}
            </Text>
        </HStack>
    );
}
