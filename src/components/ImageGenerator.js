import React from 'react';
import { Container, Grid, Image } from 'semantic-ui-react'
import '../style/Image.css'
import { connect } from 'react-redux'
import LoginNav from './LoginNav'
import LogoutNav from './LogoutNav'
import { likeImage } from '../actions/auth'
import { likeUserImage } from '../actions/auth'
import { loginSuccess } from '../actions/auth'

class ImageGenerator extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            images: [],
            selectedImage: null,
            clicked: false, 
            error: '',
            bAndW: false, 
        }
    }

    componentDidMount() {
        fetch('http://localhost:3001/images')
            .then(resp => resp.json())
            .then(data => {
                this.setState({ images: data });
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
          bAndW: false, 
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

    clickArtbox = () => {
        if(this.props.auth.items.length === 0){
            this.setState({ error: "you need to add items to your artbox" });
        }else{
        const randArtSupply = this.props.auth.items[Math.floor(Math.random() * this.props.auth.items.length)]
        this.setState({ error: `${randArtSupply.name} | ${randArtSupply.description}`});
    }}

    handleExtraHelp = () => {
        const help = ["Monochromatic - Red", "Monochromatic - Blue", "Monochromatic - Green", "Monochromatic - Yellow", "Monochromatic - Purple", "Monochromatic - Orange", "Two Colors", "Three Colors", "Hash Shading", "Complementary Colors", "Black and White", "Values", "Realistic", "Cartoon", "Bright", "Dark"]
        const randomHelp = help[Math.floor(Math.random() * help.length)]
        this.setState({error: randomHelp})
    }

    handleColorGrey = () => {
        this.setState({ bAndW: true });
        document.getElementById("image").style.filter = "grayscale(100%)";
    }

    handleColor = () => {
        this.setState({ bAndW: false });
        document.getElementById("image").style.filter = "grayscale(0%)";
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
                    <Image height="400px" width="400px" id="image" src={this.state.clicked && this.state.selectedImage.img_url} alt=""/>    
                </Grid.Row>
                <Grid.Row>
                <button onClick={this.handleClick}>Generate</button>
                <button onClick={this.handleSave}>Save</button>
                <button onClick={this.handleExtraHelp}>Extra Help</button>
                {this.state.bAndW? <button onClick={this.handleColor}>Color</button> : <button onClick={this.handleColorGrey}>Black&White</button> }
                </Grid.Row>
                { this.state.error ? <h2>{ this.state.error }</h2> : null }
                </Grid>
                </Container>
                {this.props.auth? <img onClick={this.clickArtbox} height="75px" width="75px" src="https://i.ibb.co/cxQw7W0/Screen-Shot-2020-09-22-at-5-11-30-PM.png" alt=""/> : null}
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
    likeUserImage, 
    loginSuccess
}
 
export default connect(mapStateToProps, mapDispatchtoProps)(ImageGenerator);
