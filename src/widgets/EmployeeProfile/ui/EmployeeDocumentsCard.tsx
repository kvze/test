import type { EmployeeDocuments } from "@/entities/employee/model/types";
import { InfoCard } from "@/shared/ui/InfoCard/InfoCard";
import { InfoRow } from "@/shared/ui/InfoRow/InfoRow";
import { Button, VStack } from "@chakra-ui/react";

type EmployeeDocumentsCardProps = {
    documents: EmployeeDocuments;
    onOpenDetails: () => void;
};

export function EmployeeDocumentsCard({
    documents,
    onOpenDetails,
}: EmployeeDocumentsCardProps) {
    return (
        <InfoCard title="Данные документов" action="✎">
            <VStack align="stretch" gap="10px">
                <InfoRow label="Вид документа" value={documents.documentType} />
                <InfoRow
                    label="Серия и номер"
                    value={documents.seriesAndNumber}
                />
                <InfoRow label="Дата выдачи" value={documents.issueDate} />
                <InfoRow label="Кем выдан" value={documents.issuedBy} />
                <InfoRow
                    label="Код подразд."
                    value={documents.departmentCode}
                />
                <InfoRow label="СНИЛС" value={documents.snils} />
                <InfoRow label="ИНН" value={documents.inn} />
                <InfoRow label="Полис ОМС" value={documents.omsPolicy} />
                <InfoRow label="Полис ДМС" value={documents.dmsPolicy} />

                <Button
                    alignSelf="start"
                    mt="10px"
                    h="24px"
                    px="10px"
                    bg="#20242b"
                    color="white"
                    borderRadius="2px"
                    fontSize="11px"
                    fontWeight="400"
                    _hover={{ bg: "#2d333d" }}
                    onClick={onOpenDetails}
                >
                    Подробнее
                </Button>
            </VStack>
        </InfoCard>
    );
}
