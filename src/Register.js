import axios from "axios"
import React, {useState} from "react"

function Register(){

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [err, setErr] = useState("")

    const handleEmail = (e) => {
        setEmail(e.target.value)
    }

    const handlePassword = (e) => {
        setPassword(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if(email !== "" && password !== ""){
            axios.post("http://localhost:3055/register", {
            email: email,
            password: password
        })
        .then(res => {
            
        })
        }
        else{
            setErr("email and password is required")
        }
    }

    return (
        <div>
            <h1>Register User</h1>
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

export default Register