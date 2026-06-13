import type { CurrentUser } from "@/entities/user/model/types";
import { createContext } from "react";

export type CurrentUserContextValue = {
    currentUser: CurrentUser;
};

export const CurrentUserContext = createContext<CurrentUserContextValue | null>(
    null,
);
