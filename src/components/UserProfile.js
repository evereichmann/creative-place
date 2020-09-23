import React from 'react';
import { Container, Grid, Icon, Modal, Button, Image, GridColumn } from 'semantic-ui-react'
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
    state = {
        modalOpen: false, 
        clickedImg: ''
    }
    
    componentDidMount() {
        if(!this.props.auth){
            this.props.history.push('/login')
        }
    }

    handleOpen = (e, image) => {this.setState({ 
        modalOpen: true,
        clickedImg: image,
    });}

    handleClose = () => this.setState({ modalOpen: false });

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
                <Grid>
                <Grid.Row columns={2}>
                    <Grid.Column>
                        <Avatar color={color} name={username} round={true}/>
                        <p></p>
                        <p></p>
                        <p>Location: </p>
                        <p>Name: { this.props.auth.first_name} { this.props.auth.last_name}</p>
                        <p>Birthday:</p>
                        <p>Interests:</p>
                    </Grid.Column>
                    <Grid.Column>
                    <p></p>
                    <p></p>
                        <Link to='profile/artbox'><img height="150px" width="200px" src="https://www.netclipart.com/pp/m/23-239279_28-collection-of-boxes-clipart-clip-art-box.png" alt=""/></Link>
                    </Grid.Column>
                </Grid.Row>
                </Grid>
                         { this.props.auth.ideas.map(idea => {
                             return (
                                <div>
                                    <h1>{idea.saying}</h1>
                                    <Icon name="x" size='large' onClick={()=>this.deleteIdea( this, idea )}></Icon>
                                </div>
                             )
                         })}

                          { this.props.auth.images.map(image => {
                             return (
                                 <div>
                                <img height="100" width="100" src={image.img_url} alt=''/>
                                <Icon name="x" size='large' onClick={()=>this.deleteImage( this, image)}></Icon>
                                <Icon name="expand arrows alternate" size='large' onClick={()=>this.handleOpen(this, image)}></Icon>
                                <Modal
                                    open={this.state.modalOpen}
                                    onClose={this.handleClose}
                                    >
                                        <Modal.Content image>
                                            <Image src={this.state.clickedImg.img_url} wrapped />
                                        </Modal.Content>
                                        <Modal.Actions>
                                            <Button onClick={this.handleClose} positive>
                                                    Ok
                                            </Button>
                                        </Modal.Actions>
                                        </Modal>
                                </div>
                                )
                         })}

                         { this.props.auth.palletes.map(pallete => {
                             return (
                             <div>
                                 <h1>{pallete.id}</h1><h3 style={{color: `rgb(${pallete.color_one_rgb_value})`,}}>{pallete.color_one_rgb_value}</h3>
                                 <h3 style={{color: `rgb(${pallete.color_two_rgb_value})`,}}>{pallete.color_two_rgb_value}</h3>
                                 <h3 style={{color: `rgb(${pallete.color_three_rgb_value})`,}}>{pallete.color_three_rgb_value}</h3>
                                 <Icon name="x" size='large' onClick={()=>this.deletePallete(this, pallete)}></Icon>
                                 </div>
                                 )
                         })}
            </div>
        )
    }

    render() { 
        return ( 
            <div>
            <Container> 
            <Grid>     
                 <Grid.Row></Grid.Row>
                 <Grid.Row></Grid.Row>
             <div id="nav-container-basic">
                 <Grid.Row>
                        <div id="nav-bar-basic">
                        { this.props.auth ? <LoginNav /> : <LogoutNav /> }
                        </div>
                        </Grid.Row>
                    </div>
                    <Grid.Row></Grid.Row>
                    <Container>
                    <div>
                        { this.props.auth ? < this.renderPage /> : null}  
                    </div>
                    </Container>
                </Grid> 
            </Container>         
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