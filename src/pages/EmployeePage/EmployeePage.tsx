import { mockEmployee } from "@/entities/employee/model/mockEmployee";
import { EmployeeProfile } from "@/widgets/EmployeeProfile/ui/EmployeeProfile";
import { useState } from "react";

const EmployeePage = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    return (
        <>
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
