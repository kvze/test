import { useCurrentUser } from "@/app/hooks/useCurrentUser";
import UserIcon from "@/shared/ui/icons/UserIcon";
import { Flex, Text } from "@chakra-ui/react";

const HeaderUserInfo = () => {
    const { currentUser } = useCurrentUser();

    return (
        <Flex gap={"11px"} align={"center"}>
            <UserIcon />
            <Text fontSize="16px" fontWeight="400" color={"#5b6283"}>
                {currentUser.shortName}
            </Text>
        </Flex>
    );
};

export default HeaderUserInfo;
