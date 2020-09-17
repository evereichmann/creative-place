import React from 'react';
import AdminNav from './AdminNav'

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
                    <AdminNav />
                </div>
                <button onClick={this.handleClick}>Generate</button>
                {/* <h1>{this.state.clicked && this.state.selectedImage.img_url}</h1> */}
                <img height="400px" width="400px" src={this.state.clicked && this.state.selectedImage.img_url} />
            </div>
         );
    }
}
 
export default ImageGenerator;
