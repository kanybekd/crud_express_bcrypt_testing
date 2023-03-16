import React, { useEffect, useState } from 'react'
import { Table, Button } from 'reactstrap';
import axios from "axios"
import { BsFillTrashFill } from 'react-icons/bs';
import { RxRadiobutton } from 'react-icons/rx';


function Main({ students, setRegistered }) {
    const [deleted, setDeleted] = useState("")

    const handleClick = async (id) => {

        console.log(id)
        try {

            await axios.delete(`http://localhost:3001/remove/${id}`).then(res => console.log("success"))
            const filtered = students.filter(i => i._id === id)
            setDeleted(filtered[0].username)
            setRegistered()
        } catch (err) {
            console.log(err)
        }
    }
    const handleEdit = async (id) => {

        const inputs = {
            fullname: "newFullName",
            username: "newFullName",
            email: "newFullName",
        }
        try {

            await axios.put(`http://localhost:3001/update/${id}`, inputs).then(res => console.log("success"))
            // const filtered = students.filter(i => i._id === id)
            // setDeleted(filtered[0].username)
            setRegistered()
        } catch (err) {
            console.log(err)
        }
    }
    useEffect(() => {
        if (!deleted) {
            setTimeout(() => {
                setDeleted("")
            }, 4000)
        }
    }, [deleted])
    return (
        <div>
            {students.length ? <Table striped>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Full Name</th>
                        <th>Username</th>
                        <th>Email</th>
                        <th>Date Joined</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {students.map((student, ind) => {
                        return (
                            <tr>
                                <th scope="row">{ind + 1}</th>
                                <td>{student.fullname}</td>
                                <td>{student.username}</td>
                                <td>{student.email}</td>
                                <td>{student.date}</td>
                                <td onClick={() => handleEdit(student._id)}> <Button color="primary">Edit</Button> </td>
                                <td onClick={() => handleClick(student._id)}> <BsFillTrashFill /> </td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table> : <h3>No students registered so far</h3>}
            {deleted ? <h1>{deleted} has been kicked out</h1> : ""}
        </div>
    )
}

export default Main