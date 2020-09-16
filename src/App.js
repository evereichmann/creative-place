import React from 'react';
import './App.css';
import { Switch, Route} from 'react-router-dom'

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
  {/* { this.renderImage() } */}

  render(){
  return (
    <div className="App">
      <Switch>
        <Route path="/" component={}/>
        <Route path="*" component={}/>
        <Route path="/login" component={}/>
        <Route path="/createaccount" component={}/>
        <Route path="/ideagenerator" component={}/>
        <Route path="/imagegenerator" component={}/>
        <Route path="/colorgenerator" component={}/>
        {/* this may change I think I just will render profile from redux state */}
        <Route path="/user/:userId" component={}/>
        <Route path="/user/:userId/artbox" component={}
      </Switch>
    </div>
  );
  }
}

export default App;
