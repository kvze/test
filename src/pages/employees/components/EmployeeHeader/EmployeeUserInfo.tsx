import { mockCurrentUser } from "@/data/user/user.mock";
import { Flex, Image, Text } from "@chakra-ui/react";

const EmployeeUserInfo = () => {
    return (
        <Flex
            gap="11px"
            align="center"
            borderRadius="4px"
            cursor="pointer"
            transition="background-color 0.2s ease"
            _hover={{ bg: "#f8fafc" }}
        >
            <Image
                src="/assets/icons/user.svg"
                alt=""
                w="24px"
                h="24px"
            />
            <Text fontSize="16px" fontWeight="400" color="#5b6283">
                {mockCurrentUser.shortName}
            </Text>
        </Flex>
    );
};

export default EmployeeUserInfo;
