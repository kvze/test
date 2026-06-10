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
            maxH={"85px"}
            borderBottom={"1px solid #dbe5f2"}
            w={"calc(100% - 320px)"}
            align="center"
            justify="space-between"
            pl={"24px"}
            pt={"22px"}
            pb={"24px"}
            pr={"51px"}
        >
            <Flex gap={"31px"}>
                <HeaderBackButton />
                <Flex gap={"16px"} align={"center"}>
                    <Text fontSize={"24px"} fontWeight={"500"}>
                        {title}
                    </Text>
                    <LinkIcon />
                </Flex>
            </Flex>
            <Flex gap={"27px"}>
                <HeaderClinicSelect />
                <HeaderUserInfo />
            </Flex>
        </Flex>
    );
};

export default Header;
