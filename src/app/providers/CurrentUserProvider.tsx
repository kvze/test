import { mockCurrentUser } from "@/entities/user/model/mockCurrentUser";
import type { ReactNode } from "react";
import { CurrentUserContext } from "../context/CurrentUserContext";

export function CurrentUserProvider({ children }: { children: ReactNode }) {
    return (
        <CurrentUserContext.Provider value={{ currentUser: mockCurrentUser }}>
            {children}
        </CurrentUserContext.Provider>
    );
}
