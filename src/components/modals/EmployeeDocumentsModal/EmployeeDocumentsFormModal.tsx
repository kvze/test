import type { EmployeeDocuments } from "@/data/employee/personalData/employee.types";
import {
    Box,
    Button,
    Dialog,
    Field,
    Grid,
    HStack,
    Icon,
    Input,
    NativeSelect,
    Portal,
    Text,
    Textarea,
    VStack,
} from "@chakra-ui/react";
import type { ChangeEvent, FormEvent, ReactNode } from "react";
import { useMemo, useState } from "react";
import { FiCalendar, FiX } from "react-icons/fi";

export type EmployeeDocumentsFormValues = EmployeeDocuments & {
    insuranceCompany: string;
    insuranceDuration: string;
    registrationAddress: string;
    residentialAddress: string;
};

type EmployeeDocumentsFormModalProps = {
    open: boolean;
    documents: EmployeeDocuments;
    registrationAddress?: string;
    residentialAddress?: string;
    onClose: () => void;
    onCancel?: () => void;
    onSave?: (values: EmployeeDocumentsFormValues) => void;
};

type FormFieldProps = {
    label: string;
    required?: boolean;
    children: ReactNode;
};

function FormField({ label, required, children }: FormFieldProps) {
    return (
        <Field.Root>
            <Field.Label color="#68708f" fontSize="14px" fontWeight="400">
                {label}
                {required && (
                    <Text as="span" color="#e53e3e">
                        *
                    </Text>
                )}
            </Field.Label>
            {children}
        </Field.Root>
    );
}

