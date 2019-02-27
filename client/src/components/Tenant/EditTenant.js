import React, { Component } from 'react';
import axios from 'axios';

class EditTenant extends Component {
    state = {
        tenant: this.props.singleTenant
    }

    handleChange = (event) => {
        const user = { ...this.state.tenant }
        user[event.target.name] = event.target.value
        this.setState({ tenant })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const payload = this.state.tenant
        const userId = this.props.userId
        axios.patch(`/api/users/${userId}`, payload)
            .then((res) => {
                this.props.getSingleUser()
                this.props.toggleEditUser()
            })
    }

    render() {
        return (
            <div>

            </div>
        );
    }
}

export default EditTenant;