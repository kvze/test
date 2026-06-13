import type { EmployeeCareer } from "@/entities/employee/model/types";
import { InfoCard } from "@/shared/ui/InfoCard/InfoCard";
import { InfoRow } from "@/shared/ui/InfoRow/InfoRow";
import CopyIcon from "@/shared/ui/icons/CopyIcon";
import EmployeeRecordsIcon from "@/shared/ui/icons/EmployeeRecordsIcon";
import PlusIcon from "@/shared/ui/icons/PlusIcon";
import { Badge, Box, Button, HStack, Text, VStack } from "@chakra-ui/react";

type EmployeeCareerCardProps = {
    career: EmployeeCareer;
};

export function EmployeeCareerCard({ career }: EmployeeCareerCardProps) {
    return (
        <InfoCard
            title="Карьера"
            status={
                <HStack gap="4px">
                    <Box w="6px" h="6px" borderRadius="50%" bg="#22c55e" />
                    <Text fontSize="11px" color="#34405a">
                        {career.status}
                    </Text>
                </HStack>
            }
        >
            <VStack align="stretch" gap="10px" h="100%">
                <InfoRow
                    label="Таб. номер"
                    value={career.personnelNumber}
                    actions={<CopyIcon />}
                />
                <InfoRow label="Должность" value={career.position} />
                <InfoRow
                    label="Код цеха"
                    value={career.shopCode}
                    actions={<CopyIcon />}
                />
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
                                    bg="#f0f0f0"
                                    color="#5a607f"
                                    borderRadius="3px"
                                    fontSize="10px"
                                    fontWeight={"500"}
                                    px="4px"
                                    py="1px"
                                >
                                    {factor}
                                </Badge>
                            ))}
                        </HStack>
                    }
                />

                <HStack mt="auto" mb="6px" gap="6px" ml={"6px"}>
                    <Button
                        h="24px"
                        minH="24px"
                        px="10px"
                        bg="#20242b"
                        color="white"
                        borderRadius="2px"
                        fontSize="12px"
                        fontWeight="500"
                        gap="8px"
                        lineHeight="1"
                        _icon={{ w: "10px", h: "10px" }}
                        _hover={{ bg: "#2d333d" }}
                    >
                        <PlusIcon />
                        Добавить запись
                    </Button>

                    <Button
                        h="24px"
                        minH="24px"
                        px="6px"
                        bg="white"
                        color="#303235"
                        border="1px solid"
                        borderColor="#303235"
                        borderRadius="2px"
                        fontSize="12px"
                        fontWeight="500"
                        gap="8px"
                        lineHeight="1"
                        _icon={{ w: "12px", h: "12px" }}
                        _hover={{ bg: "#f8fafc" }}
                    >
                        <EmployeeRecordsIcon />
                        Все трудовые записи 4
                    </Button>
                </HStack>
            </VStack>
        </InfoCard>
    );
}
