import React, { Component } from 'react';
import axios from 'axios';


export default class serviceCreate extends Component {



    constructor(props) {
        super(props);

        this.onChangeServiceName = this.onChangeServiceName.bind(this);
        this.onChangeServiceDescription = this.onChangeServiceDescription.bind(this);
        this.onChangeServicePrice = this.onChangeServicePrice.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            service_name:'',
            service_description: '',
            service_price: '',       
        }
    }

    onChangeServiceName(e) {
        this.setState({
            service_name: e.target.value
        });
    }

    onChangeServiceDescription(e) {
        this.setState({
            service_description: e.target.value
        });
    }

    onChangeServicePrice(e) {
        this.setState({
            service_price: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();

        console.log(`Sukses membuat service:`);
        console.log(`Name: ${this.state.service_name}`);
        console.log(`Deskripsi: ${this.state.service_description}`);
        console.log(`Harga: ${this.state.service_price}`);

        const newService = {
            service_name: this.state.service_name,
            service_description: this.state.service_description,
            service_price: this.state.service_price,
            
        };

        axios.post('http://localhost:4000/services', newService)
            .then(res => console.log(res.data));

        this.setState({
            service_name: '',
            service_description: '',
            service_price: '',
        })
    }

    render() {
        return (
            <div style={{marginTop: 10}}>
                <h3>Create New Service</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group"> 
                        <label>Name </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.service_name}
                                onChange={this.onChangeServiceName}
                                />
                    </div>
                    <div className="form-group">
                        <label>Description </label>
                        <input 
                                type="text" 
                                className="form-control"
                                value={this.state.service_description}
                                onChange={this.onChangeServiceDescription}
                                />
                    </div>
                    <div className="form-group">
                        <label>Price </label>
                        <input 
                                type="number" 
                                className="form-control"
                                value={this.state.service_price}
                                onChange={this.onChangeServicePrice}
                                />
                    </div>

                    <div className="form-group">
                        <input type="submit" value="Create Service" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }

}