import React from 'react';
import { connect } from 'react-redux'
import LoginNav from './LoginNav'
import LogoutNav from './LogoutNav'

const SkillDrills = (props) => {
    return ( 
        <div>
            <div id="navigation">
                { props.auth ? <LoginNav /> : <LogoutNav /> }
            </div>
            <p>improve the skills</p>
        </div>
     );
}
 
const mapStateToProps = (state) => {
    return {
        auth: state.auth
    }
}


export default connect(mapStateToProps, null)(SkillDrills);