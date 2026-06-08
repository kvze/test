import { Box, HStack, Stack, Text, VStack } from "@chakra-ui/react";
import type { SidebarItem } from "../model/types";

type SidebarNavItemProps = {
    item: SidebarItem;
    level?: number;
};

export function SidebarNavItem({ item, level = 0 }: SidebarNavItemProps) {
    const hasChildren = Boolean(item.items?.length);

    return (
        <Box>
            <HStack
                as="button"
                w="100%"
                justify="space-between"
                py="4px"
                pl={level > 0 ? `${level * 20}px` : "0"}
                textAlign="left"
                cursor={item.isDisabled ? "default" : "pointer"}
                opacity={item.isDisabled ? 0.45 : 1}
                _hover={
                    item.isDisabled
                        ? {}
                        : {
                              color: "#1f2a44",
                          }
                }
            >
                <Stack gap="6px">
                    <Text
                        fontSize={"14px"}
                        fontWeight={"400"}
                        color={
                            item.isActive
                                ? "#4f5f7f"
                                : level === 0
                                  ? "#4f5f7f"
                                  : "#8b96ad"
                        }
                    >
                        {item.label}
                    </Text>

                    {item.hasDot && (
                        <Box w="6px" h="6px" borderRadius="50%" bg="#ff7a00" />
                    )}
                </Stack>
            </HStack>

            {hasChildren && (
                <VStack align="stretch" gap="2px" mt="4px">
                    {item.items?.map((child) => (
                        <SidebarNavItem
                            key={child.label}
                            item={child}
                            level={level + 1}
                        />
                    ))}
                </VStack>
            )}
        </Box>
    );
}
