import React from 'react';
import {connect } from 'react-redux'
import LoginNav from './LoginNav'


class UserProfile extends React.Component {
    state = {  }

    render() { 
        return ( 
            <div>
             <div id="nav-container">
                        <div id="nav-bar">
                            <LoginNav />
                        </div>
                    </div>
                    <div>
                         <h1>This is { this.props.auth.username} profile</h1>
                         { this.props.auth.ideas.map(idea => {
                             return <h1>{idea.saying}</h1>
                         })}
                          { this.props.auth.images.map(image => {
                             return <img height="100" width="100" src={image.img_url} alt=''/>
                         })}
                         { this.props.auth.palletes.map(pallete => {
                             return (<div><h1>{pallete.id}</h1><h3>{pallete.color_one_rgb_value}</h3><h3>{pallete.color_two_rgb_value}</h3><h3>{pallete.color_three_rgb_value}</h3></div>)
                         })}
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

export default connect(mapStateToProps, null)(UserProfile);