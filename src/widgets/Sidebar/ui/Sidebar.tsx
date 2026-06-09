import ArrowIcon from "@/shared/ui/icons/ArrowIcon";
import AppLogo from "@/shared/ui/logo/AppLogo";
import { Box, Flex } from "@chakra-ui/react";
import { sidebarItems } from "../model/sidebarItems";
import { SidebarNavItem } from "./SidebarNavItem";
import SidebarSearch from "./SidebarSearch";

const Sidebar = () => {
    return (
        <Box
            as="aside"
            width="320px"
            minH="100vh"
            bg="white"
            borderRight="1px solid #dbe5f2"
            px="25px"
            py="30px"
        >
            <Flex justifyContent="space-between" mb="30px">
                <AppLogo />
                <ArrowIcon />
            </Flex>
            <SidebarSearch />

            <Box>
                {sidebarItems.map((item) => (
                    <SidebarNavItem key={item.label} item={item} />
                ))}
            </Box>
        </Box>
    );
};

export default Sidebar;
