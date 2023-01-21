import axios from "axios"
import React, {useEffect, useState} from "react"


function Login(){

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const [validUser, setValidUser] = useState({})
    const [err, setErr] = useState("")

    const handleEmail = (e) => {
        setEmail(e.target.value)
    }

    const handlePassword = (e) => {
        setPassword(e.target.value)
    }

    useEffect(() => {
        localStorage.setItem("token", validUser.token)
        localStorage.setItem("userId", validUser.id)
    }, [validUser])

    const handleSubmit = (e) => {
        e.preventDefault()
        if(email !== "" && password !== ""){
            axios.post("http://localhost:3055/login", {
            email: email,
            password: password
        })
        .then(res => {
            setValidUser(res.data)
            window.location.href = ("http://localhost:3000/createtodo")
        })
        }
        else{
            setErr("email and password is required")
        }
    }

    console.log("valid user", validUser)

    return (
        <div>
            <h1>Login User</h1>
            <form onSubmit={handleSubmit} >
                <label>Email</label>
                <input
                    type="text"
                    name = "email"
                    value={email}
                    onChange={handleEmail}
                /><br /><br />

                <label>Password</label>
                <input
                    type="password"
                    name = "password"
                    value={password}
                    onChange={handlePassword}
                />
                <br /><br />
                {
                    err !== "" && <span>{err}</span>
                }
                <input type="submit" />
            </form>
        </div>
    )
}

export default Login