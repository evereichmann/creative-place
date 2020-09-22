import React from 'react';
import { Container, Grid, Image } from 'semantic-ui-react'
import LoginNav from './LoginNav'
import LogoutNav from './LogoutNav'

const Challenges = (props) => {
    return ( 
        <div>
            <Container>
            <div id="navigation">
                { props.auth ? <LoginNav /> : <LogoutNav /> }
            </div>
            <h1>challenges</h1>
            </Container>
        </div>
     );
}
 
export default Challenges;