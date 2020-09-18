import React from 'react';
import { connect } from 'react-redux'
import LoginNav from './LoginNav'
import LogoutNav from './LogoutNav'

class IdeaGenerator extends React.Component {
    constructor(props){
        super(props)
        this.state = { 
            ideas: [],
            selectedNote: null,
            clicked: false,
            error: ''
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
          error: null,
          clicked: true, 
          selectedNote: this.state.ideas[Math.floor(Math.random() * 
            this.state.ideas.length)]
        })
      }

      handleSave = () => {
        if(this.props.auth){
            console.log("save")
            console.log(this.state)
        }else{
            this.setState({ error: "write this one down and create an account to save future ideas" });
            console.log('error')
        }
    }  

    render() { 
        return ( 
            <div id="main-container">
                <div id="header">
                    <img src="https://i.ibb.co/XZ25pnm/Screen-Shot-2020-09-16-at-4-58-18-PM.png"/>
                </div>
                <div id="navigation">
                { this.props.auth ? <LoginNav /> : <LogoutNav />}
                </div>
                <div id="idea-body">
                { this.state.error ? <h2>{ this.state.error }</h2> : null }
                    <h1>{this.state.clicked && this.state.selectedNote.saying}</h1>  
                    <button onClick={this.handleClick}>Generate</button>
                    <button onClick={this.handleSave}>Save</button>
                </div>
            </div>
         );
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.auth
    }
}
  
export default connect(mapStateToProps, null)(IdeaGenerator);