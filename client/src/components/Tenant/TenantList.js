import React, { Component } from 'react';
import AddTenant from './AddTenant';
import axios from 'axios';
import { Link } from 'react-router-dom';

class TenantList extends Component {
    state = {
        tenant: [{}],
        AddTenantVisible: false
    }
    componentDidMount = () => {
        this.getAllTenant();
    }
    getAllTenant = () => {
        axios.get(`/api/users`)
            .then((res) => {
                this.setState({ tenant: res.data })
            })
    }
    toggleAddTenant = () => {
        this.setState({ addTenantVisible: !this.state.addTenantVisible })
    }

    render() {
        return (
            <div>

            </div>
        );
    }
}

export default TenantList;