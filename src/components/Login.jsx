import { useState } from "react"
import { signInWithEmailAndPassword, signOut } from "firebase/auth"
import { useAuthState } from "react-firebase-hooks/auth"
import { auth } from "../firebase"


const Login = () => {
    const [loginEmail, setLoginEmail] = useState("")
    const [loginPassword, setLoginPassword] = useState("")
    const [user] = useAuthState(auth);


    const login = async () => {

        try {
            const user = await signInWithEmailAndPassword(
                auth,
                loginEmail,
                loginPassword
            );
            console.log(user)
        } catch (err) {
            console.log(err.message)
        }
    }

    const logout = async () => await signOut(auth)


    return (
        <div className="flex items-center justify-center space-x-10">
            <input type="text"
                onChange={(e) => { setLoginEmail(e.target.value) }}
                placeholder="Email" />
            <input type="password"
                onChange={(e) => { setLoginPassword(e.target.value) }}
                placeholder="Password" />

            {user
                ? <div>
                    <button onClick={logout}>Sign Out</button>
                    <h1>Logged in user: {user?.email}</h1>
                </div>
                : <button className="bg-green-500 text-white p-2" onClick={login}>Login</button>
            }
        </div>
    )
}

export default Login