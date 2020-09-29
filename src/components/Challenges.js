import React from 'react';
import '../style/Basic.css'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { connect } from 'react-redux'
import { Container, Image, Button, Icon, Card } from 'semantic-ui-react'
import Slider from "react-slick";
import LoginNav from './LoginNav'
import LogoutNav from './LogoutNav'
import { loginSuccess } from '../actions/auth'
import ChallengesForm from './ChallengesForm';

class Challenges extends React.Component {
    state = {
        isClicked: false,
        challenges: []
    }
    componentDidMount() {
        fetch('http://localhost:3001/challenges')
            .then(resp => resp.json())
            .then(data => {
                this.setState({ challenges: data });
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

    handleForm = () => {
        this.setState({ isClicked: !this.state.isClicked });
        fetch('http://localhost:3001/challenges')
            .then(resp => resp.json())
            .then(data => {
                this.setState({ challenges: data });
            })
    }

    deleteChallenge = (e, challenge) => {
        const regObj = {
            method: 'DELETE',
        }
        fetch(`http://localhost:3001/challenges/${challenge.id}`, regObj)
           this.setState({ challenges: this.state.challenges.filter(t => t.id !== challenge.id)});
    }

    renderChallenges = () => {
        { return this.state.challenges.map(challenge => {
            return (
                <div id="challenge-card">
                    <Card style={{margin: "10px", padding: "10px", height: "400px"}}>
                    {this.props.auth ? 
                     challenge.user_id === this.props.auth.id ? <Icon name="x" size='large' onClick={()=>this.deleteChallenge( this, challenge )}></Icon> : null 
                    : 
                    null  }
                     <Card.Header><h3>{challenge.title}</h3></Card.Header>
                     <Card.Meta><p>length: {challenge.length}</p></Card.Meta>
                     <br/>
                     <Card.Description><p>description: {challenge.description}</p></Card.Description>
                     <br/>
                    { challenge.img_url === "" ? null : <Image wrapped ui={false} src={challenge.img_url} alt=''/> }
                    </Card>
                </div>
            )
        })}
    }

    render() { 
            const settings = {
                dots: true,
                infinite: true,
                speed: 550,
                slidesToShow: 3,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 4000,
                arrows: false,
                lazyLoad: true,
                pauseOnHover: true,
            };
        return (  
        <div>
            <Container>
                <br/>
                 <div id="nav-bar-basic">
                    { this.props.auth ? <LoginNav /> : <LogoutNav /> }
                </div>
            <Container>
                <div id="slider-div">
                    <br/>
                        <Slider {...settings} id="slider-container">
                        <div>
                            <h3>100 Heads</h3>
                            <Image src='https://i.ytimg.com/vi/0A_kQsxeeTE/maxresdefault.jpg' />
                            <p> 100 heads challenge was created by the artist Ahmed Aldoori and it basically consists in drawing 100 heads in 10 days. <a href="https://www.pinterest.com/aaldoori/portrait/" target="_blank" rel="noopener noreferrer">Here is the link to the pinterest page.</a></p>  
                        </div>
                        <div>
                            <h3>Magical March</h3>
                            <Image height="250" width="250" src='https://i.pinimg.com/originals/1f/82/a3/1f82a3acdd0745423d59ef376908aaa5.jpg' />
                            <p>MagicalMarch was popularized <a href="https://www.instagram.com/p/BfHHisql-H_/?utm_source=ig_web_button_share_sheet" target="_blank" rel="noopener noreferrer">by Mariana Real</a>. The first version of this challenge was <a href="https://www.deviantart.com/envyskort" target="_blank" rel="noopener noreferrer">Ruby's 31 Day Magical Girl Challenge</a> back in 2015. This challenge is drawing anything magical. People mostly do magical female characters.</p>
                        </div>
                        <div>
                            <h3>Mermay</h3>
                            <Image height="250" width="250" src='https://cdnb.artstation.com/p/assets/images/images/018/417/287/large/mike-gamble-mermay-mermaids-2019-x.jpg?1559285988' alt=''/>
                            <p><a href="https://www.mermay.com/" target="_blank" rel="noopener noreferrer">Mermay</a> was started by Tom Bancroft in 2016. This challenge is drawing mermaids everyday in the month of May. There is a propmt but you do not have to follow strickly.</p>     
                        </div>
                        <div>
                            <h3>Different Styles</h3>
                            <Image src='https://i.pinimg.com/originals/54/b5/30/54b5305be3b7a528208b27b078d1b0d1.png' />
                            <p>It's called #stylechallenge the idea is to draw the same animation character multiple times in the styles of as many famous cartoons as possible.</p>
                        </div>
                        <div>
                            <h3>Toon Me</h3>
                            <Image src='https://clumsyyellow.files.wordpress.com/2020/02/img_0412.jpg?w=656' />
                            <p>The #ToonMe Challenge began on January 2020, when artist and illustrator René Córdova posted a half-real, half-drawn selfie to his Instagram. It very quickly became famous. Take a selfie or photo of a friend and illustrate half of the face.</p>
                        </div>
                        <div>
                            <h3>Smaugust</h3>
                            <Image src='https://brushwarriors.com/wp-content/uploads/2020/07/dajegry-d6b56930-3ad7-48b2-8729-25b21ec87b0c.jpg' />
                            <p>This is a challenge in the month of August where you draw, sketch, or paint a dragon every day. There are prompts going around the internet but it has not picked up as much as other drawing challenges.</p>
                        </div>
                        <div>
                            <h3>Character Design</h3>
                            <Image src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS9t4b7zn7C35LXCrKIg99HjgKVG6jI4WXBRw&usqp=CAU' />
                            <p><i>'The Character Design Challenge is an international community of artists who share common goals: improve and learn from each other, promote their work online and having fun designing characters together.'</i><a href="https://characterdesignreferences.com/about-the-challenge#:~:text=The%20Character%20Design%20Challenge%20(or,having%20fun%20designing%20characters%20together." target="_blank" rel="noopener noreferrer">There website here.</a></p>
                        </div>
                        <div>
                            <h3>Inktober</h3>
                            <Image src='https://images.squarespace-cdn.com/content/v1/58bdb4b49f7456dff81be981/1517010286331-69LB58X9VZ6F0VWD25TE/ke17ZwdGBToddI8pDm48kGJGlcyy5UyZ_78pIv6a2qFZw-zPPgdn4jUwVcJE1ZvWEtT5uBSRWt4vQZAgTJucoTqqXjS3CfNDSuuf31e0tVGvebToXm6HicHX6FFLjxJm0My453GRhe6B32SlpdF9oWQ6l2WM7tn7mqHTODzkmeM/logo_1.png' alt=''/>
                            <p><i>'Jake Parker created Inktober in 2009 as a challenge to improve his inking skills and develop positive drawing habits. It has since grown into a worldwide endeavor with thousands of artists taking on the challenge every year.'</i> <a href="https://inktober.com/" target="_blank" rel="noopener noreferrer"> Website here</a></p>
                        </div>
                        <div>
                            <h3>Huevember</h3>
                            <Image src='https://brushwarriors.com/wp-content/uploads/2019/09/huevember-e1446879435169.png' alt=''/>
                            <p>How Huevember works is you pick a starting hue, or color. You draw a monochromtic picture with that hue. Everyday you work your way around the colorwheel.</p>
                        </div>
                        </Slider>
                    </div>
                    <br/>
                </Container>
                <Container style={{padding: "20px"}}>
                { !this.state.isClicked ? null : < ChallengesForm /> } 
                { !this.state.isClicked ? <Button onClick={this.handleForm}>Create Challenge</Button> : <Button  color="blue" onClick={this.handleForm}>Close Form</Button>}
                </Container>
                <Container>
                    <Card.Group itemsPerRow={3}>
                        < this.renderChallenges />
                    </Card.Group>
                </Container>
            </Container>
        </div> );
    }
}
 
const mapStateToProps = (state) => {
    return {
        auth: state.auth
    }
}

const mapDispatchToProps = {
    loginSuccess
}

export default connect(mapStateToProps, mapDispatchToProps)(Challenges);