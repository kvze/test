import Header from "@/widgets/Header/ui/Header";
import Sidebar from "@/widgets/Sidebar/ui/Sidebar";
import { Flex } from "@chakra-ui/react";

function App() {
    return (
        <>
            <Flex>
                <Sidebar />
                <Header
                    title={"Константинопольский Константин Константинович"}
                    clinicName={"Здравпункт 1"}
                    userName={"Иванов И. И."}
                />
            </Flex>
        </>
    );
}

export default App;
