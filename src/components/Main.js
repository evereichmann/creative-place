import React from 'react';
import '../style/Main.css'
import {connect} from 'react-redux'
import { Link } from 'react-router-dom'
import { Container } from 'semantic-ui-react'
import { loginSuccess } from '../actions/auth'


class Main extends React.Component {
  state = {
    toAbout: false
  }
  
  componentDidMount() {
    let keys = []
    window.addEventListener('keyup', function(e){
      keys.push(e.key)
      if(keys[0] && keys[1] === "ArrowUp", keys[2] && keys[3] === "ArrowDown", keys[4] === "ArrowLeft", keys[5] === "ArrowRight", keys[6] === "ArrowLeft", keys[7] === "ArrowRight"){
      window.location.href = ('/about')
     }else if(keys[0] !== "ArrowUp"){
       keys = []
     }
      })
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
    
  renderAbout() {
    console.log("go to about")
  }

  render() { 
    return ( 
      <div id="main-body">
      <Container>
        <div id="main-content">
           <div id="main-subcontent">
                <Link to="/ideagenerator"><img id="rock" height="150" src="https://i.ibb.co/TBPc1tZ/Screen-Shot-2020-09-16-at-9-27-10-PM.png" alt=""/>
                <h1 id="rock-text">Idea Generator</h1></Link>
                <Link to="/imagegenerator"><img id="rock-two" height="250" src="https://i.ibb.co/zVG1nhy/Screen-Shot-2020-09-16-at-9-40-56-PM.png" alt=""/>
                <h1 id="rock-text-two">Image Generator</h1></Link>
                <Link to="/colorgenerator"><img id="rock-three" height="200" src="https://i.ibb.co/wsXFFH8/Multicolorrock.png" alt=""/>
                <h1 id="rock-text-three">Color Generator</h1></Link>
                <img id="dino" src="https://i.ibb.co/xXMjDBj/Screen-Shot-2020-09-16-at-9-45-40-PM.png" alt=""/>
            </div> 
        </div>
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

export default connect (mapStateToProps, mapDispatchToProps)(Main);
