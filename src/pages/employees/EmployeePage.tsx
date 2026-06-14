import { EmployeeHeader } from "@/components/ui/EmployeesPageComponents/EmployeeHeader/EmployeeHeader";
import { EmployeeProfile } from "@/components/ui/EmployeesPageComponents/EmployeeProfile/EmployeeProfile";
import EmployeeRecords from "@/components/ui/EmployeesPageComponents/EmployeeRecords/EmployeeRecords";
import {
    medicalRecords,
    medicalRecordTabs,
} from "@/data/employee/medicalRecords/medicalRecords.mock";
import { mockEmployee } from "@/data/employee/personalData/employee.mock";
import { useState } from "react";

const EmployeePage = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <EmployeeHeader title={mockEmployee.fullName} />
            <EmployeeProfile
                employee={mockEmployee}
                onOpenDocumentDetails={() =>
                    setIsModalOpen(isModalOpen ? false : true)
                }
            />
            <EmployeeRecords
                records={medicalRecords}
                tabs={medicalRecordTabs}
            />
        </>
    );
};

export default EmployeePage;
