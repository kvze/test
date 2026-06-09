import LinkIcon from "@/shared/ui/icons/LinkIcon";
import { Flex, Text } from "@chakra-ui/react";
import HeaderBackButton from "./HeaderBackButton";
import HeaderClinicSelect from "./HeaderClinicSelect";
import HeaderUserInfo from "./HeaderUserInfo";

type HeaderProps = {
    title: string;
    clinicName: string;
    userName: string;
};

const Header = ({ title, clinicName, userName }: HeaderProps) => {
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
            <HeaderBackButton />
            <Flex gap={"16px"} align={"center"}>
                <Text fontSize={"24px"} fontWeight={"500"}>
                    {title}
                </Text>
                <LinkIcon />
            </Flex>
            <HeaderClinicSelect clinicName={clinicName} />
            <HeaderUserInfo userName={userName} />
        </Flex>
    );
};

export default Header;
