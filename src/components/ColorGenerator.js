import React from 'react';
import { connect } from 'react-redux'
import LoginNav from './LoginNav'
import LogoutNav from './LogoutNav'

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
        if(this.props.auth){
            console.log("save")
            console.log(this.state)
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
            <div>
                <div id="navigation">
                { this.props.auth ? <LoginNav /> : <LogoutNav />}
                </div>
                <select value={this.state.value} onChange={this.handleChange}>
                    <option value="">How many colors</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>
                {colorarr.length ? colorarr : null}
                <button onClick={this.handleClick}>Generate</button>
                <button onClick={this.handleSave}>Save</button>
                <div>
                { this.state.error ? <h2>{ this.state.error }</h2> : null }
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

export default connect(mapStateToProps, null)(ColorGenerator);
