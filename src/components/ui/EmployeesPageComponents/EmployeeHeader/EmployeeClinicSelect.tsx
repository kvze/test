import { HStack, Image, Portal, Select, createListCollection } from "@chakra-ui/react";

const clinics = createListCollection({
    items: [
        { label: "Здравпункт 1", value: "clinic-1" },
        { label: "Здравпункт 2", value: "clinic-2" },
        { label: "Здравпункт 3", value: "clinic-3" },
    ],
});

export function EmployeeClinicSelect() {
    return (
        <Select.Root collection={clinics} defaultValue={["clinic-1"]} w="200px">
            <Select.HiddenSelect />

            <Select.Control>
                <Select.Trigger
                    border="1px solid #b7c6db"
                    borderRadius="4px"
                    h="40px"
                    minH="40px"
                    w="200px"
                    minW="142px"
                    py="8px"
                    pl="16px"
                    pr="8px"
                    bg="white"
                    color="#5b6283"
                    fontSize="14px"
                    fontWeight="400"
                    cursor="pointer"
                    transition="background-color 0.2s ease, border-color 0.2s ease"
                    _hover={{
                        bg: "#f8fafc",
                        borderColor: "#94a8c2",
                    }}
                >
                    <HStack w="100%" justify="space-between">
                        <Select.ValueText placeholder="Выберите клинику" />
                        <Image
                            src="/assets/icons/chevron-down.svg"
                            alt=""
                            w="24px"
                            h="24px"
                        />
                    </HStack>
                </Select.Trigger>
            </Select.Control>

            <Portal>
                <Select.Positioner>
                    <Select.Content
                        bg="white"
                        border="1px solid #b7c6db"
                        borderRadius="4px"
                        color="#5b6283"
                        fontSize="14px"
                        overflow="hidden"
                    >
                        {clinics.items.map((clinic) => (
                            <Select.Item
                                item={clinic}
                                key={clinic.value}
                                px="16px"
                                py="8px"
                                cursor="pointer"
                                transition="background-color 0.2s ease"
                                _highlighted={{ bg: "#f8fafc" }}
                            >
                                <Select.ItemText>
                                    {clinic.label}
                                </Select.ItemText>
                            </Select.Item>
                        ))}
                    </Select.Content>
                </Select.Positioner>
            </Portal>
        </Select.Root>
    );
}
