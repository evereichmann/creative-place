import React from 'react';
import { connect } from 'react-redux'
import LoginNav from './LoginNav'
import LogoutNav from './LogoutNav'

const Library = (props) => {
    return ( 
        <div>
            <div id="navigation">
                { props.auth ? <LoginNav /> : <LogoutNav /> }
            </div>
            <p>bookshelf</p>
        </div>
     );
}
 
const mapStateToProps = (state) => {
    return {
        auth: state.auth
    }
}


export default connect(mapStateToProps, null)(Library);