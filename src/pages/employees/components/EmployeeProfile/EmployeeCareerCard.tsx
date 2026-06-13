import type { EmployeeCareer } from "@/data/employee/personalData/employee.types";
import { InfoCard } from "@/shared/ui/InfoCard/InfoCard";
import { InfoRow } from "@/shared/ui/InfoRow/InfoRow";
import {
    Badge,
    Box,
    Button,
    HStack,
    Image,
    Text,
    VStack,
} from "@chakra-ui/react";

type EmployeeCareerCardProps = {
    career: EmployeeCareer;
};

const copyIcon = (
    <Image
        src="/assets/icons/copy.svg"
        alt=""
        w="10px"
        h="13px"
        cursor="pointer"
    />
);

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
                    actions={copyIcon}
                />
                <InfoRow label="Должность" value={career.position} />
                <InfoRow
                    label="Код цеха"
                    value={career.shopCode}
                    actions={copyIcon}
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
                                    fontWeight="500"
                                    px="4px"
                                    py="1px"
                                >
                                    {factor}
                                </Badge>
                            ))}
                        </HStack>
                    }
                />

                <HStack mt="auto" mb="6px" gap="6px" ml="6px">
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
                        _hover={{ bg: "#2d333d" }}
                    >
                        <Image
                            src="/assets/icons/plus.svg"
                            alt=""
                            w="10px"
                            h="10px"
                        />
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
                        _hover={{ bg: "#f8fafc" }}
                    >
                        <Image
                            src="/assets/icons/employee-records.svg"
                            alt=""
                            w="12px"
                            h="12px"
                        />
                        Все трудовые записи 4
                    </Button>
                </HStack>
            </VStack>
        </InfoCard>
    );
}
