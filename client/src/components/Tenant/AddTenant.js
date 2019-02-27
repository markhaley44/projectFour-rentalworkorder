import React, { Component } from 'react';
import axios from 'axios'

class AddTenant extends Component {
    state = {
        tenant: {
            name: '',
            unit: '',
            workOrder: ''
        }
    }

    handleChange = (event) => {
        const newState = { ...this.state.tenant }
        newState[event.target.name] = event.target.value
        this.setState({ tenant: newState })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const payload = this.state.tenant
        axios.post('/api/tenant', payload)
            .then((res) => {
                this.props.getAllTenant()
                this.props.toggleAddTenant()
            })
    }


    render() {
        return (
            <div>

            </div>
        );
    }
}

export default AddTenant;