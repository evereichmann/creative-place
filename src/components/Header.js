import React from 'react';
import '../style/Main.css'
import { connect } from 'react-redux'
import LogoutNav from './LogoutNav'
import LoginNav from './LoginNav'

const Header = (props) => {
    return ( 
        <div>
            <div class="container">
                <img id="img" src="https://i.pinimg.com/originals/23/eb/fc/23ebfcc40b2fe012cbf8be46bc130245.png" alt="cloud" />
                    <div class="text-block">
                        <h1 id="sitename">Creative Place</h1>
                    </div>
                    <img id="background" src="https://i.ibb.co/0DHnd3n/Screen-Shot-2020-09-15-at-12-47-31-PM.png" alt=""/>
                    <div id="nav-container">
                        <div id="nav-bar-main">
                            { props.auth ? <LoginNav /> : <LogoutNav />}
                        </div>
                    </div>      
            </div>
        </div>
     );
}

const mapStateToProps = (state) => {
    return {
      auth: state.auth
    }
  }
 
export default connect ( mapStateToProps ,null) (Header);