import type {
    MedicalRecord,
    MedicalRecordTab,
} from "@/data/employee/medicalRecords/medicalRecords.types";
import { Box, Button, HStack, Icon, Table, Text } from "@chakra-ui/react";
import { useState } from "react";
import { FiArrowRight, FiFilter } from "react-icons/fi";

type EmployeeRecordsProps = {
    tabs: MedicalRecordTab[];
    records: MedicalRecord[];
};

const EmployeeRecords = ({ tabs, records }: EmployeeRecordsProps) => {
    const [activeItem, setActiveItem] = useState(0);
    return (
        <Box pt={"34px"} pl={"24px"} pr={"51px"}>
            <HStack gap={"12px"} mb={"21px"} flexWrap={"wrap"}>
                {tabs.map((tab) => {
                    const isActive = tab.id === activeItem;
                    return (
                        <Button
                            key={tab.id}
                            h={"30px"}
                            py={"3px"}
                            px={"12px"}
                            bgColor={isActive ? "#303235" : "#f0f0f0"}
                            color={isActive ? "#fff" : "#303235"}
                            fontSize={"14px"}
                            fontWeight={"400"}
                            borderRadius={"4px"}
                            gap={"10px"}
                            _hover={
                                isActive ? { bg: "#242629" } : { bg: "#eef2f7" }
                            }
                            onClick={() => setActiveItem(tab.id)}
                        >
                            {tab.label}
                            <Text fontWeight={"600"}>{tab.count}</Text>
                        </Button>
                    );
                })}
            </HStack>
            <Button
                mb={"27px"}
                py={"8px"}
                px={"17px"}
                borderRadius={"4px"}
                bg={"#303235"}
                fontSize={"14px"}
                fontWeight={"400"}
                _hover={{ bg: "#242629" }}
            >
                <img src="/assets/icons/plus.svg" alt="" />
                Добавить обращение
            </Button>

            <Box overflowX={"auto"}>
                <Table.Root size="sm" minW="1500px">
                    <Table.Header>
                        <Table.Row>
                            {[
                                "№",
                                "Медкарта",
                                "Тип обращения",
                                "Сотрудник",
                                "Локация",
                                "Дата и время",
                                "Статус",
                                "Результат",
                                "Создал",
                                "",
                            ].map((title) => (
                                <Table.ColumnHeader
                                    key={title}
                                    h="40px"
                                    p="0"
                                    color="#5b6283"
                                    fontSize="14px"
                                    fontWeight="400"
                                    bg={"#f0f0f0"}
                                >
                                    <HStack
                                        w="full"
                                        h="full"
                                        gap="0px"
                                        display={"flex"}
                                        justifyContent={"space-between"}
                                        py={"8px"}
                                        px={"10px"}
                                    >
                                        <Text>{title}</Text>
                                        {title && (
                                            <Icon
                                                as={FiFilter}
                                                boxSize="12px"
                                                color="#5b6283"
                                                cursor={"pointer"}
                                            />
                                        )}
                                    </HStack>
                                </Table.ColumnHeader>
                            ))}
                        </Table.Row>
                    </Table.Header>

                    <Table.Body>
                        {records.map((record) => {
                            return (
                                <Table.Row
                                    key={record.id}
                                    fontSize={"12px"}
                                    fontWeight={"500"}
                                    color={"#717171"}
                                >
                                    <Table.Cell>{record.number}</Table.Cell>
                                    <Table.Cell>
                                        {record.medicalCard}
                                    </Table.Cell>
                                    <Table.Cell>{record.appealType}</Table.Cell>
                                    <Table.Cell>
                                        <Box
                                            as="span"
                                            bg="#eeeeee"
                                            px="6px"
                                            py="2px"
                                            borderRadius="3px"
                                        >
                                            {record.employee}
                                        </Box>
                                    </Table.Cell>
                                    <Table.Cell>{record.location}</Table.Cell>
                                    <Table.Cell>{record.dateTime}</Table.Cell>
                                    <Table.Cell>
                                        <Box
                                            as="span"
                                            px="6px"
                                            py="2px"
                                            borderRadius="4px"
                                            bg={
                                                record.status === "Завершено"
                                                    ? "#cae6ff"
                                                    : "#ddffca"
                                            }
                                            color={
                                                record.status === "Завершено"
                                                    ? "#274c6d"
                                                    : "#469518"
                                            }
                                        >
                                            {record.status}
                                        </Box>
                                    </Table.Cell>
                                    <Table.Cell>{record.result}</Table.Cell>
                                    <Table.Cell>{record.createdBy}</Table.Cell>
                                    <Table.Cell textAlign="right">
                                        <Icon
                                            as={FiArrowRight}
                                            color="#c7cbd5"
                                        />
                                    </Table.Cell>
                                </Table.Row>
                            );
                        })}
                    </Table.Body>
                </Table.Root>
            </Box>
        </Box>
    );
};

export default EmployeeRecords;
