import { HStack, Image, Text } from "@chakra-ui/react";
import type { ReactNode } from "react";

export type BreadcrumbItem = {
    label: string;
    onClick?: () => void;
};

type BreadcrumbsProps = {
    items: BreadcrumbItem[];
    endSlot?: ReactNode;
};

export function Breadcrumbs({ items, endSlot }: BreadcrumbsProps) {
    return (
        <HStack justify="space-between" mb="18px">
            <HStack gap="10px">
                {items.map((item, index) => (
                    <HStack key={`${item.label}-${index}`} gap="10px">
                        {index > 0 && (
                            <Image
                                src="/assets/icons/breadcrumb-arrow.svg"
                                alt=""
                                w="11px"
                                h="9px"
                            />
                        )}
                        <Text
                            fontSize="14px"
                            color="#5b6283"
                            fontWeight="400"
                            _hover={{ color: "#3f4050" }}
                            cursor={item.onClick ? "pointer" : "default"}
                            onClick={item.onClick}
                        >
                            {item.label}
                        </Text>
                    </HStack>
                ))}
            </HStack>
            {endSlot}
        </HStack>
    );
}
