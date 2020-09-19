import React from 'react';
import {connect } from 'react-redux'
import LoginNav from './LoginNav'

const UserProfile = (props) => {

    return ( 
        <div>
             <div id="nav-container">
                        <div id="nav-bar">
                            <LoginNav />
                        </div>
                    </div>
                    <div>
                         <h1>This is { props.auth.username} profile</h1>
                    </div>
        </div>
     );
}

const mapStateToProps = (state) => {
    return {
        auth: state.auth
    }
}

export default connect(mapStateToProps, null)(UserProfile);