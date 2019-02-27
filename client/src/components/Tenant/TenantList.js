import React, { Component } from 'react';
import AddTenant from './AddTenant';
import axios from 'axios';
import { Link } from 'react-router-dom';

class TenantList extends Component {
    state = {
        tenant: [{}],
        AddTenantVisible: false
    }


    render() {
        return (
            <div>

            </div>
        );
    }
}

export default TenantList;