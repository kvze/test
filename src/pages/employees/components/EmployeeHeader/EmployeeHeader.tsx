import { Flex, Image, Text } from "@chakra-ui/react";
import EmployeeBackButton from "./EmployeeBackButton";
import { EmployeeClinicSelect } from "./EmployeeClinicSelect";
import EmployeeUserInfo from "./EmployeeUserInfo";

type EmployeeHeaderProps = {
    title: string;
};

export function EmployeeHeader({ title }: EmployeeHeaderProps) {
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
                <EmployeeBackButton />
                <Flex gap={"16px"} align={"center"} minW={0}>
                    <Text fontSize={"24px"} fontWeight={"500"} lineClamp={2}>
                        {title}
                    </Text>
                    <Image
                        src="/assets/icons/link.svg"
                        alt=""
                        w="19px"
                        h="19px"
                        cursor="pointer"
                        transition="opacity 0.2s ease"
                        _hover={{ opacity: 0.8 }}
                    />
                </Flex>
            </Flex>
            <Flex gap={"27px"} flexShrink={0}>
                <EmployeeClinicSelect />
                <EmployeeUserInfo />
            </Flex>
        </Flex>
    );
}
