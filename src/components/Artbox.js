import React from 'react';
import { connect } from 'react-redux'
import { Container, Grid, Icon } from 'semantic-ui-react'
import ItemForm from './ItemForm'
import LoginNav from './LoginNav'
import LogoutNav from './LogoutNav'
import { deleteItem } from '../actions/auth'

class Artbox extends React.Component {
    componentDidMount() {
        if(!this.props.auth){
            this.props.history.push('/login')
        }
    }

    renderPage = () => {
        { return this.props.auth.items.map(item => {
            return(
                <div>
                    <Container>
                     <ul> 
                    <li key={item.id}>{item.name} | {item.description}<Icon name="x" size='large' onClick={()=>this.deleteItem( this, item )}></Icon></li>
                    </ul>  
                    </Container>
                </div>
            )
        })}
    }

    deleteItem = (e, item) => {
        const regObj = {
            method: 'DELETE',
        }

        fetch(`http://localhost:3001/items/${item.id}`, regObj)
            this.props.deleteItem(item.id)
        console.log('delete item', item.id)
    }

    render() { 
        return ( 
            <div>
                <Container>
                <Grid>
                <Grid.Row></Grid.Row>
                <Grid.Row>
                <div id="nav-bar-basic">
                    { this.props.auth ? <LoginNav /> : <LogoutNav /> }
                </div>
                </Grid.Row>
                <Grid.Row>
                    <img height="150px" width="200px" src="https://www.netclipart.com/pp/m/23-239279_28-collection-of-boxes-clipart-clip-art-box.png" alt=""/>
                </Grid.Row>
                <Grid.Row>
                    < ItemForm />
                </Grid.Row>
                </Grid>
            </Container>
                   {this.props.auth ? <this.renderPage/> : null }
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
    deleteItem
}

export default connect(mapStateToProps, mapDispatchToProps) (Artbox);