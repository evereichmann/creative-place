import React from 'react';
import { connect } from 'react-redux'
import LoginNav from './LoginNav'
import LogoutNav from './LogoutNav'


class ApproveSuggestions extends React.Component {

    componentDidMount() {
        if(!this.props.auth){
            this.props.history.push('/')
        }else if(this.props.auth.admin === false){
            this.props.history.push('/')
        }
    }

    render() { 
        return ( 
            <div>
            <div id="navigation">
            { this.props.auth ? <LoginNav /> : <LogoutNav /> }
            </div>
            <p>approved this or that </p>
        </div>
         );
    }
}
 
const mapStateToProps = (state) => {
    return {
        auth: state.auth
    }
}

export default connect(mapStateToProps, null)(ApproveSuggestions);