import React from 'react';
import { Container, Grid } from 'semantic-ui-react'
import { connect } from 'react-redux'
import LoginNav from './LoginNav'
import LogoutNav from './LogoutNav'
import {likeColors} from '../actions/auth'

class ColorGenerator extends React.Component {
    constructor(props){
        super(props)
        this.state={ 
            colors: [],
            selectedColor: [],
            clicked: false,
            genColor: '',
            error: ''  
        }
    }

    componentDidMount() {
        fetch('http://localhost:3001/colors')
            .then(resp => resp.json())
            .then(data => {
                this.setState({ colors: data });
            })
    }

    handleClick = () => {
        let colorOne = this.state.colors[Math.floor(Math.random() * this.state.colors.length)]
        let colorTwo = this.state.colors[Math.floor(Math.random() * this.state.colors.length)]
        let colorThree = this.state.colors[Math.floor(Math.random() * this.state.colors.length)]
         
        if(this.state.genColor == 2){
            this.setState({
                error: null,
                clicked: true, 
                selectedColor: [ colorOne, colorTwo ]
                  })
        }else if(this.state.genColor == 3){
            this.setState({
                error: null,
                clicked: true, 
                selectedColor: [ colorOne, colorTwo, colorThree ]
            })
        }else{
            this.setState({
                error: null,
                clicked: true, 
                selectedColor: [ colorOne ]
            })
        }
      }

      handleChange = (event) => {
          this.setState({ genColor: event.target.value });
      }

    handleSave = () => {
        // console.log(this.state.selectedColor[0].rgb_value)
        if(this.props.auth){
            if(this.state.selectedColor.length === 1){
                const palette = {
                    user_id: this.props.auth.id,
                    color_one_id: this.state.selectedColor[0].id,
                    color_one_rgb_value: this.state.selectedColor[0].rgb_value,
                    color_two_id: null,
                    color_three_id: null
                }
                const reqObj = {
                    method: "POST", 
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(palette)
                }
                fetch('http://localhost:3001/palletes', reqObj)
                    .then(resp => resp.json())
                    .then(data => {
                        this.props.likeColors(data)
                        this.setState({ error: "saved successfully" })
                    })
            }else if(this.state.selectedColor.length === 2){
                const palette = {
                    user_id: this.props.auth.id,
                    color_one_id: this.state.selectedColor[0].id,
                    color_one_rgb_value: this.state.selectedColor[0].rgb_value,
                    color_two_id: this.state.selectedColor[1].id,
                    color_two_rgb_value: this.state.selectedColor[1].rgb_value,
                    color_three_id: null,
                    color_three_rgb_value: null
                }
                const reqObj = {
                    method: "POST", 
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(palette)
                }
                fetch('http://localhost:3001/palletes', reqObj)
                .then(resp => resp.json())
                .then(data => {
                    this.props.likeColors(data)
                    this.setState({ error: "saved successfully" })
                })
            }else if(this.state.selectedColor.length === 3){
                const palette = {
                    user_id: this.props.auth.id,
                    color_one_id: this.state.selectedColor[0].id,
                    color_one_rgb_value: this.state.selectedColor[0].rgb_value,
                    color_two_id: this.state.selectedColor[1].id,
                    color_two_rgb_value: this.state.selectedColor[1].rgb_value,
                    color_three_id: this.state.selectedColor[2].id,
                    color_three_rgb_value: this.state.selectedColor[2].rgb_value
                }
                const reqObj = {
                    method: "POST", 
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(palette)
                }
                fetch('http://localhost:3001/palletes', reqObj)
                .then(resp => resp.json())
                .then(data => {
                    this.props.likeColors(data)
                    this.setState({ error: "saved successfully" })
                })
            }else{
                this.setState({ error: "please generate a color pallete" });
            }
        }else{
            this.setState({ error: "finish this drawing and create an account to save" });
            console.log('error')
        }
    } 

    render() { 
        let colorarr = this.state.selectedColor.map(c => {
            return (<div>
            <div 
                style={{
                    height: '200px',
                    width: '200px',
                    backgroundColor: `rgb(${c.rgb_value})`,
                }}>
                </div>
                <p>{ c.name }</p>
            </div>
            )
        })     
        return ( 
            <div id="main-container-color">
                <Container>
                    <Grid>
                    <Grid.Row></Grid.Row>
                    <Grid.Row>
                <div id="nav-bar-basic">
                { this.props.auth ? <LoginNav /> : <LogoutNav />}
                </div>
                </Grid.Row>
                <Grid.Row></Grid.Row>
                <Grid.Row>
                <select value={this.state.value} onChange={this.handleChange}>
                    <option value="">How many colors</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>
                </Grid.Row>
                <Grid.Row>
                {colorarr.length ? colorarr : null}
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
    return {
        auth: state.auth
    }
}

const mapDispatchToProps = {
    likeColors
}

export default connect(mapStateToProps, mapDispatchToProps)(ColorGenerator);
