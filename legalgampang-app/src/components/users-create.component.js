import React, { Component } from 'react';
import axios from 'axios';


export default class userCreate extends Component {



    constructor(props) {
        super(props);

        this.onChangeUserName = this.onChangeUserName.bind(this);
        this.onChangeUserPassword = this.onChangeUserPassword.bind(this);
        this.onChangeUserEmail = this.onChangeUserEmail.bind(this);
        this.onChangeUserNomorHp = this.onChangeUserNomorHp.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            user_name:'',
            user_pw: '',
            user_email: '',
            user_nomor_hp: ''       
        }
    }

    onChangeUserName(e) {
        this.setState({
            user_name: e.target.value
        });
    }

    onChangeUserPassword(e) {
        this.setState({
            user_pw: e.target.value
        });
    }

    onChangeUserEmail(e) {
        this.setState({
            user_email: e.target.value
        });
    }

    onChangeUserNomorHp(e) {
        this.setState({
            user_nomor_hp: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();

        console.log(`Sukses membuat user:`);
        console.log(`Username: ${this.state.user_name}`);
        console.log(`Password: ${this.state.user_pw}`);
        console.log(`Email: ${this.state.user_email}`);
        console.log(`Nomor HP: ${this.state.user_nomor_hp}`);

        const newUser = {
            user_name: this.state.user_name,
            user_pw: this.state.user_pw,
            user_email: this.state.user_email,
            user_nomor_hp: this.state.user_nomor_hp,
        };

        axios.post('http://localhost:4000/users', newUser)
            .then(res => console.log(res.data));

        this.setState({
            user_name: '',
            user_pw: '',
            user_email: '',
            user_nomor_hp: ''
        })
    }

    render() {
        return (
            <div style={{marginTop: 10}}>
                <h3>Create New User</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group"> 
                        <label>Name </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.user_name}
                                onChange={this.onChangeUserName}
                                />
                    </div>
                    <div className="form-group">
                        <label>Password </label>
                        <input 
                                type="password" 
                                className="form-control"
                                value={this.state.user_pw}
                                onChange={this.onChangeUserPassword}
                                />
                    </div>
                    <div className="form-group">
                        <label>Email </label>
                        <input 
                                type="email" 
                                className="form-control"
                                value={this.state.user_email}
                                onChange={this.onChangeUserEmail}
                                />
                    </div>
                    <div className="form-group">
                        <label>Nomor HP </label>
                        <input 
                                type="number" 
                                className="form-control"
                                value={this.state.user_nomor_hp}
                                onChange={this.onChangeUserNomorHp}
                                />
                    </div>
                    

                    <div className="form-group">
                        <input type="submit" value="Create User" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }

}