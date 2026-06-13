import { CurrentUserContext } from "@/entities/user/model/CurrentUserContext";
import { mockCurrentUser } from "@/entities/user/model/mockCurrentUser";
import type { ReactNode } from "react";

export function CurrentUserProvider({ children }: { children: ReactNode }) {
    return (
        <CurrentUserContext.Provider value={{ currentUser: mockCurrentUser }}>
            {children}
        </CurrentUserContext.Provider>
    );
}
