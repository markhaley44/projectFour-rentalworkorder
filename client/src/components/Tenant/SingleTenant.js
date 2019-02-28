import React, { Component } from 'react';
import axios from 'axios';
import EditUser from './EditUser';

class SingleTenant extends Component {
    state = {
        tenant: {
            name: '',
            unit: '',
            workOrder: ''
        }
    }

    componentDidMount() {
        this.getSingleTenant()
    }

    getSingleTenant = () => {
        const userId = this.props.match.params.userId
        axios.get(`api/v1/tenant/${userId}`)
            .then((res) => {
                this.setState({ tenant: res.data })
            })
    }
    deleteTenant = () => {
        const userId = this.props.match.params.userId
        axios.delete(`api/v1/tenant/${userId}`)
            .then(() => this.props.history.goback())
    }

    render() {
        return (
            <div>

            </div>
        );
    }
}

export default SingleTenant;