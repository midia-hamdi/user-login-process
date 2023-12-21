import React from 'react'
import Login from './Pages/Login'
import { useAuthState } from './Context/auth-context'
import Dashbord from './Pages/Dashbord'

export default function App() {
    const { token } = useAuthState()
    return (
        <>
            {token ? <Dashbord /> : <Login />}
        </>
    )
}
