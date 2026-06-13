import LinkIcon from "@/shared/ui/icons/LinkIcon";
import { Flex, Text } from "@chakra-ui/react";
import HeaderBackButton from "./HeaderBackButton";
import { HeaderClinicSelect } from "./HeaderClinicSelect";
import HeaderUserInfo from "./HeaderUserInfo";

type HeaderProps = {
    title: string;
};

const Header = ({ title }: HeaderProps) => {
    return (
        <Flex
            as={"header"}
            bgColor={"white"}
            color={"#303235"}
            minH={"85px"}
            borderBottom={"1px solid #dbe5f2"}
            w="100%"
            align="center"
            justify="space-between"
            gap="24px"
            pl={"24px"}
            pt={"22px"}
            pb={"24px"}
            pr={"51px"}
        >
            <Flex gap={"31px"} minW={0}>
                <HeaderBackButton />
                <Flex gap={"16px"} align={"center"} minW={0}>
                    <Text fontSize={"24px"} fontWeight={"500"} lineClamp={2}>
                        {title}
                    </Text>
                    <LinkIcon />
                </Flex>
            </Flex>
            <Flex gap={"27px"} flexShrink={0}>
                <HeaderClinicSelect />
                <HeaderUserInfo />
            </Flex>
        </Flex>
    );
};

export default Header;
