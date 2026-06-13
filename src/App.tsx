import { mockEmployee } from "@/entities/employee/model/mockEmployee";
import { AppLayout } from "@/layouts/AppLayout/AppLayout";
import EmployeePage from "@/pages/EmployeePage/EmployeePage";
import { AppProviders } from "@/providers/AppProviders";
import "@/styles/index.css";

function App() {
    return (
        <AppProviders>
            <AppLayout title={mockEmployee.fullName}>
                <EmployeePage />
            </AppLayout>
        </AppProviders>
    );
}

export default App;
