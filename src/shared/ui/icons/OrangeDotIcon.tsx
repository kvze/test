import { Box } from "@chakra-ui/react";

const OrangeDotIcon = () => {
    return (
        <Box justifyContent={"center"} alignContent={"center"} pt={"3px"}>
            <svg
                width="10"
                height="10"
                viewBox="0 0 10 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <circle cx="5" cy="5" r="5" fill="#F57F29" />
            </svg>
        </Box>
    );
};

export default OrangeDotIcon;
