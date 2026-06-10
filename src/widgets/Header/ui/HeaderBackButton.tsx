import BackArrowIcon from "@/shared/ui/icons/BackArrowIcon";
import { Button } from "@chakra-ui/react";

const HeaderBackButton = () => {
    return (
        <Button
            w={"166px"}
            h={"40px"}
            bgColor={"#f0f0f0"}
            fontSize={"16px"}
            fontWeight={"400"}
            py={"8px"}
            px={"17px"}
            borderRadius={"4px"}
            _hover={{
                bg: "#eef2f7",
            }}
        >
            <BackArrowIcon />В работников
        </Button>
    );
};

export default HeaderBackButton;
