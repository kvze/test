import {
    EmployeeDocumentsFormModal,
    EmployeeDocumentsModal,
} from "@/components/modals/EmployeeDocumentsModal";
import { EmployeeHeader } from "@/components/ui/EmployeesPageComponents/EmployeeHeader/EmployeeHeader";
import { EmployeeProfile } from "@/components/ui/EmployeesPageComponents/EmployeeProfile/EmployeeProfile";
import EmployeeRecords from "@/components/ui/EmployeesPageComponents/EmployeeRecords/EmployeeRecords";
import {
    medicalRecords,
    medicalRecordTabs,
} from "@/data/employee/medicalRecords/medicalRecords.mock";
import { mockEmployee } from "@/data/employee/personalData/employee.mock";
import { useState } from "react";

type DocumentsModalMode = "details" | "form" | null;

const EmployeePage = () => {
    const [documentsModalMode, setDocumentsModalMode] =
        useState<DocumentsModalMode>(null);

    const openDocumentsForm = () => {
        setDocumentsModalMode("form");
    };

    return (
        <>
            <EmployeeHeader title={mockEmployee.fullName} />

            <EmployeeProfile
                employee={mockEmployee}
                onOpenDocumentDetails={() => setDocumentsModalMode("details")}
            />

            <EmployeeRecords
                records={medicalRecords}
                tabs={medicalRecordTabs}
            />

            <EmployeeDocumentsModal
                open={documentsModalMode === "details"}
                documents={mockEmployee.documents}
                registrationAddress={mockEmployee.registrationAddress}
                residentialAddress={mockEmployee.registrationAddress}
                onClose={() => setDocumentsModalMode(null)}
                onAdd={openDocumentsForm}
                onEdit={openDocumentsForm}
            />

            <EmployeeDocumentsFormModal
                open={documentsModalMode === "form"}
                documents={mockEmployee.documents}
                registrationAddress={mockEmployee.registrationAddress}
                residentialAddress={mockEmployee.registrationAddress}
                onClose={() => setDocumentsModalMode(null)}
                onCancel={() => setDocumentsModalMode("details")}
            />
        </>
    );
};

export default EmployeePage;
