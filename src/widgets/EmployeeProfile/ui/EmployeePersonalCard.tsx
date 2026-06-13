import type { Employee } from "@/entities/employee/model/types";
import { InfoCard } from "@/shared/ui/InfoCard/InfoCard";
import { InfoRow } from "@/shared/ui/InfoRow/InfoRow";
import CopyIcon from "@/shared/ui/icons/CopyIcon";
import PhoneIcon from "@/shared/ui/icons/PhoneIcon";
import { HStack, Text, VStack } from "@chakra-ui/react";

type EmployeePersonalCardProps = {
    employee: Employee;
};

export function EmployeePersonalCard({ employee }: EmployeePersonalCardProps) {
    return (
        <InfoCard title="Личные данные">
            <VStack align="stretch" gap="10px">
                <InfoRow label="Фамилия" value={employee.lastName} />
                <InfoRow label="Имя" value={employee.firstName} />
                <InfoRow label="Отчество" value={employee.middleName} />
                <InfoRow
                    label="Дата рождения"
                    value={
                        <HStack as="span" gap="12px">
                            <Text
                                as="span"
                                fontSize="12px"
                                fontWeight="500"
                                color="#5a607f"
                            >
                                {employee.birthDate}
                            </Text>
                            <CopyIcon />
                            <Text
                                as="span"
                                fontSize="12px"
                                fontWeight="500"
                                color="#5a607f"
                                opacity="0.6"
                            >
                                {employee.age} лет
                            </Text>
                        </HStack>
                    }
                />
                <InfoRow label="Пол" value={employee.gender} />
                <InfoRow label="Место рождения" value={employee.birthplace} />
                <InfoRow label="Гражданство" value={employee.citizenship} />
                <InfoRow
                    label="Моб. телефон"
                    value={
                        <HStack
                            as="span"
                            gap="4px"
                            bg="#f0f0f0"
                            borderRadius="4px"
                            px="4px"
                            minH="18px"
                        >
                            <Text
                                as="span"
                                fontSize="12px"
                                fontWeight="500"
                                color="#5a607f"
                            >
                                {employee.mobilePhone}
                            </Text>
                            <PhoneIcon />
                        </HStack>
                    }
                    actions={<CopyIcon />}
                />
                <InfoRow
                    label="Раб. телефон"
                    value={
                        <HStack
                            as="span"
                            gap="4px"
                            bg="#f0f0f0"
                            borderRadius="4px"
                            px="4px"
                            minH="18px"
                        >
                            <Text
                                as="span"
                                fontSize="12px"
                                fontWeight="500"
                                color="#5a607f"
                            >
                                {employee.workPhone}
                            </Text>
                            <PhoneIcon />
                        </HStack>
                    }
                    actions={<CopyIcon />}
                />
                <InfoRow label="Email" value={employee.email} />
                <InfoRow
                    label="Адрес регистрации"
                    value={employee.registrationAddress}
                />
            </VStack>
        </InfoCard>
    );
}
