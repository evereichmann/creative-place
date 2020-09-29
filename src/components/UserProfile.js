import React from 'react';
import { Container, Grid, Icon, Modal, Button, Image } from 'semantic-ui-react'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'
import Avatar from 'react-avatar';
import LoginNav from './LoginNav'
import LogoutNav from './LogoutNav'
import { deleteIdea } from '../actions/auth'
import { deleteUserIdea } from '../actions/auth'
import { deleteImage } from '../actions/auth'
import { deleteUserImage } from '../actions/auth'
import {deletePallete} from '../actions/auth'
import { loginSuccess } from '../actions/auth'


class UserProfile extends React.Component {
    state = {
        modalOpen: false, 
        clickedImg: '',
    }
    
    componentDidMount() {
        const token = localStorage.getItem('CreativePlace')
        if(!token){
            this.props.history.push('/login')
        }else{
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
                        <br/>
                        <br/>
                        <Link to='profile/artbox'><img height="100px" width="100px" src="https://i.ibb.co/cxQw7W0/Screen-Shot-2020-09-22-at-5-11-30-PM.png" alt=""/><p>ArtBox Click To Add Items</p></Link>
                    </Grid.Column>
                    <Grid.Column>
                        {/* right top column */}
                        <div id="idea-div">
                         { this.props.auth.ideas.map(idea => {
                             return (
                                <div>
                                    <h3><Icon name="x" size='large' onClick={()=>this.deleteIdea( this, idea )}/>{idea.saying}<br/></h3>
                                </div>
                             )
                         })}
                         </div>
                    </Grid.Column>
                    </Grid.Row>
                    <Grid.Row columns={2}>
                        <Grid.Column>
                          <div id="image-div" >
                          { this.props.auth.images.map(image => {
                             return (
                                <div>
                                <img height="125" width="125" src={image.img_url} alt=''/>
                                <Icon name="x" size='large' onClick={()=>this.deleteImage( this, image)}></Icon>
                                <Icon name="expand arrows alternate" size='large' onClick={()=>this.handleOpen(this, image)}></Icon>
                                <Modal
                                    open={this.state.modalOpen}
                                    onClose={this.handleClose}
                                    >
                                        <Modal.Content image>
                                            <Image id="image" src={this.state.clickedImg.img_url}/>
                                        </Modal.Content>
                                        <Modal.Actions>
                                            <Button onClick={this.handleClose} positive>Close</Button>
                                        </Modal.Actions>
                                        </Modal>
                                </div>
                                )
                            })}
                            </div>  
                        </Grid.Column>
                        <Grid.Column>  
                        <div id="image-div">
                         { this.props.auth.palletes.map(pallete => {
                             return (
                             <div id="color-card">
                                <Icon name="x" size='large' onClick={()=>this.deletePallete(this, pallete)}/>
                                <h2 style={{backgroundColor: `rgb(${pallete.color_one_rgb_value})`,}}> {pallete.color_one_rgb_value}</h2>
                                <h2 style={{backgroundColor: `rgb(${pallete.color_two_rgb_value})`,}}> {pallete.color_two_rgb_value}</h2>
                                <h2 style={{backgroundColor: `rgb(${pallete.color_three_rgb_value})`,}}> {pallete.color_three_rgb_value}</h2>
                            </div>
                             )
                         })}
                         </div> 
                        </Grid.Column>
                    </Grid.Row>
                {/* </Grid.Row> */}
                </Grid>


            </div>
        )
    }

    render() { 
        return ( 
            <div>
            <Container> 
             <div id="nav-container-basic">
                <Container>
                <br/>
                <div id="nav-bar-basic">
                    { this.props.auth ? <LoginNav /> : <LogoutNav /> }
                </div>
                <br/>
                <br/>
                </Container>
                </div>
                <div>
                    { this.props.auth ? < this.renderPage /> : <h1>Welcome to Creative Place</h1>}  
                </div> 
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
    deletePallete,
    loginSuccess
}

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);