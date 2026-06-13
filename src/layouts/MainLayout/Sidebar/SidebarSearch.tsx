import { Box, Field, Image, Input } from "@chakra-ui/react";

const SidebarSearch = () => {
    return (
        <Field.Root mb="30px">
            <Box position="relative" w="100%">
                <Box
                    position="absolute"
                    left="10px"
                    top="50%"
                    transform="translateY(-50%)"
                >
                    <Image
                        src="/assets/icons/search.svg"
                        alt=""
                        w="17px"
                        h="17px"
                    />
                </Box>
                <Input
                    py="8px"
                    pl="47px"
                    pr="10px"
                    border="1px solid #d9e1ec"
                    borderRadius="4px"
                    placeholder="ФИО, табельный №"
                    _placeholder={{
                        color: "#a1a7c4",
                    }}
                    color="black"
                    fontWeight="400"
                    fontSize="16px"
                />
            </Box>
        </Field.Root>
    );
};

export default SidebarSearch;
