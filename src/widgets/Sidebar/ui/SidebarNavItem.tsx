import OrangeDotIcon from "@/shared/ui/icons/OrangeDotIcon";
import { Box, Flex } from "@chakra-ui/react";
import type { SidebarItem } from "../model/types";

type SidebarNavItemProps = {
    item: SidebarItem;
    level?: number;
};

export function SidebarNavItem({ item, level = 0 }: SidebarNavItemProps) {
    const hasChildren = Boolean(item.items?.length);

    return (
        <Box
            color={"#5b6283"}
            opacity={item.isDisabled ? 0.5 : 1}
            pl={level === 0 ? "0px" : "20px"}
            pb={hasChildren ? "0px" : "10px"}
        >
            <Flex gap={"5px"}>
                {item.label}
                {item.hasDot && <OrangeDotIcon />}
            </Flex>
            {hasChildren && (
                <Box pt={"10px"}>
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
