import EmployeePage from "@/pages/EmployeePage/EmployeePage";
import Header from "@/widgets/Header/ui/Header";
import Sidebar from "@/widgets/Sidebar/ui/Sidebar";
import { Box, Flex } from "@chakra-ui/react";
import { CurrentUserProvider } from "./providers/CurrentUserProvider";
import "./styles/index.css";

function App() {
    return (
        <>
            <CurrentUserProvider>
                <Flex minH="100vh">
                    <Sidebar />
                    <Box flex="1" minW={0}>
                        <Header
                            title={
                                "Константинопольский Константин Константинович"
                            }
                        />
                        <EmployeePage />
                    </Box>
                </Flex>
            </CurrentUserProvider>
        </>
    );
}

export default App;
