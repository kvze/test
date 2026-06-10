import ChevronDownIcon from "@/shared/ui/icons/ChevronDownIcon";
import { HStack, Portal, Select, createListCollection } from "@chakra-ui/react";

const clinics = createListCollection({
    items: [
        { label: "Здравпункт 1", value: "clinic-1" },
        { label: "Здравпункт 2", value: "clinic-2" },
        { label: "Здравпункт 3", value: "clinic-3" },
    ],
});

export function HeaderClinicSelect() {
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
                    _hover={{
                        bg: "#f8fafc",
                    }}
                >
                    <HStack w="100%" justify="space-between">
                        <Select.ValueText placeholder="Выберите клинику" />
                        <ChevronDownIcon />
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
