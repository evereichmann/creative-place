import React from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { logoutSuccess } from '../actions/auth'

class AdminNav extends React.Component {
   
    handleLogout = () => {
        localStorage.removeItem('CreativePlace')
        this.props.logoutSuccess()
    }

    render() { 
        return (
            <div id="nav-bar">
            <Link to="/profile"><p>Hello Admin</p></Link> 
            <Link to="/" onClick={this.handleLogout}><p>Logout</p></Link>
            <Link to="/"><p>Main</p></Link>  
            <Link to="/library"><p>Library</p></Link>
            <Link to="/skilldrills"><p>Skill Drills</p></Link> 
            <Link to='challenges'><p>Challenges</p></Link>
            <Link to="approvesuggestions"><p>Approve Suggestion</p></Link>        
        </div>
          );
    }
}


const mapStateToProps = (state) => {
    return {
        auth: state.auth
    }
}

const mapDispatchToProps = {
    logoutSuccess
  }

export default connect(mapStateToProps, mapDispatchToProps) (AdminNav);