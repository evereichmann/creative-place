import React from 'react';
import { connect } from 'react-redux'
import LoginNav from './LoginNav'
import LogoutNav from './LogoutNav'
import { likeIdea } from '../actions/auth'

class IdeaGenerator extends React.Component {
    constructor(props){
        super(props)
        this.state = { 
            ideas: [],
            selectedIdea: null,
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
          selectedIdea: this.state.ideas[Math.floor(Math.random() * 
            this.state.ideas.length)]
        })
      }

      handleSave = () => {
        if(this.props.auth){
            if(this.state.selectedIdea !== null){
                const userIdea = {
                    user_id: this.props.auth.id,
                    idea_id: this.state.selectedIdea.id
                }
                const reqObj = {
                    method: "POST", 
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(userIdea)
                }
                fetch('http://localhost:3001/user_ideas', reqObj)
                    .then(resp => resp.json())
                    .then(data => {
                        this.props.likeIdea(data)
                        this.setState({ error: "saved successfully" })
                    })
            }else{
                this.setState({ error: "please generate idea" })
            }
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
                    <h1>{this.state.clicked && this.state.selectedIdea.saying}</h1>  
                    <button onClick={this.handleClick}>Generate</button>
                    <button onClick={this.handleSave}>Save</button>
                { this.state.error ? <h2>{ this.state.error }</h2> : null }
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

const mapDispatchtoProps = {
    likeIdea
}
  
export default connect(mapStateToProps, mapDispatchtoProps)(IdeaGenerator);