import { AuthContext } from "./AuthContext"  
import AuthState from '../models/AuthState';
import {initialState} from './reducer';
import { useContext, useEffect, useReducer } from "react";

interface AuthProviderProps {
    children: JSX.Element | JSX.Element[];
    initialState: AuthState;
    reducer: React.Reducer<AuthState, any>;
}

export const AuthProvider = ({ children, initialState, reducer }:AuthProviderProps) => {
    const [token, dispatch] = useReducer( reducer, initialState );

    const SET_TOKEN = (token:string) => {
        dispatch({
            type: 'SET_TOKEN',
            token: token
        });
    };
    const REMOVE_TOKEN = () => {
        dispatch({
            type: 'REMOVE_TOKEN',
            token: null
        });
    };
    const handleLogIn = () => {
        const clientId = 'b08d31c6563e4cfdbb843972346fe647';
        const redirectUrl = 'https://jimenez-jeronimo-git-main-jerojimenez17.vercel.app/';
        const apiUrl = 'https://accounts.spotify.com/authorize';
        const scopes = [
          'user-read-email',
          'user-read-private',
          'user-modify-playback-state',
          'user-read-playback-state',
          'user-read-currently-playing',
          'user-read-recently-played',
          'user-read-playback-position',
          'user-top-read',
          'user-library-modify',
        ];
        window.location.href = `${apiUrl}?client_id=${clientId}&redirect_uri=${redirectUrl}&scope=${scopes.join(
          " "
        )}&response_type=token&show_dialog=true`;
      }
    

    return (

    <AuthContext.Provider value={{token:token, SET_TOKEN:SET_TOKEN, REMOVE_TOKEN:REMOVE_TOKEN, handleLogIn:handleLogIn}}>
        {children}
    </AuthContext.Provider>
    );
}

export const useAuthProvider = () => useContext(AuthContext);