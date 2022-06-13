import { createContext } from "react";
import AuthState from "../models/AuthState";


export default interface AuthContextProps {
    token: AuthState;
    SET_TOKEN: (token: string) => void;
    REMOVE_TOKEN: () => void;
    handleLogIn: () => void;
}

export const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);

