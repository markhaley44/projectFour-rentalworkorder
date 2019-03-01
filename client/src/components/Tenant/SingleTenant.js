import React, { Component } from 'react';
import axios from 'axios';
import EditTenant from './EditTenant';

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
        axios.get(`http://localhost:8000/api/v1/Tenant/${userId}`)
            .then((res) => {
                this.setState({ tenant: res.data })
            })
    }
    deleteTenant = () => {
        const userId = this.props.match.params.userId
        axios.delete(`http://localhost:8000/api/v1/Tenant/${userId}`)
            .then(() => this.props.history.goback())
    }

    toggleEditTenant = () => {
        this.setState({ editFormVisible: !this.state.editFormVisible })
    }

    render() {
        return (
            <div>

            </div>
        );
    }
}

export default SingleTenant;