import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';

const Users = props => (
    <tr>    
        <td>{props.users.user_name}</td>
        <td>{props.users.user_pw}</td>
        <td>{props.users.user_email}</td>
        <td>{props.users.user_nomor_hp}</td>
        <td>
            <Link to={"/users/update/"+props.users.id}> Edit</Link>
            <a href="#" onClick={() => {props.deleteData(props.users.id)}} > Delete</a>
        </td>
    </tr>
)

export default class userList extends Component { 
    constructor(props) {
        super(props);
        this.state = {
            users: [] 
        };

        this.deleteData = this.deleteData.bind(this);
    }

    

    componentDidMount() {
        Axios.get('http://localhost:4000/users')
            .then(response => {
                this.setState({ users: response.data});
            })
            .catch(function (error){
                console.log(error);
            })

    }
    
    userList() {
        return this.state.users.map(function(currentUser, i) {
            return <Users users={currentUser} key={i} />;
        })
    }

    deleteData(id) {
        Axios.delete('http://localhost:4000/users/'+id)
        .then((res) => {
            console.log(res.data)
        })
        .catch((err) => {
            console.log(err);
        })
    }

    render() {
        return (
            <div>
                <h3>List User</h3>
                <table className="table table-striped" style={{ marginTop: 20 }}>
                    <thead>
                        <tr>
                            
                            <th>Username</th>
                            <th>Password</th>
                            <th>Email</th>
                            <th>Nomor HP</th>
                            <th>Action</th>
                        </tr>
                    </thead>

                    <tbody>
                        { this.userList() }
                    </tbody>
                </table>
            </div>
        )
    }
}