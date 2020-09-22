import React from 'react';
import {connect } from 'react-redux'
import {Link} from 'react-router-dom'
import Avatar from 'react-avatar';
import LoginNav from './LoginNav'
import LogoutNav from './LogoutNav'
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
                    <div>
                        <Link to='profile/artbox'><img src="data:image/jpeg;base64,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" alt=""/></Link>
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