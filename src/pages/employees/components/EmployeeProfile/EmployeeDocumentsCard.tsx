import type { EmployeeDocuments } from "@/data/employee/employee.types";
import { InfoCard } from "@/shared/ui/InfoCard/InfoCard";
import { InfoRow } from "@/shared/ui/InfoRow/InfoRow";
import { Button, Image, VStack } from "@chakra-ui/react";

type EmployeeDocumentsCardProps = {
    documents: EmployeeDocuments;
    onOpenDetails: () => void;
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

export function EmployeeDocumentsCard({
    documents,
    onOpenDetails,
}: EmployeeDocumentsCardProps) {
    return (
        <InfoCard title="Данные документов">
            <VStack align="stretch" gap="10px" h="100%">
                <InfoRow label="Вид документа" value={documents.documentType} />
                <InfoRow
                    label="Серия и номер"
                    value={documents.seriesAndNumber}
                    actions={copyIcon}
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
                    mt="auto"
                    mb="6px"
                    ml="6px"
                    h="24px"
                    minH="24px"
                    px="10px"
                    bg="#303235"
                    color="white"
                    borderRadius="2px"
                    fontSize="12px"
                    fontWeight="500"
                    _hover={{ bg: "#2d333d" }}
                    onClick={onOpenDetails}
                >
                    Подробнее
                </Button>
            </VStack>
        </InfoCard>
    );
}
