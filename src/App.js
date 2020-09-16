import React, {Fragment} from 'react';
import './App.css';
import { Switch, Route} from 'react-router-dom'
import Main from './components/Main';
import NoMatch from './components/NoMatch';
import Login from './components/Login'
import CreateAccount from './components/CreateAccount'
import ImageGenerator from './components/ImageGenerator'
import IdeaGenerator from './components/IdeaGenerator'
import ColorGenerator from './components/ColorGenerator'
import UserProfile from './components/UserProfile'
import Artbox from './components/Artbox'
import Header from './components/Header'

class App extends React.Component {
  // state ={
  //   images: []
  // }
  // componentDidMount = () => {
  //   fetch("http://localhost:3000/images")
  //   .then(resp => resp.json())
  //   .then(data => {
  //     this.setState({images: data})
  //   })
  // }

  // renderImage = () => {
  // { return this.state.images.map(image => {
  //   return (<img height="200" width="200" src={image.img_url}/>)
  // })}
  // }
  /* { this.renderImage() } */

  render(){
  return (
    <div className="App">
    <Switch>
        <Route exact path="/ideagenerator" component={IdeaGenerator}/>
        <Route exact path="/imagegenerator" component={ImageGenerator}/>
        <Route exact path="/colorgenerator" component={ColorGenerator}/>
        {/* this may change I think I just will render profile from redux state */}
        {/* <Route exact path="/user/:userId" component={}/> */}
        <Route exact path="/users/1" component={UserProfile}/>
        {/* <Route exact path="/user/:userId/artbox" component={}/> */}
        <Route exact path="/users/1/artbox" component={Artbox}/>
        <Fragment>
          <Header />
          <Route exact path='/' component={Main}/>
          <Route exact path='/login' component={Login}/>
          <Route exact path="/createaccount" component={CreateAccount}/>
          {/* <Route exact path='*' component={NoMatch}/>  */}
        </Fragment>  
      </Switch>
    </div>
  );
  }
}

export default App;
