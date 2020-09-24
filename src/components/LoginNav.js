import React from 'react';
import { connect } from 'react-redux'
import AdminNav from './AdminNav'
import { Link } from 'react-router-dom'
import { logoutSuccess } from '../actions/auth'

class LoginNav extends React.Component {
  handleLogout = () => {
    localStorage.removeItem('CreativePlace')
    this.props.logoutSuccess()
}

  renderLoginNav = () => {
    return (
      <div>
            <Link to="/profile"><p>Hello User</p></Link> 
            <Link to="/" onClick={this.handleLogout}><p>Logout</p></Link>
            <Link to="/"><p>Main</p></Link>  
            <Link to="/library"><p>Library</p></Link>
            <Link to="/skilldrills"><p>Skill Drills</p></Link> 
            <Link to='challenges'><p>Challenges</p></Link> 
      </div>
    )
  }
  
  render() { 
    return ( 
        <div id="nav-bar">
            { this.props.auth.admin ? <AdminNav /> : < this.renderLoginNav /> }
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

export default connect (mapStateToProps , mapDispatchToProps) (LoginNav);