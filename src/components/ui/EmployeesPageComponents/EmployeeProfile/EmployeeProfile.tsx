import type { Employee } from "@/data/employee/personalData/employee.types";
import { Breadcrumbs } from "@/shared/ui/Breadcrumbs/Breadcrumbs";
import { Box, Grid, GridItem, Image } from "@chakra-ui/react";
import { EmployeeCareerCard } from "./EmployeeCareerCard";
import { EmployeeDocumentsCard } from "./EmployeeDocumentsCard";
import { EmployeePersonalCard } from "./EmployeePersonalCard";
import { EmployeePhotoCard } from "./EmployeePhotoCard";

type EmployeeProfileProps = {
    employee: Employee;
    onOpenDocumentDetails: () => void;
};

export function EmployeeProfile({
    employee,
    onOpenDocumentDetails,
}: EmployeeProfileProps) {
    return (
        <Box
            bg="white"
            borderBottom="1px solid"
            borderColor="#dfe6f1"
            w="100%"
            px="24px"
            pt="22px"
            pb="24px"
        >
            <Breadcrumbs
                items={[
                    { label: "Работники" },
                    { label: "База работников" },
                    { label: employee.fullName },
                ]}
                endSlot={
                    <Box display="flex" gap="5px" alignItems="center">
                        <Box
                            fontSize="14px"
                            color="#5b6283"
                            fontWeight="400"
                            opacity="0.5"
                        >
                            №&nbsp; {employee.id}
                        </Box>
                        <Image
                            src="/assets/icons/copy.svg"
                            alt=""
                            w="10px"
                            h="13px"
                            cursor="pointer"
                            transition="opacity 0.2s ease"
                            _hover={{ opacity: 0.65 }}
                        />
                    </Box>
                }
            />

            <Grid
                templateColumns="280px minmax(280px, 1fr) minmax(290px, 1fr) minmax(320px, 1.35fr)"
                gap="15px"
                alignItems="stretch"
            >
                <GridItem>
                    <EmployeePhotoCard
                        src={employee.photo}
                        alt={employee.fullName}
                    />
                </GridItem>

                <GridItem>
                    <EmployeePersonalCard employee={employee} />
                </GridItem>

                <GridItem>
                    <EmployeeDocumentsCard
                        documents={employee.documents}
                        onOpenDetails={onOpenDocumentDetails}
                    />
                </GridItem>

                <GridItem>
                    <EmployeeCareerCard career={employee.career} />
                </GridItem>
            </Grid>
        </Box>
    );
}
