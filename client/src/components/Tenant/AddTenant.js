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
        const payload = this.state.tenant;
        axios.post('/api/v1/tenant/', payload)
            .then((res) => {
                this.props.getAllTenant()
                this.props.toggleAddTenant()
            })
    }


    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <input type="text" placeholder="Tenant Name" name="name" value={this.state.tenant.name}
                            onChange={this.handleChange} />
                    </div>
                    <div>
                        <input type="text" placeholder="Enter Unit Number" name="unit" value={this.state.tenant.unit}
                            onChange={this.handleChange} />
                    </div>
                    <div>
                        <input type="textarea" placeholder="Work Order Request" name="workOrder" value={this.state.tenant.workOrder}
                            onChange={this.handleChange} />
                    </div>
                    <button>Submit</button>

                </form>
            </div>
        );
    }
}

export default AddTenant;