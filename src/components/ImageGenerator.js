import React from 'react';
import { connect } from 'react-redux'
import LoginNav from './LoginNav'
import LogoutNav from './LogoutNav'

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
          selectedImage: this.state.images[Math.floor(Math.random() * 
            this.state.images.length)]
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
            <div>
                <div id="navigation">
                { this.props.auth ? <LoginNav /> : <LogoutNav />}
                </div>
                <img height="400px" width="400px" src={this.state.clicked && this.state.selectedImage.img_url} alt=""/>
                <button onClick={this.handleClick}>Generate</button>
                <button onClick={this.handleSave}>Save</button>
                { this.state.error ? <h2>{ this.state.error }</h2> : null }
            </div>
         );
    }
}

const mapStateToProps = (state) => {
    return{
        auth: state.auth
    }
}
 
export default connect(mapStateToProps, null)(ImageGenerator);
