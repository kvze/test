import { Button, Image } from "@chakra-ui/react";

const EmployeeBackButton = () => {
    return (
        <Button
            w="166px"
            h="40px"
            bgColor="#f0f0f0"
            fontSize="16px"
            fontWeight="400"
            py="8px"
            px="17px"
            borderRadius="4px"
            color={"#303235"}
            cursor="pointer"
            _hover={{
                bg: "#eef2f7",
            }}
        >
            <Image
                src="/assets/icons/back-arrow.svg"
                alt=""
                w="15px"
                h="12px"
            />
            В работников
        </Button>
    );
};

export default EmployeeBackButton;
