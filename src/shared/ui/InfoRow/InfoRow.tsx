import { Box, Grid, HStack, Text } from "@chakra-ui/react";
import type { ReactNode } from "react";

type InfoRowProps = {
    label: string;
    value: ReactNode;
    actions?: ReactNode;
};

export function InfoRow({ label, value, actions }: InfoRowProps) {
    return (
        <Grid
            className="info-row"
            gridTemplateColumns="120px 1fr"
            gap="12px"
            alignItems="start"
        >
            <Text
                className="info-row__label"
                fontSize="12px"
                color="#5a607f"
                fontWeight={"500"}
                opacity={"0.6"}
                lineHeight="167%"
            >
                {label}
            </Text>

            <HStack className="info-row__content" gap="6px" align="center" minW={0}>
                <Box
                    className="info-row__value"
                    fontSize="12px"
                    fontWeight={"500"}
                    color="#5a607f"
                    whiteSpace="pre-line"
                    lineHeight="167%"
                >
                    {value}
                </Box>

                {actions && (
                    <HStack gap="6px" flexShrink={0}>
                        {actions}
                    </HStack>
                )}
            </HStack>
        </Grid>
    );
}
