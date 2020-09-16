import React from 'react';
import './App.css';

class App extends React.Component {
  state ={
    images: []
  }
  componentDidMount = () => {
    fetch("http://localhost:3000/images?_limit=10'")
    .then(resp => resp.json())
    .then(data => {
      this.setState({images: data})
    })
  }

  renderImage = () => {
  { return this.state.images.map(image => {
    return (<img height="200" width="200" src={image.img_url}/>)
  })}
  }

  render(){
  return (
    <div className="App">
        { this.renderImage() }
    </div>
  );
  }
}

export default App;
