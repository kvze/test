import { mockEmployee } from "@/data/employee/employee.mock";
import { useState } from "react";
import { EmployeeHeader } from "./components/EmployeeHeader/EmployeeHeader";
import { EmployeeProfile } from "./components/EmployeeProfile/EmployeeProfile";

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
        </>
    );
};

export default EmployeePage;
