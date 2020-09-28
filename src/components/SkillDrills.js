import React from 'react';
import '../style/Basic.css'
import { connect } from 'react-redux'
import { Container, Grid, Image } from 'semantic-ui-react'
import LoginNav from './LoginNav'
import LogoutNav from './LogoutNav'
import { loginSuccess } from '../actions/auth'

class SkillDrills extends React.Component {
    componentDidMount() {
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
                <Grid.Row columns={2}>
                    <Grid.Column>
                        <h3>Blob Practice</h3>
                        <Image src='https://64.media.tumblr.com/a37534e5c741401ee94c3de632773127/3a1d46645b2cd7f5-65/s400x600/11b691f53b35192f81376cbb430b4419c133b9a5.png' alt=''/>
                        <p>To start either yourself or a friend can draw different shapes, scribbles, or blobs on a page of your sketchbook. Either pick a theme or just try to make objects out of your blobs. This helps with white page anxiety, speed, confiences, and imagination.</p>
                    </Grid.Column>
                    <Grid.Column>
                        <h3>Negative Space </h3>
                        <Image src='https://i.pinimg.com/originals/26/e4/93/26e493899f48f7e81445d5f0e71b2790.jpg' alt=''/>
                        <p>Negative space drawings are drawings of the area around the object and not the object itself. This helps with seeing shapes and perspective of objects. You can take an interesting magazine ad and black permanent marker to jazz up a sketchbook page.</p>                      </Grid.Column>
                    
                </Grid.Row>
                <Grid.Row columns={3}>
                    <Grid.Column>
                        <h3>Flat Surface</h3>
                        <Image src='https://i.pinimg.com/564x/d8/d6/df/d8d6df7c36bc94b4c778c5bc7a5fc3e8.jpg' alt=''/>
                        <p>Think of a rounded shape like  a sphere or a face and making those rounded surfaces flat plains. This helps concepts how light hits an object and value of light on those plains. At first start with larger planes and then you can add more and smaller plains on an object.</p>
                    </Grid.Column>
                    <Grid.Column>
                        <h3>Doodle</h3>
                        <Image src='https://i.pinimg.com/originals/3d/b4/89/3db48930c45ff970cc92c4a63c981e11.jpg' alt=''/>
                        <p>Doodling is a great way to losten up and get creative. It also helps develop a style. It also helps build confidence with lines and an easy way to get ride of the white page anxiety when sitting down to draw. Doodling also helps build up your strength of drawing from memory.</p>
                    </Grid.Column>
                    <Grid.Column>
                        <h3>Blind Contour</h3>
                        <Image src='https://i.pinimg.com/originals/68/71/0b/68710b11a18ffbce3b792c67a5a7456c.jpg' alt=''/>
                        <p>Either look at an item or in the mirror at yourself. With your sketchbook and favorite drawing utensil start drawing. The only rules are do not look away from your subject and do not pick up your drawing utensil. This will not be your prettiest drawing but this is a great way to work on hand eye coordination, speed, confidence, and spatial awareness.</p>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row columns={2}>
                    <Grid.Column>
                        <h3>Timed</h3>
                        <Image src='https://www.demilked.com/magazine/wp-content/uploads/2017/01/speed-drawing-challenge-thumb640.jpg' alt=''/>
                        <p>Timed drawing gives you a good start and stop point, it also helps you relizes that any amount of time drawing is going to help you improve. It also helps improve your drawing speed and confidence.</p>
                        <h3>Value</h3>
                        <Image src='https://www.joshuanava.biz/watercolour/images/1861_15_56-tonal-value.jpg' alt=''/>
                        <p>Making a value strip on the margin of a page can be a great warm up and understand the values you can get from your drawing utensil. Objects in nature do not have black outlines. Getting used to drawing with values is important especially if you want to move towards more realistic artwork. This is helpful to see different values in shadows and range in images.</p>
                    </Grid.Column>
                    <Grid.Column>
                        <h3>Gesture</h3>
                        <Image src='https://quickposes.com/images/woodward/woodward-examples.jpg' alt=''/>
                        <p>Gesture drawing helps you understand human movement. It helps you learn about anatomy of muscles, the movement of joints, and the flexibility of the human body. Understanding the way a human body looks you can make your character more natural to the eye.</p>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row columns={3}>
                    <Grid.Column>
                        <h3>Change The Perspective</h3>
                        <Image src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSwmLU4D67HRHuti1e8XGA0OwUayUi5LchqfQ&usqp=CAU' alt=''/>
                        <p>Being able to draw an object at multiple perspectives helps you learn perspective faster. If you understand how to draw a cup in one perspective it is easier to get it in other perspectives. Working with simpler shapes will help you when you start working with complex rooms with many objects or more complicated figures like people.</p>
                        <h3>One Line</h3>
                        <Image src="https://miro.medium.com/max/3600/1*LC76mQWnJxpcyAZUxaM1Mg.jpeg" alt=""/>
                        <p>Is when you make a picture with a single line without picking up your writing utensil. This makes you think about the important lines in a subject and you can’t spend too much time on a single drawing. It’s a great way to warm up and use space on a new page.</p>
                    </Grid.Column>
                    <Grid.Column>
                        <h3>Break It Down</h3>
                        <img src='https://www.beginnersschool.com/wp-content/uploads/2013/11/FormsStillLife_2.jpg' alt=''/>
                        <p>This is when you find the basic shapes inside an object and then mold those shapes. Learning with skill will make drawing faster and help understand perspective easier.</p>
                    </Grid.Column>
                    <Grid.Column>
                        <h3>Non-Dominant Hand</h3>
                        <Image src='https://irenewibawa.files.wordpress.com/2015/11/20150913_1.jpg' alt=''/>
                        <p>It forces you to think differently and draw what you see and not what you already know. Pick simple objects to warm up.</p>
                    </Grid.Column>
                </Grid.Row>
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
    loginSuccess
}

export default connect(mapStateToProps, mapDispatchToProps)(SkillDrills);