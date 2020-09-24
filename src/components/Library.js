import React from 'react';
import '../style/Library.css'
import { connect } from 'react-redux'
import { Container, Grid, Image} from 'semantic-ui-react'
import LoginNav from './LoginNav'
import LogoutNav from './LogoutNav'


class Library extends React.Component {
    state = {
        books: []
    }
    
    componentDidMount() {
        fetch('http://localhost:3001/books')
            .then(resp => resp.json())
            .then(data => {
                this.setState({ books: data });
            })
    }

    renderBooks = () => {
        { return this.state.books.map(book => {
            return(
                    <div id="book">
                    <a href={book.url} target="_blank" rel="noopener noreferrer"><Image height="200px" width="175px" src={book.img_url}/></a>
                    </div>
            )
        })}
    }

    render() { 
        return ( 
            <div id="main-library">
            <Container>
            <Grid> 
            <Grid.Row></Grid.Row>   
            <Grid.Row>
            <div id="nav-bar-main">
                { this.props.auth ? <LoginNav /> : <LogoutNav /> }
            </div>
            </Grid.Row>
            </Grid> 
            <Container>
                < this.renderBooks/>  
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


export default connect(mapStateToProps, null)(Library);