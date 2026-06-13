import type { Employee } from "@/entities/employee/model/types";
import { Box, Grid, GridItem } from "@chakra-ui/react";
import { EmployeeBreadcrumbs } from "./EmployeeBreadcrumbs";
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
            <EmployeeBreadcrumbs
                employeeName={employee.fullName}
                employeeId={employee.id}
            />

            <Grid
                templateColumns="280px minmax(280px, 1fr) minmax(290px, 1fr) minmax(320px, 1.35fr)"
                gap="16px"
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
