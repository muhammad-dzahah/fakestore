import React from "react";
import axios from "axios";
import { Modal, Button, Card, Container, Form } from "react-bootstrap";
import { AiFillEdit } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import Navbar from "../component/Navbar";

export default class User extends React.Component {
    constructor() {
        super()
        this.state = {
            id_member: "",
            nama: "",
            alamat: "",
            jenis_kelamin: "",
            tlp: "",
            users: [],
            action: "",
            isModalOpen: false
        }
    }
    getUser = async () => {
        let url = "https://fakestoreapi.com/users"
        await axios
        .get(url)
        .then(response => { 
            this.setState({users: response.data})
            console.log(response.data)
        })
        .catch(error => {
            console.log(error);
        })
    }
    componentDidMount = () => {
        this.getUser()
    }
    
    render() {
        return (
            <div>
                <Navbar />
                <Container className="my-4">
                    <Card className="card shadow">
                        <Card.Body className="card-body">
                            <h2 className="text-black text-center my-4">
                                List of User
                            </h2>
                            <br />
                            {/* <div className="">
                                <Button className="btn btn-success shadow my-3 mx-3" onClick={() => this.handleAdd()}>
                                    Add Member
                                </Button>
                            </div> */}

                            <ul className="list-group mx-3">
                                {this.state.users.map(user =>(
                                <li className="list-group-item">
                                    <div className="row">
                                        <div className="col-lg-3 col-md-5 col-sm-4">
                                            <small className="text-secondary">Name :</small>
                                            <h6>{user.name.firstname} {user.name.lastname}</h6>
                                        </div>
                                        <div className="col-lg-3 col-md-5 col-sm-4">
                                            <small className="text-secondary">Username :</small>
                                            <h6>{user.username}</h6>
                                        </div>
                                        <div className="col-lg-3 col-md-5 col-sm-8">
                                            <small className="text-secondary">Address :</small> <br />
                                            <h6>{user.address.street}</h6>
                                        </div>
                                        <div className="col-lg-3 col-md-5 col-sm-8">
                                            <small className="text-secondary">City :</small> <br />
                                            <h6>{user.address.city}</h6>
                                        </div>
                                        <div className="col-lg-2 col-md-5 col-sm-8">
                                            <small className="text-secondary">Telephon :</small> <br />
                                            <h6>{user.phone}</h6>
                                        </div>
                                        {/* <div className="col-lg-2 col-md-3 col-sm-4">
                                            <button className="btn btn-sm btn-warning m-2" onClick={() => this.handleEdit(member)}>
                                                <AiFillEdit style={{color: "white"}}/>
                                            </button>
                                            <button className="btn btn-sm btn-danger m-2" onClick={() => this.handleDelete(member.id_member)}>
                                                <MdDelete style={{color: "white"}}/>
                                            </button>
                                        </div> */}
                                    </div>
                                </li>
                                ))}
                            
                            </ul>
                        </Card.Body>
                    </Card>
                </Container>
            </div>
        );
    }
}
