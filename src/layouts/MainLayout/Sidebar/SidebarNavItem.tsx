import type { SidebarItem } from "@/data/sidebar/sidebar.types";
import { Box, Flex } from "@chakra-ui/react";

type SidebarNavItemProps = {
    item: SidebarItem;
    level?: number;
};

export function SidebarNavItem({ item, level = 0 }: SidebarNavItemProps) {
    const hasChildren = Boolean(item.items?.length);
    const isInteractive = !item.isDisabled;

    return (
        <Box
            color="#5b6283"
            opacity={item.isDisabled ? 0.5 : 1}
            pl={level === 0 ? "0px" : "20px"}
            pb={hasChildren ? "0px" : "10px"}
        >
            <Flex
                gap="5px"
                align="center"
                px="4px"
                mx="-4px"
                borderRadius="4px"
                cursor={isInteractive ? "pointer" : "default"}
                transition="background-color 0.2s ease, color 0.2s ease"
                _hover={
                    isInteractive
                        ? {
                              bg: "#f8fafc",
                              color: "#303235",
                          }
                        : undefined
                }
            >
                {item.label}
                {item.hasDot && (
                    <Box
                        w="10px"
                        h="10px"
                        borderRadius="50%"
                        bg="#F57F29"
                        alignSelf="center"
                    />
                )}
            </Flex>
            {hasChildren && (
                <Box pt="10px">
                    {item.items?.map((child) => (
                        <SidebarNavItem
                            key={child.label}
                            item={child}
                            level={level + 1}
                        />
                    ))}
                </Box>
            )}
        </Box>
    );
}
