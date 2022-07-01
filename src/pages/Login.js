import React from 'react';
import {Card, Form, Button, Container, Nav} from 'react-bootstrap'
import { Link } from "react-router-dom";
import axios from 'axios';


export default class Login extends React.Component {
    constructor(){
        super()
        this.state = {
            username: "mor_2314",
            password: "83r5^_",
            massage: "",
            logged: true
        }
    }
    
    Login = event => {
        event.preventDefault()
        let sendData = {
            username: this.state.username,
            password: this.state.password
        }

        let url = "https://fakestoreapi.com/auth/login"

        axios.post(url, sendData)
        .then(response => {
            this.setState({logged: response.data.logged})
            if (this.state.logged){
                let user = response.data
                let token = response.data.token
                localStorage.setItem("token", token)
                this.props.history.push("/")
            }else{
                this.setState({message: "username or password incorrect"})
            }
        })
        .catch(error => console.log(error))
    }
    
    render() {
        return (
            <Container className="container d-flex justify-content-center align-items-center">
                <Card className="card shadow my-5 col-lg-5 col-md-8 col-sm-11" >
                         <Card.Body className='mt-5 mb-3 px-5'>
                            <h2 className='text-center '>FakeStore</h2>
                            <br />
                            <br />

                            { !this.state.logged ? (
                                <div className="alert alert-danger mt-1 text-center">
                                    { this.state.message }
                                </div>
                            ) : null }
                                
                            <Form onSubmit={ev => this.Login(ev)}>
                                <Card.Text>
                                    <Form.Group className="mb-3" controlId="username">
                                        <Form.Label>Username</Form.Label>
                                        <Form.Control type="text" placeholder="enter username" value={this.state.username}
                                        onChange={ev => this.setState({username: ev.target.value})}/>
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="password">
                                        <Form.Label> Password </Form.Label>
                                        <Form.Control type="password" placeholder="enter password" value={this.state.password}
                                        onChange={ev => this.setState({password: ev.target.value})}
                                        autoComplete="false" />
                                    </Form.Group>
                                </Card.Text>
                                <div className="d-grid gap-2">
                                    <Button variant="primary" type="submit">Submit</Button>
                                </div>
                            </Form>
                    </Card.Body>
                </Card>
            </Container>
        )
    }
}