import axios from "axios"
import React, {useState} from "react"
import ShowTodo from "./ShowTodo"

function CreateTodo(){

    const [title, setTitle] = useState()
    const [msg, setMsg] = useState("")
    const userId = localStorage.getItem("userId")

    const handleTitlt =  (e) => {
        const data = e.target.value
        setTitle(data)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post("http://localhost:3055/addtodo", {
            title: title,
            userId: userId
        })
        .then(res => {
            setMsg(res.data.msg)
            setTimeout(() => {
                setMsg("")
            }, 2000)
        })
    }

    return(
        <div>
            <h1>Create Todo</h1>
            {msg !== "" && <span>{msg}</span>}
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="title"
                    value={title}
                    onChange={handleTitlt}
                /><br /><br />
                <input type="submit" value="add" />
            </form>
            <div>
                <ShowTodo />
            </div>
        </div>
    )
}

export default CreateTodo