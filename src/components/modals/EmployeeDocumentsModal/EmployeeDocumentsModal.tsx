import type { EmployeeDocuments } from "@/data/employee/personalData/employee.types";
import {
    Button,
    Dialog,
    Grid,
    HStack,
    Icon,
    Image,
    Portal,
    Text,
    VStack,
} from "@chakra-ui/react";
import { FiEdit2, FiPlus } from "react-icons/fi";
import DocumentDataSection from "./DocumentDataSection";

type EmployeeDocumentsModalProps = {
    open: boolean;
    documents: EmployeeDocuments;
    registrationAddress?: string;
    residentialAddress?: string;
    insuranceCompany?: string;
    insuranceDuration?: string;
    onClose: () => void;
    onAdd: () => void;
    onEdit: () => void;
};

type ReadonlyFieldProps = {
    label: string;
    value?: string;
    action?: React.ReactNode;
};

const copyIcon = (
    <Image
        src="/assets/icons/copy.svg"
        alt=""
        w="10px"
        h="13px"
        cursor="pointer"
        transition="opacity 0.2s ease"
        _hover={{ opacity: 0.65 }}
    />
);

function ReadonlyField({ label, value, action }: ReadonlyFieldProps) {
    return (
        <Grid
            templateColumns="105px minmax(0, 1fr)"
            gap="16px"
            alignItems="start"
        >
            <Text color="#9aa1bb" fontSize="12px" lineHeight="18px">
                {label}
            </Text>

            <HStack align="start" gap="6px" minW={0}>
                <Text
                    color="#56607f"
                    fontSize="12px"
                    lineHeight="18px"
                    whiteSpace="pre-line"
                >
                    {value || "—"}
                </Text>
                {action}
            </HStack>
        </Grid>
    );
}

const EmployeeDocumentsModal = ({
    open,
    documents,
    registrationAddress,
    residentialAddress,
    insuranceCompany = "Альфа-Страхование",
    insuranceDuration = "До 2027 года",
    onClose,
    onAdd,
    onEdit,
}: EmployeeDocumentsModalProps) => {
    return (
        <Dialog.Root
            open={open}
            onOpenChange={(details) => {
                if (!details.open) onClose();
            }}
            size="cover"
        >
            <Portal>
                <Dialog.Backdrop bg="blackAlpha.500" />

                <Dialog.Positioner>
                    <Dialog.Content
                        maxW="930px"
                        minH="720px"
                        borderRadius="4px"
                        overflow="hidden"
                    >
                        <Dialog.Header
                            h="80px"
                            px="26px"
                            borderBottom="1px solid #dbe5f2"
                        >
                            <Dialog.Title
                                color="#303235"
                                fontSize="20px"
                                fontWeight="500"
                            >
                                Данные документов
                            </Dialog.Title>
                        </Dialog.Header>

                        <Dialog.Body px="26px" py="28px">
                            <VStack align="stretch" gap="26px">
                                <DocumentDataSection
                                    title="Основные данные"
                                    subtitle="Данные документов"
                                    minH="205px"
                                >
                                    <Grid
                                        templateColumns="1fr 1fr 1fr"
                                        gap="34px"
                                    >
                                        <VStack align="stretch" gap="12px">
                                            <ReadonlyField
                                                label="Вид документа"
                                                value={documents.documentType}
                                            />
                                            <ReadonlyField
                                                label="Серия и номер"
                                                value={
                                                    documents.seriesAndNumber
                                                }
                                                action={copyIcon}
                                            />
                                            <ReadonlyField
                                                label="Дата выдачи"
                                                value={documents.issueDate}
                                            />
                                            <ReadonlyField
                                                label="Кем выдан"
                                                value={documents.issuedBy}
                                            />
                                        </VStack>

                                        <VStack align="stretch" gap="12px">
                                            <ReadonlyField
                                                label="Код подразд."
                                                value={documents.departmentCode}
                                            />
                                            <ReadonlyField
                                                label="СНИЛС"
                                                value={documents.snils}
                                            />
                                            <ReadonlyField
                                                label="ИНН"
                                                value={documents.inn}
                                            />
                                        </VStack>

                                        <VStack align="stretch" gap="12px">
                                            <ReadonlyField
                                                label="Полис ОМС"
                                                value={documents.omsPolicy}
                                            />
                                            <ReadonlyField
                                                label="Полис ДМС"
                                                value={documents.dmsPolicy}
                                            />
                                        </VStack>
                                    </Grid>
                                </DocumentDataSection>

                                <DocumentDataSection
                                    title="Дополнительные данные"
                                    subtitle="Дополнительные данные документов"
                                    minH="285px"
                                >
                                    <VStack
                                        align="stretch"
                                        gap="12px"
                                        maxW="520px"
                                    >
                                        <ReadonlyField
                                            label="Страховая компания"
                                            value={insuranceCompany}
                                        />
                                        <ReadonlyField
                                            label="Длительность страхования"
                                            value={insuranceDuration}
                                        />
                                        <ReadonlyField
                                            label="Адрес постоянной регистрации"
                                            value={registrationAddress}
                                        />
                                        <ReadonlyField
                                            label="Фактический адрес проживания"
                                            value={
                                                residentialAddress ||
                                                registrationAddress
                                            }
                                        />
                                    </VStack>
                                </DocumentDataSection>
                            </VStack>
                        </Dialog.Body>

                        <Dialog.Footer
                            h="92px"
                            px="22px"
                            borderTop="1px solid #dbe5f2"
                        >
                            <HStack justify="flex-end" w="100%" gap="10px">
                                <Button
                                    h="34px"
                                    px="14px"
                                    bg="#303235"
                                    color="white"
                                    borderRadius="4px"
                                    fontSize="14px"
                                    fontWeight="400"
                                    onClick={onAdd}
                                    _hover={{ bg: "#242629" }}
                                >
                                    <Icon as={FiPlus} />
                                    Добавить данные
                                </Button>

                                <Button
                                    h="34px"
                                    px="14px"
                                    bg="#f4f4f4"
                                    color="#303235"
                                    borderRadius="4px"
                                    fontSize="14px"
                                    fontWeight="400"
                                    onClick={onEdit}
                                    _hover={{ bg: "#ebedf1" }}
                                >
                                    <Icon as={FiEdit2} />
                                    Изменить данные
                                </Button>

                                <Button
                                    h="34px"
                                    px="16px"
                                    variant="outline"
                                    borderColor="#303235"
                                    color="#303235"
                                    borderRadius="4px"
                                    fontSize="14px"
                                    fontWeight="400"
                                    onClick={onClose}
                                >
                                    Отмена
                                </Button>
                            </HStack>
                        </Dialog.Footer>
                    </Dialog.Content>
                </Dialog.Positioner>
            </Portal>
        </Dialog.Root>
    );
};

export default EmployeeDocumentsModal;
