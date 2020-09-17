import React from 'react';
import AdminNav from './AdminNav'


class IdeaGenerator extends React.Component {
    constructor(props){
        super(props)
        this.state = { 
            ideas: [],
            selectedNote: null,
            clicked: false
         }
    }

     componentDidMount() {
         fetch('http://localhost:3001/ideas')
            .then(resp => resp.json())
            .then(data => {
                this.setState({ ideas: data});
            })
     }

     handleClick = () => {
        this.setState({
          clicked: true, 
          selectedNote: this.state.ideas[Math.floor(Math.random() * 
            this.state.ideas.length)]
        })
      }

    render() { 
        return ( 
            <div id="main-container">
                <div id="header">
                    <img src="https://i.ibb.co/XZ25pnm/Screen-Shot-2020-09-16-at-4-58-18-PM.png"/>
                </div>
                <div id="navigation">
                    <AdminNav />
                </div>
                <div id="idea-body">
                    <button onClick={this.handleClick}>Generate</button>
                    <h1>{this.state.clicked && this.state.selectedNote.saying}</h1>  
                </div>
            </div>
         );
    }
}
  
export default IdeaGenerator;