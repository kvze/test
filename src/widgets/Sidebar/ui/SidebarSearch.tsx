import { SearchIcon } from "@/shared/ui/icons/SearchIcon";
import { Box, Field, Input } from "@chakra-ui/react";

const SidebarSearch = () => {
    return (
        <>
            <Field.Root mb="30px">
                <Box position="relative" w="100%">
                    <Box
                        position="absolute"
                        left="10px"
                        top="50%"
                        transform="translateY(-50%)"
                    >
                        <SearchIcon />
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
                        font-weight="400"
                        font-size="16px"
                    />
                </Box>
            </Field.Root>
        </>
    );
};

export default SidebarSearch;
