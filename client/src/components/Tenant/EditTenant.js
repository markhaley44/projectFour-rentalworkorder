import React, { Component } from 'react';
import axios from 'axios';

class EditTenant extends Component {
    state = {
        tenant: this.props.singleTenant
    }

    handleChange = (event) => {
        const tenant = { ...this.state.tenant }
        tenant[event.target.name] = event.target.value
        this.setState({ tenant })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const payload = this.state.tenant
        const userId = this.props.userId
        axios.patch(`/api/v1/tenant/${userId}`, payload)
            .then((res) => {
                this.props.getSingleUser()
                this.props.toggleEditUser()
            })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <input type="text" placeholder="Tenant Name" name="name"
                            onChange={(event) => this.handleChange(event)} />
                    </div>
                    <div>
                        <input type="text" placeholder="Enter Unit Number" name="unit"
                            onChange={(event) => this.handleChange(event)} />
                    </div>
                    <div>
                        <input type="textarea" placeholder="Work Order Request" name="workOrder"
                            onChange={(event) => this.handleChange(event)} />
                    </div>
                    <button>Submit</button>

                </form>
            </div>
        );
    }
}

export default EditTenant;