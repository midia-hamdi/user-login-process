import React, {useReducer, useContext} from "react";
import { initialState, reducer } from "./reducer";

const AuthStateContext = React.createContext()
const AuthDispatchContext = React.createContext()

export function useAuthState(){
    const context = useContext(AuthStateContext);

    if(!context){
        throw Error('useAuthState must be used with a authProvider')
    }

    return context;
}

export function useAuthDispatch(){
    const context = useContext(AuthDispatchContext);

    if(!context){
        throw Error('useAuthDispatch must be used with a authProvider')
    }

    return context;
}


export function AuthProvider({children}){
    const [state, dispatch] = useReducer(reducer, initialState);

    return(
        <AuthStateContext.Provider value={state}>
            <AuthDispatchContext.Provider value={dispatch}>
                {children}
            </AuthDispatchContext.Provider>
        </AuthStateContext.Provider>
    )
}