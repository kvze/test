import type { EmployeeCareer } from "@/entities/employee/model/types";
import { InfoCard } from "@/shared/ui/InfoCard/InfoCard";
import { InfoRow } from "@/shared/ui/InfoRow/InfoRow";
import { Badge, Box, Button, HStack, Text, VStack } from "@chakra-ui/react";

type EmployeeCareerCardProps = {
    career: EmployeeCareer;
};

export function EmployeeCareerCard({ career }: EmployeeCareerCardProps) {
    return (
        <InfoCard
            title="Карьера"
            action={
                <HStack gap="4px">
                    <Box w="6px" h="6px" borderRadius="50%" bg="#22c55e" />
                    <Text fontSize="11px" color="#34405a">
                        {career.status}
                    </Text>
                </HStack>
            }
        >
            <VStack align="stretch" gap="10px">
                <InfoRow label="Таб. номер" value={career.personnelNumber} />
                <InfoRow label="Должность" value={career.position} />
                <InfoRow label="Код цеха" value={career.shopCode} />
                <InfoRow label="Организация" value={career.organization} />
                <InfoRow label="Подразделение" value={career.department} />
                <InfoRow label="Участок/бригада" value={career.area} />
                <InfoRow
                    label="Дата устройства"
                    value={career.employmentDate}
                />

                <InfoRow
                    label="Вредные факторы"
                    value={
                        <HStack gap="5px" flexWrap="wrap">
                            {career.harmfulFactors.map((factor, index) => (
                                <Badge
                                    key={`${factor}-${index}`}
                                    bg="#eef2f7"
                                    color="#59677f"
                                    borderRadius="3px"
                                    fontSize="10px"
                                    px="4px"
                                    py="1px"
                                >
                                    {factor}
                                </Badge>
                            ))}
                        </HStack>
                    }
                />

                <HStack mt="34px" gap="6px">
                    <Button
                        h="24px"
                        px="10px"
                        bg="#20242b"
                        color="white"
                        borderRadius="2px"
                        fontSize="11px"
                        fontWeight="400"
                        _hover={{ bg: "#2d333d" }}
                    >
                        + Добавить запись
                    </Button>

                    <Button
                        h="24px"
                        px="10px"
                        bg="white"
                        color="#30384a"
                        border="1px solid"
                        borderColor="#9aa6b8"
                        borderRadius="2px"
                        fontSize="11px"
                        fontWeight="400"
                        _hover={{ bg: "#f8fafc" }}
                    >
                        Все трудовые записи 4
                    </Button>
                </HStack>
            </VStack>
        </InfoCard>
    );
}
