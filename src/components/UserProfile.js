import React from 'react';
import {connect } from 'react-redux'
import LoginNav from './LoginNav'
import LogoutNav from './LogoutNav'
import Avatar from 'react-avatar';
import { deleteIdea } from '../actions/auth'
import { deleteUserIdea } from '../actions/auth'
import { deleteImage } from '../actions/auth'
import { deleteUserImage } from '../actions/auth'
import {deletePallete} from '../actions/auth'


class UserProfile extends React.Component {
    componentDidMount() {
        if(!this.props.auth){
            this.props.history.push('/login')
        }
    }

    deleteIdea = (e, idea) => {
        const regObj = {
            method: 'DELETE',
        }
        this.props.auth.user_ideas.map(i => {
            if(i.idea_id === idea.id){
                fetch(`http://localhost:3001/user_ideas/${i.id}`, regObj)
                this.props.deleteIdea(i.idea_id)
                this.props.deleteUserIdea(i.id)
            }else if(i.idea_id === idea.idea_id){
                fetch(`http://localhost:3001/user_ideas/${i.id}`, regObj)
                this.props.deleteIdea(idea.id) 
                this.props.deleteUserIdea(i.id)
            }
        })
    }

    deleteImage = (e, image) => {
        console.log('clicker', image)
        const regObj = {
            method: 'DELETE',
        }
        this.props.auth.user_image.map(i => {
            if(i.image_id === image.id){
                fetch(`http://localhost:3001/user_images/${i.id}`, regObj)
                this.props.deleteImage(i.image_id)
                this.props.deleteUserImage(i.id)
            }else if(i.image_id === image.image_id){
                fetch(`http://localhost:3001/user_images/${i.id}`, regObj)
                this.props.deleteImage(image.id)
                this.props.deleteUserImage(i.id)
            }
        })
    }

    deletePallete = (e, pallete) => {
        console.log('delete pallete', pallete.id)
        const regObj = {
            method: 'DELETE',
        }
        fetch(`http://localhost:3001/palletes/${pallete.id}`, regObj)
        this.props.deletePallete(pallete.id)
    }

    renderPage = () => {
        const colors = ['LightGreen', 'teal', 'LightBlue', 'olive', 'maroon', 'coral', 'DarkOrchid', 'DarkSeaGreen', 'GreenYellow', 'IndianRed', 'Tomato']
        const username = this.props.auth.first_name + ' ' + this.props.auth.last_name
        const color = colors[Math.floor(Math.random() * colors.length)]
        return (
            <div>
                <Avatar color={color} name={username} round={true}/>
                <h1>This is { this.props.auth.username} profile</h1>

                         { this.props.auth.ideas.map(idea => {
                             return (
                                <div>
                                    <h1>{idea.saying}</h1>
                                    <button onClick={()=>this.deleteIdea( this, idea )}>done</button>
                                </div>
                             )
                         })}

                          { this.props.auth.images.map(image => {
                             return (
                                 <div>
                                <img height="100" width="100" src={image.img_url} alt=''/>
                                <button onClick={()=>this.deleteImage( this, image)}>done</button>
                                </div>
                                )
                         })}

                         { this.props.auth.palletes.map(pallete => {
                             return (
                             <div>
                                 <h1>{pallete.id}</h1><h3 style={{color: `rgb(${pallete.color_one_rgb_value})`,}}>{pallete.color_one_rgb_value}</h3>
                                 <h3 style={{color: `rgb(${pallete.color_two_rgb_value})`,}}>{pallete.color_two_rgb_value}</h3>
                                 <h3 style={{color: `rgb(${pallete.color_three_rgb_value})`,}}>{pallete.color_three_rgb_value}</h3>
                                 <button onClick={()=>this.deletePallete(this, pallete)}>done</button>
                                 </div>
                                 )
                         })}
            </div>
        )
    }

    render() { 
        return ( 
            <div>
             <div id="nav-container">
                        <div id="nav-bar">
                        { this.props.auth ? <LoginNav /> : <LogoutNav /> }
                        </div>
                    </div>
                    <div>
                        { this.props.auth ? < this.renderPage /> : null}  
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

const mapDispatchToProps = {
    deleteIdea,
    deleteUserIdea,
    deleteImage,
    deleteUserImage,
    deletePallete
}

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);