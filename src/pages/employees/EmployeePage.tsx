import {
    medicalRecords,
    medicalRecordTabs,
} from "@/data/employee/medicalRecords/medicalRecords.mock";
import { mockEmployee } from "@/data/employee/personalData/employee.mock";
import { useState } from "react";
import { EmployeeHeader } from "./components/EmployeeHeader/EmployeeHeader";
import { EmployeeProfile } from "./components/EmployeeProfile/EmployeeProfile";
import EmployeeRecords from "./components/EmployeeRecords/EmployeeRecords";

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
