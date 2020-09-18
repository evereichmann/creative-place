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
            clicked: false
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
          clicked: true, 
          selectedImage: this.state.images[Math.floor(Math.random() * 
            this.state.images.length)]
        })
      }

    render() {
        return ( 
            <div>
                <div id="navigation">
                { this.props.auth ? <LoginNav /> : <LogoutNav />}
                </div>
                <button onClick={this.handleClick}>Generate</button>
                <img height="400px" width="400px" src={this.state.clicked && this.state.selectedImage.img_url} />
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
