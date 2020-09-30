import React from 'react';
import '../style/Color.css'
import { Container, Button} from 'semantic-ui-react'
import { connect } from 'react-redux'
import LoginNav from './LoginNav'
import LogoutNav from './LogoutNav'
import {likeColors} from '../actions/auth'
import { loginSuccess } from '../actions/auth'

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

    handleExtraHelp = () => {
        const help = ["Animal - Cat", "Animal - Dog", "Animal - Bird", "Animal - Horse", "Animal", "Plant", "Tree", "Food", "Household item", "Furniture - Chair", "Furniture - Couch", "Furniture - Bed", "Machinery", "Automobile", "Character", "Self-portrait", "Portrait", "Hand", "Foot", "Figure Study"] 
        const randomHelp = help[Math.floor(Math.random() * help.length)]
        this.setState({ error: randomHelp });
    }

    render() { 
        let colorarr = this.state.selectedColor.map(c => {
            return (<div id="color-div">
            <div 
                style={{
                    height: '200px',
                    width: '200px',
                    backgroundColor: `rgb(${c.rgb_value})`,
                }} id="color-cards">
                <p id="color-name">{ c.name }</p>
                </div>
            </div>
            )
        })     
        return ( 
            <div id="main-container-color">
                <img id="color-sky-background" src="https://i.ibb.co/db1Q3r3/Screen-Shot-2020-09-30-at-11-50-28-AM.png" alt=""/>
                <img id="background-builds" src="https://i.ibb.co/pfRCXfg/Screen-Shot-2020-09-30-at-12-05-02-PM.png" alt=""/>
                <Container>
                <img id="godzilla" src="https://i.ibb.co/0npvK9c/Screen-Shot-2020-09-30-at-10-56-07-AM.png" alt="" />
                <h1 id="color-title">Color Generator</h1>    
                <div id="nav-bar-color">
                { this.props.auth ? <LoginNav /> : <LogoutNav />}
                </div>
                <Container>
                <div id="select">
                <select value={this.state.value} onChange={this.handleChange}>
                    <option value="">How many colors</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>
                </div>
                <Button id="color-generate" onClick={this.handleClick}>Generate</Button>
                <Button id="color-save" onClick={this.handleSave}>Save</Button>
                <Button id="color-extra"onClick={this.handleExtraHelp}>Extra Help</Button>
                { this.state.error ? <h2 id="color-error">{ this.state.error }</h2> : null }
                { this.state.error ? <img id="color-error-img" src="https://i.ibb.co/99DHf38/Screen-Shot-2020-09-28-at-9-40-36-AM.png" alt=""/> : null }
                {colorarr.length ? colorarr : null}
                </Container>
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
    likeColors,
    loginSuccess
}

export default connect(mapStateToProps, mapDispatchToProps)(ColorGenerator);
