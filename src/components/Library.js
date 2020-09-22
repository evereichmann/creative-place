import React from 'react';
import '../style/Library.css'
import { connect } from 'react-redux'
import { Container, Grid, Image } from 'semantic-ui-react'
import LoginNav from './LoginNav'
import LogoutNav from './LogoutNav'

const Library = (props) => {
    return ( 
        <div id="main-library">
            <Container>
            <Grid> 
            <Grid.Row></Grid.Row>   
            <Grid.Row>
            <div id="nav-bar-main">
                { props.auth ? <LoginNav /> : <LogoutNav /> }
            </div>
            </Grid.Row> 
            <p>bookshelf</p>
            </Grid>   
            </Container>
        </div>
     );
}
 
const mapStateToProps = (state) => {
    return {
        auth: state.auth
    }
}


export default connect(mapStateToProps, null)(Library);