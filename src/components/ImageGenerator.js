import React from 'react';
import { Container, Grid } from 'semantic-ui-react'
import '../style/Image.css'
import { connect } from 'react-redux'
import LoginNav from './LoginNav'
import LogoutNav from './LogoutNav'
import { likeImage } from '../actions/auth'
import { likeUserImage } from '../actions/auth'

class ImageGenerator extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            images: [],
            selectedImage: null,
            clicked: false, 
            error: ''
        }
    }

    componentDidMount() {
        fetch('http://localhost:3001/images')
            .then(resp => resp.json())
            .then(data => {
                this.setState({ images: data });
            })
    }

    handleClick = () => {
        this.setState({
          error: null,  
          clicked: true, 
          selectedImage: this.state.images[Math.floor(Math.random() * this.state.images.length)]
        })
      }

    handleSave = () => {
        if(this.props.auth){
            if(this.state.selectedImage !== null){
                const userImage = {
                    user_id: this.props.auth.id,
                    image_id: this.state.selectedImage.id
                }
                const reqObj = {
                    method: "POST", 
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(userImage)
                }
                fetch('http://localhost:3001/user_images', reqObj)
                    .then(resp => resp.json())
                    .then(data => {
                        this.props.likeImage({
                            ...data, 
                            img_url: this.state.selectedImage.img_url
                        })
                        this.props.likeUserImage(data)
                        this.setState({ error: "saved successfully" })
                    })
            }else{
                this.setState({ error: "please generate image" })
            }
        }else{
            this.setState({ error: "finish this drawing and create an account to save image" });
        }
    } 

    render() {
        return ( 
            <div id="main-container-image">
                <Container>
                    <Grid>
                        <Grid.Row></Grid.Row>
                        <Grid.Row>
                <div id="nav-bar-image">
                { this.props.auth ? <LoginNav /> : <LogoutNav />}
                </div>
                </Grid.Row>
                <Grid.Row>
                <img height="400px" width="400px" src={this.state.clicked && this.state.selectedImage.img_url} alt=""/>
                </Grid.Row>
                <Grid.Row>
                <button onClick={this.handleClick}>Generate</button>
                <button onClick={this.handleSave}>Save</button>
                </Grid.Row>
                { this.state.error ? <h2>{ this.state.error }</h2> : null }
                </Grid>
                </Container>
            </div>
         );
    }
}

const mapStateToProps = (state) => {
    return{
        auth: state.auth
    }
}

const mapDispatchtoProps = {
    likeImage,
    likeUserImage
}
 
export default connect(mapStateToProps, mapDispatchtoProps)(ImageGenerator);
