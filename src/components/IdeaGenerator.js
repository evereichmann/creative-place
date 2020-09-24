import React from 'react';
import '../style/Idea.css'
import { Container, Grid } from 'semantic-ui-react'
import { connect } from 'react-redux'
import LoginNav from './LoginNav'
import LogoutNav from './LogoutNav'
import { likeIdea } from '../actions/auth'
import {userIdeaUpdate} from '../actions/auth'
import { loginSuccess } from '../actions/auth'

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

     handleClick = () => {
        //set a varible of all of the images 
        //map through and find approved of true 
        //set selectedImage to only approved images
        this.setState({
          error: null,
          clicked: true, 
          selectedIdea: this.state.ideas[Math.floor(Math.random() * this.state.ideas.length)]
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
                        this.props.likeIdea({
                            ...data,
                            saying: this.state.selectedIdea.saying
                        })
                        this.props.userIdeaUpdate(data)
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

    clickArtbox = () => {
        if(this.props.auth.items.length === 0){
            this.setState({ error: "you need to add items to your artbox" });
        }else{
        const randArtSupply = this.props.auth.items[Math.floor(Math.random() * this.props.auth.items.length)]
        this.setState({ error: `${randArtSupply.name} | ${randArtSupply.description}`});
    }}

    handleExtrHelp = () => {
        const help = ["Monochromatic - Red", "Monochromatic - Blue", "Monochromatic - Green", "Monochromatic - Yellow", "Monochromatic - Purple", "Monochromatic - Orange", "Two Colors", "Three Colors", "Hash Shading", "Complementary Colors", "Black and White", "Values", "Realistic", "Cartoon", "Bright", "Dark"]
        const randomHelp = help[Math.floor(Math.random() * help.length)]
        this.setState({error: randomHelp})
    }

    render() { 
        return ( 
            <div id="main-container-idea">
                <Container>
                    <Grid>
                        <Grid.Row></Grid.Row>
                        <Grid.Row>
                <div id="nav-bar-idea">
                { this.props.auth ? <LoginNav /> : <LogoutNav />}
                </div>
                </Grid.Row>
                <Grid.Row>
                <div id="idea-body">
                    <h1 id="saying-area">{this.state.clicked && this.state.selectedIdea.saying}</h1>  
                    <button onClick={this.handleClick}>Generate</button>
                    <button onClick={this.handleSave}>Save</button>
                    <button onClick={this.handleExtrHelp}>Extra Help</button>
                { this.state.error ? <h2>{ this.state.error }</h2> : null }
                </div>
                </Grid.Row>
                </Grid>
                </Container>
                {this.props.auth? <img onClick={this.clickArtbox} height="75px" width="75px" src="https://i.ibb.co/cxQw7W0/Screen-Shot-2020-09-22-at-5-11-30-PM.png" alt=""/> : null}
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
    likeIdea,
    userIdeaUpdate,
    loginSuccess
}
  
export default connect(mapStateToProps, mapDispatchtoProps)(IdeaGenerator);