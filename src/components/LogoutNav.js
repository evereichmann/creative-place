import React from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

const LogoutNav = () => {
    return ( 
        <div>
            {/* <Link to="/login"><p>Login</p></Link>
            <Link to="/createaccount"><p>Create Account</p></Link> */}
            <Link to="/"><p>Main</p></Link>  
            <Link to="/library"><p>Library</p></Link>
            <Link to="/skilldrills"><p>Skill Drills</p></Link>  
            {/* <Link to='challenges'><p>Challenges</p></Link> */}
        </div>
     );
}

const mapPropsToState = (state) => {
    return {
        auth: state.auth
    }
}
 
export default connect(mapPropsToState, null) (LogoutNav);