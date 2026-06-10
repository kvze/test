import Header from "@/widgets/Header/ui/Header";
import Sidebar from "@/widgets/Sidebar/ui/Sidebar";
import { Flex } from "@chakra-ui/react";
import { CurrentUserProvider } from "./providers/CurrentUserProvider";
import "./styles/index.css";

function App() {
    return (
        <>
            <CurrentUserProvider>
                <Flex>
                    <Sidebar />
                    <Header
                        title={"Константинопольский Константин Константинович"}
                    />
                </Flex>
            </CurrentUserProvider>
        </>
    );
}

export default App;
