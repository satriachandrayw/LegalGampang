import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';

const Services = props => (
    <tr>    
        <td>{props.services.service_name}</td>
        <td>{props.services.service_description}</td>
        <td>{props.services.service_price}</td>
        <td>
            <Link to={"/services/update/"+props.services.id}> Edit</Link>
        </td>
    </tr>
)

export default class serviceList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            services: [] 
        };
    }

    componentDidMount() {
        Axios.get('http://localhost:4000/services')
            .then(response => {
                this.setState({ services: response.data});
            })
            .catch(function (error){
                console.log(error);
            })

    }
    
    serviceList() {
        return this.state.services.map(function(currentServices, i) {
            return <Services services={currentServices} key={i} />;
        })
    }

    render() {
        return (
            <div>
                <h3>List Service</h3>
                <table className="table table-striped" style={{ marginTop: 20 }}>
                    <thead>
                        <tr>
                            
                            <th>Nama</th>
                            <th>Deskrisi</th>
                            <th>Harga</th>
                            <th>Action</th>
                        </tr>
                    </thead>

                    <tbody>
                        { this.serviceList() }
                    </tbody>
                </table>
            </div>
        )
    }
}