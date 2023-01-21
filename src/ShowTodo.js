import axios from "axios"
import React, { useState, useEffect } from "react"

function ShowTodo(){
    const [data, setData] = useState([])
    const userId = localStorage.getItem("userId")

    useEffect(() => {
        axios.get(`http://localhost:3055/gettodo/${userId}`)
        .then(res => {
            setData(res.data)
        })
    }, [data])
    
    function handleEdit(id){

        let arr = data.filter(ele => {
            return ele._id === id
        })
        console.log("dat edit", arr)

        axios.put(`http://localhost:3055/edittodo/${id}`, {
            title: arr.title,
            userId: arr.userId
        })
        .then(res => {

        })
        
    }

    function handleDelete(id){

        let arr = data.filter(ele => {
            return ele._id === id
        })
        // console.log("dat edit", arr)

        axios.delete(`http://localhost:3055/deletetodo/${id}`, {
            title: arr.title,
            userId: arr.userId
        })
        .then(res => {

        })
        
    }

    return(
       <div>
         <h1>Todo List</h1>
        {
            data.map(ele => {
                return <h3 key={ele._id}>{ele.title}  
                <button onClick={() => {
                    handleEdit(ele._id)
                }}>edit</button>
                <button onClick={() => {
                    handleDelete(ele._id)
                }}>delete</button>
                </h3>
            })
        }
       </div>
    )
}

export default ShowTodo