const EmployeeDocumentsFormModal = ({
    open,
    documents,
    registrationAddress = "",
    residentialAddress = "",
    onClose,
    onCancel,
    onSave,
}: EmployeeDocumentsFormModalProps) => {
    const initialValues = useMemo<EmployeeDocumentsFormValues>(
        () => ({
            ...documents,
            insuranceCompany: "",
            insuranceDuration: "",
            registrationAddress,
            residentialAddress: residentialAddress || registrationAddress,
        }),
        [documents, registrationAddress, residentialAddress],
    );

    const [values, setValues] =
        useState<EmployeeDocumentsFormValues>(initialValues);

    const [documentSeries = "", documentNumber = ""] =
        values.seriesAndNumber.split(" ");

    const handleChange =
        (field: keyof EmployeeDocumentsFormValues) =>
        (
            event: ChangeEvent<
                HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
            >,
        ) => {
            setValues((currentValues) => ({
                ...currentValues,
                [field]: event.target.value,
            }));
        };

    const handleSeriesAndNumberChange =
        (field: "series" | "number") =>
        (event: ChangeEvent<HTMLInputElement>) => {
            const nextValue = event.target.value;

            setValues((currentValues) => {
                const [currentSeries = "", currentNumber = ""] =
                    currentValues.seriesAndNumber.split(" ");

                return {
                    ...currentValues,
                    seriesAndNumber:
                        field === "series"
                            ? `${nextValue} ${currentNumber}`.trim()
                            : `${currentSeries} ${nextValue}`.trim(),
                };
            });
        };

    const resetForm = () => {
        setValues(initialValues);
    };

    const handleClose = () => {
        resetForm();
        onClose();
    };

    const handleCancel = () => {
        resetForm();
        if (onCancel) {
            onCancel();
            return;
        }

        onClose();
    };

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        onSave?.(values);
        handleClose();
    };

    return (
        <Dialog.Root
            open={open}
            onOpenChange={(details) => {
                if (!details.open) handleClose();
            }}
        >
            <Portal>
                <Dialog.Backdrop bg="blackAlpha.500" />

                <Dialog.Positioner>
                    <Dialog.Content
                        maxW="805px"
                        borderRadius="8px"
                        px="24px"
                        py="22px"
                    >
                        <Dialog.Header p="0" mb="20px">
                            <HStack justify="space-between" w="100%">
                                <Dialog.Title
                                    color="#303235"
                                    fontSize="22px"
                                    fontWeight="500"
                                >
                                    Добавление данных документов
                                </Dialog.Title>

                                <Button
                                    aria-label="Закрыть"
                                    variant="ghost"
                                    size="sm"
                                    minW="32px"
                                    px="0"
                                    onClick={handleClose}
                                >
                                    <Icon as={FiX} boxSize="20px" />
                                </Button>
                            </HStack>
                        </Dialog.Header>

                        <Dialog.Body p="0">
                            <form onSubmit={handleSubmit}>
                                <VStack align="stretch" gap="24px">
                                    <Box>
                                        <Text
                                            mb="14px"
                                            color="#5b6283"
                                            fontSize="16px"
                                            fontWeight="500"
                                        >
                                            Основные данные
                                        </Text>

                                        <Grid
                                            templateColumns="176px 78px 82px 190px 95px"
                                            gap="16px"
                                        >
                                            <FormField
                                                label="Вид документа"
                                                required
                                            >
                                                <NativeSelect.Root>
                                                    <NativeSelect.Field
                                                    h="34px"
                                                    px="8px"
                                                    border="1px solid #dbe5f2"
                                                    borderRadius="4px"
                                                    color="#303235"
                                                    fontSize="14px"
                                                    value={values.documentType}
                                                    onChange={handleChange(
                                                        "documentType",
                                                    )}
                                                    >
                                                    <option value="Паспорт">
                                                        Паспорт
                                                    </option>
                                                    <option value="Паспорт гражданина РФ">
                                                        Паспорт гражданина РФ
                                                    </option>
                                                    </NativeSelect.Field>
                                                    <NativeSelect.Indicator />
                                                </NativeSelect.Root>
                                            </FormField>

                                            <FormField label="Серия" required>
                                                <Input
                                                    h="34px"
                                                    value={documentSeries}
                                                    onChange={handleSeriesAndNumberChange(
                                                        "series",
                                                    )}
                                                />
                                            </FormField>

                                            <FormField
                                                label="№ паспорта"
                                                required
                                            >
                                                <Input
                                                    h="34px"
                                                    value={documentNumber}
                                                    onChange={handleSeriesAndNumberChange(
                                                        "number",
                                                    )}
                                                />
                                            </FormField>

                                            <FormField
                                                label="Дата выдачи"
                                                required
                                            >
                                                <HStack position="relative">
                                                    <Input
                                                        h="34px"
                                                        value={values.issueDate}
                                                        onChange={handleChange(
                                                            "issueDate",
                                                        )}
                                                    />
                                                    <Icon
                                                        as={FiCalendar}
                                                        position="absolute"
                                                        right="10px"
                                                        color="#68708f"
                                                    />
                                                </HStack>
                                            </FormField>

                                            <FormField
                                                label="Код подразд."
                                                required
                                            >
                                                <Input
                                                    h="34px"
                                                    value={
                                                        values.departmentCode
                                                    }
                                                    onChange={handleChange(
                                                        "departmentCode",
                                                    )}
                                                />
                                            </FormField>
                                        </Grid>

                                        <Grid
                                            mt="16px"
                                            templateColumns="1fr 136px 136px"
                                            gap="16px"
                                        >
                                            <FormField
                                                label="Кем выдан"
                                                required
                                            >
                                                <Input
                                                    h="34px"
                                                    value={values.issuedBy}
                                                    onChange={handleChange(
                                                        "issuedBy",
                                                    )}
                                                />
                                            </FormField>

                                            <FormField label="СНИЛС" required>
                                                <Input
                                                    h="34px"
                                                    value={values.snils}
                                                    onChange={handleChange(
                                                        "snils",
                                                    )}
                                                />
                                            </FormField>

                                            <FormField label="ИНН" required>
                                                <Input
                                                    h="34px"
                                                    value={values.inn}
                                                    onChange={handleChange(
                                                        "inn",
                                                    )}
                                                />
                                            </FormField>
                                        </Grid>

                                        <Grid
                                            mt="16px"
                                            templateColumns="176px 176px"
                                            gap="16px"
                                        >
                                            <FormField label="Полис ДМС">
                                                <Input
                                                    h="34px"
                                                    value={values.dmsPolicy}
                                                    onChange={handleChange(
                                                        "dmsPolicy",
                                                    )}
                                                />
                                            </FormField>

                                            <FormField label="Полис ОМС">
                                                <Input
                                                    h="34px"
                                                    value={values.omsPolicy}
                                                    onChange={handleChange(
                                                        "omsPolicy",
                                                    )}
                                                />
                                            </FormField>
                                        </Grid>
                                    </Box>

                                    <Box h="1px" bg="#dbe5f2" />

                                    <Box>
                                        <Text
                                            mb="14px"
                                            color="#5b6283"
                                            fontSize="16px"
                                            fontWeight="500"
                                        >
                                            Дополнительные данные
                                        </Text>

                                        <Grid
                                            templateColumns="1fr 1fr"
                                            gap="16px"
                                        >
                                            <FormField label="Страховая компания">
                                                <Input
                                                    h="34px"
                                                    value={
                                                        values.insuranceCompany
                                                    }
                                                    onChange={handleChange(
                                                        "insuranceCompany",
                                                    )}
                                                />
                                            </FormField>

                                            <FormField label="Длительность страхования">
                                                <HStack position="relative">
                                                    <Input
                                                        h="34px"
                                                        value={
                                                            values.insuranceDuration
                                                        }
                                                        onChange={handleChange(
                                                            "insuranceDuration",
                                                        )}
                                                    />
                                                    <Icon
                                                        as={FiCalendar}
                                                        position="absolute"
                                                        right="10px"
                                                        color="#68708f"
                                                    />
                                                </HStack>
                                            </FormField>

                                            <FormField label="Адрес постоянной регистрации">
                                                <Textarea
                                                    minH="34px"
                                                    value={
                                                        values.registrationAddress
                                                    }
                                                    onChange={handleChange(
                                                        "registrationAddress",
                                                    )}
                                                />
                                            </FormField>

                                            <FormField label="Фактический адрес проживания">
                                                <Textarea
                                                    minH="34px"
                                                    value={
                                                        values.residentialAddress
                                                    }
                                                    onChange={handleChange(
                                                        "residentialAddress",
                                                    )}
                                                />
                                            </FormField>
                                        </Grid>
                                    </Box>

                                    <HStack gap="8px">
                                        <Button
                                            type="submit"
                                            h="34px"
                                            bg="#303235"
                                            color="white"
                                            borderRadius="4px"
                                        >
                                            Сохранить
                                        </Button>

                                        <Button
                                            type="button"
                                            h="34px"
                                            variant="outline"
                                            borderColor="#303235"
                                            onClick={handleCancel}
                                        >
                                            Отменить
                                        </Button>
                                    </HStack>
                                </VStack>
                            </form>
                        </Dialog.Body>
                    </Dialog.Content>
                </Dialog.Positioner>
            </Portal>
        </Dialog.Root>
    );
};

export default EmployeeDocumentsFormModal;
