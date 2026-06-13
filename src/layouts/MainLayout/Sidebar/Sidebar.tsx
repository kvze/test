import { sidebarItems } from "@/data/sidebar/sidebar.mock";
import { Box, Flex, Image } from "@chakra-ui/react";
import { SidebarNavItem } from "./SidebarNavItem";
import SidebarSearch from "./SidebarSearch";

const Sidebar = () => {
    return (
        <Box
            as="aside"
            width="320px"
            flexShrink={0}
            minH="100vh"
            bg="white"
            borderRight="1px solid #dbe5f2"
            px="25px"
            py="30px"
        >
            <Flex justifyContent="space-between" mb="30px">
                <Image
                    src="/assets/logo/app-logo.svg"
                    alt="ЕВРАЗ"
                    w="197px"
                    h="30px"
                />
                <Image
                    src="/assets/icons/sidebar-collapse.svg"
                    alt=""
                    w="30px"
                    h="30px"
                    cursor="pointer"
                />
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
