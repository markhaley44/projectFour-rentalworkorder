import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';


class LandingPage extends Component {
    render() {
        return (
            <div style={{ width: '100%', margin: 'auto' }}>
                <Grid className='landing-grid'>
                    <Cell col={12}>
                        <img
                            src="https://www.400belmont.com/wp-content/uploads/2015/04/400-Belmont-Building-Eve-01.jpg"
                            alt="my stunt double"
                            className='my-image'
                        />

                    </Cell>
                </Grid>
            </div>
        );
    }
}

export default LandingPage;