import { Box, Image } from "@chakra-ui/react";

type EmployeePhotoCardProps = {
    src: string;
    alt: string;
};

export function EmployeePhotoCard({ src, alt }: EmployeePhotoCardProps) {
    return (
        <Box
            position="relative"
            w="280px"
            h="280px"
            borderRadius="4px"
            overflow="hidden"
            flexShrink={0}
            bg="#eef2f7"
        >
            <Image src={src} alt={alt} w="100%" h="100%" objectFit="cover" />

            <Image
                src="/assets/icons/photo-edit.svg"
                alt=""
                position="absolute"
                top="6px"
                right="6px"
                w="24px"
                h="24px"
                borderRadius="4px"
                cursor="pointer"
                _hover={{ bg: "#6f6f6f" }}
            />
        </Box>
    );
}
