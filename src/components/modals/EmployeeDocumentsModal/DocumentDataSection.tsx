import { Box, Text } from "@chakra-ui/react";
import type { ReactNode } from "react";

type DocumentDataSectionProps = {
    title: string;
    subtitle?: string;
    children: ReactNode;
    minH?: string;
};

const DocumentDataSection = ({
    title,
    subtitle,
    children,
    minH,
}: DocumentDataSectionProps) => {
    return (
        <Box
            border="1px solid #dbe5f2"
            borderRadius="4px"
            px="20px"
            py="22px"
            minH={minH}
        >
            <Text
                mb="24px"
                color="#5b6283"
                fontSize="14px"
                fontWeight="500"
                textTransform="uppercase"
            >
                {title}
            </Text>

            {subtitle && (
                <Text
                    mb="20px"
                    color="#303235"
                    fontSize="11px"
                    fontWeight="600"
                    textTransform="uppercase"
                    letterSpacing="0"
                >
                    {subtitle}
                </Text>
            )}

            {children}
        </Box>
    );
};

export default DocumentDataSection;
