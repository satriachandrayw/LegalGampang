import axios from 'axios';
import React, { Component } from 'react';

export default class UserUpdate extends Component {

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
    componentDidMount() {
        axios.get('http://localhost:4000/users/'+this.props.match.params.id)
            .then(response => {
                this.setState({
                    user_name: response.data.user_name,
                    user_pw: response.data.user_pw,
                    user_email: response.data.user_email,
                    user_nomor_hp: response.data.user_nomor_hp 
                })
            })
            .catch(function(error) {
                console.log(error);
            })    
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

        console.log(`Sukses update user:`);
        console.log(`Username: ${this.state.user_name}`);
        console.log(`Password: ${this.state.user_pw}`);
        console.log(`Email: ${this.state.user_email}`);
        console.log(`Nomor HP: ${this.state.user_nomor_hp}`);

        const updateUser = {
            user_name: this.state.user_name,
            user_pw: this.state.user_pw,
            user_email: this.state.user_email,
            user_nomor_hp: this.state.user_nomor_hp,
        };

        axios.put('http://localhost:4000/users/update/'+this.props.match.params.id, updateUser)
            .then(res => console.log(res.data));

        this.props.history.push('/users');
    }

    render() {
        return (
            <div style={{marginTop: 10}}>
            <h3> Update User</h3>
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