import React, { useEffect, useState } from 'react'
import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import axios from "axios"
function Register({ setRegistered }) {
    // const [fullname, setFullname] = useState("")
    // const [Username, setUsername] = useState("")
    // const [Email, setEmail] = useState("")
    // const [Password, setPassword] = useState("")

    const [newStudentData, setNewStudentData] = useState({ fullname: "", username: "", email: "", password: "" })
    const [submitted, setSubmitted] = useState(false)
    const handleSubmit = async (e) => {
        try {

            e.preventDefault()
            axios.post("http://localhost:3001/register", newStudentData).then(res => console.log("success"))
            setSubmitted(true)
            setRegistered()
            setNewStudentData({ fullname: "", username: "", email: "", password: "" })

        } catch (err) {
            console.log(err)
        }

    }
    const handleChange = (e) => {

        setNewStudentData({ ...newStudentData, [e.target.name]: e.target.value })

    }
    useEffect(() => {
        if (submitted) {

            setTimeout(() => {
                setSubmitted(false)
            }, 4000)
        }

    }, [submitted])

    return (
        <div className='container'>
            <div className="row">
                <div className="col-6">


                    {!submitted ? <Form>
                        <FormGroup row>
                            <Label for="text" sm={2}>Full name</Label>
                            <Col sm={10}>
                                <Input onChange={handleChange} type="text" name="fullname" id="text" placeholder="type your full name" value={newStudentData.fullname} />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="Username" sm={2}>Username</Label>
                            <Col sm={10}>
                                <Input onChange={handleChange} type="text" name="username" id="Username" placeholder="type your Username" value={newStudentData.Username} />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="exampleEmail" sm={2}>Email</Label>
                            <Col sm={10}>
                                <Input onChange={handleChange} type="email" name="email" id="exampleEmail" placeholder="with a placeholder" value={newStudentData.Email} />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="examplePassword" sm={2}>Password</Label>
                            <Col sm={10}>
                                <Input onChange={handleChange} type="password" name="password" id="examplePassword" placeholder="password placeholder" value={newStudentData.Password} />
                            </Col>
                        </FormGroup>

                        <FormGroup check row>
                            <Col sm={{ size: 10, offset: 2 }}>
                                <Button onClick={handleSubmit}>Submit</Button>
                            </Col>
                        </FormGroup>
                    </Form> : <h2>Your data has been successfully submitted</h2>}
                </div>
            </div>

        </div>
    )
}

export default Register