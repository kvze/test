import type { Employee } from "@/entities/employee/model/types";
import { InfoCard } from "@/shared/ui/InfoCard/InfoCard";
import { InfoRow } from "@/shared/ui/InfoRow/InfoRow";
import { VStack } from "@chakra-ui/react";

type EmployeePersonalCardProps = {
    employee: Employee;
};

export function EmployeePersonalCard({ employee }: EmployeePersonalCardProps) {
    return (
        <InfoCard title="Личные данные" action="✎">
            <VStack align="stretch" gap="10px">
                <InfoRow label="Фамилия" value={employee.lastName} />
                <InfoRow label="Имя" value={employee.firstName} />
                <InfoRow label="Отчество" value={employee.middleName} />
                <InfoRow
                    label="Дата рождения"
                    value={`${employee.birthDate}   ${employee.age} лет`}
                />
                <InfoRow label="Пол" value={employee.gender} />
                <InfoRow label="Место рождения" value={employee.birthplace} />
                <InfoRow label="Гражданство" value={employee.citizenship} />
                <InfoRow label="Моб. телефон" value={employee.mobilePhone} />
                <InfoRow label="Раб. телефон" value={employee.workPhone} />
                <InfoRow label="Email" value={employee.email} />
                <InfoRow
                    label="Адрес регистрации"
                    value={employee.registrationAddress}
                />
            </VStack>
        </InfoCard>
    );
}
