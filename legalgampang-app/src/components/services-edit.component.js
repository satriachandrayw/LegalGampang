import axios from 'axios';
import React, { Component } from 'react';

export default class ServiceUpdate extends Component {

    constructor(props) {
        super(props);

        this.onChangeServiceName = this.onChangeServiceName.bind(this);
        this.onChangeServiceDescription = this.onChangeServiceDescription.bind(this);
        this.onChangeServicePrice = this.onChangeServicePrice.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            service_name:'',
            service_description: '',
            service_price: ''       
            }
    }
    componentDidMount() {
        axios.get('http://localhost:4000/services/'+this.props.match.params.id)
            .then(response => {
                this.setState({
                    service_name: response.data.service_name,
                    service_description: response.data.service_description,
                    service_price: response.data.service_price 
                })
            })
            .catch(function(error) {
                console.log(error);
            })    
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

        console.log(`Sukses update service:`);
        console.log(`Username: ${this.state.service_name}`);
        console.log(`Password: ${this.state.service_description}`);
        console.log(`Email: ${this.state.service_price}`);

        const updateService = {
            service_name: this.state.service_name,
            service_description: this.state.service_description,
            service_price: this.state.service_price,
        };

        axios.put('http://localhost:4000/services/update/'+this.props.match.params.id, updateService)
            .then(res => console.log(res.data));

        this.props.history.push('/services');
    }

    render() {
        return (
            <div style={{marginTop: 10}}>
            <h3> Update Service</h3>
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
                    <input type="submit" value="Update Service" className="btn btn-primary" />
                </div>
            </form>
        </div>
        )
    }

}