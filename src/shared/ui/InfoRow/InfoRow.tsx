import { Grid, Text } from "@chakra-ui/react";
import type { ReactNode } from "react";

type InfoRowProps = {
    label: string;
    value: ReactNode;
};

export function InfoRow({ label, value }: InfoRowProps) {
    return (
        <Grid gridTemplateColumns="120px 1fr" gap="12px" alignItems="start">
            <Text
                fontSize="12px"
                color="#5a607f"
                fontWeight={"500"}
                opacity={"0.6"}
                lineHeight="167%"
            >
                {label}
            </Text>

            <Text
                fontSize="12px"
                fontWeight={"500"}
                color="#5a607f"
                whiteSpace="pre-line"
                lineHeight="167%"
            >
                {value}
            </Text>
        </Grid>
    );
}
