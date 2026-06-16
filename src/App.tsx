import { MainLayout } from "@/layouts/MainLayout/MainLayout";
import EmployeePage from "@/pages/employees/EmployeePage";
import "@/styles/index.css";
import { ChakraProvider } from "./providers/ChakraProvider";

function App() {
    return (
        <ChakraProvider>
            <MainLayout>
                <EmployeePage />
            </MainLayout>
        </ChakraProvider>
    );
}

export default App;
