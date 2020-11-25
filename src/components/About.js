import React from 'react';
import {connect} from 'react-redux'
import { Container } from 'semantic-ui-react'
import LoginNav from './LoginNav'
import LogoutNav from './LogoutNav'
import { loginSuccess } from '../actions/auth'

class About extends React.Component {
    componentDidMount() {
        const token = localStorage.getItem('CreativePlace')
        if(!token){
            return 
        }else {
            const reqObj = {
               method: 'GET',
               headers: {
                   'Authorization': `Bearer ${token}`
               } 
            }
            fetch('http://localhost:3001/api/v1/current_user', reqObj)
                .then(resp => resp.json())
                .then(data => {
                    this.props.loginSuccess(data)
                })
        }
    }

    render() { 
        return ( 
            <div>
            <Container>
            <br/>
            <div id="nav-bar-basic">
                    { this.props.auth ? <LoginNav /> : <LogoutNav /> }
            </div>
            <h1>About Us</h1>
            <p>Well look at you! You fond me! There are plenty of hidden easter eggs throughout this site and will be constantly changing. This site is here to inspire your inner child and make you want to create. We are here to help you start an adventure inside yourself.</p>


            </Container>
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
    loginSuccess
  }


export default connect (mapStateToProps, mapDispatchToProps)(About)