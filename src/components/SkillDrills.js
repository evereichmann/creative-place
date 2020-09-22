import React from 'react';
import '../style/Basic.css'
import { connect } from 'react-redux'
import { Container, Grid, Image } from 'semantic-ui-react'
import LoginNav from './LoginNav'
import LogoutNav from './LogoutNav'

const SkillDrills = (props) => {
    return ( 
        <div>
            <Container>
            <Grid>
            <Grid.Row></Grid.Row>    
            <Grid.Row>
                <div id="nav-bar-basic">
                    { props.auth ? <LoginNav /> : <LogoutNav /> }
                </div>
            </Grid.Row>
                <Grid.Row columns={2}>
                    <Grid.Column className='border-1'>
                        <h3>Blob Practice</h3>
                        <Image src='https://64.media.tumblr.com/a37534e5c741401ee94c3de632773127/3a1d46645b2cd7f5-65/s400x600/11b691f53b35192f81376cbb430b4419c133b9a5.png' alt=''/>
                        <p>Helps with imagination, design, being able to find fundamental shapes inside objects. It also removes the white page anxiety to a new sketchbook page.</p>
                    </Grid.Column>
                    <Grid.Column className='border-1'>
                        <h3>Negative Space </h3>
                        <Image src='https://i.pinimg.com/originals/26/e4/93/26e493899f48f7e81445d5f0e71b2790.jpg' alt=''/>
                        <p>Negative space drawings are drawing the area around the object and not the object itself. This helps with seeing shapes and perspective of objects. You can take an interesting magazine ad and black permanent marker to jazz up a sketchbook page.</p>
                    </Grid.Column>
                    
                </Grid.Row>
                <Grid.Row columns={3}>
                    <Grid.Column>
                        <h3>Flat Surface</h3>
                        <Image src='https://i.pinimg.com/564x/d8/d6/df/d8d6df7c36bc94b4c778c5bc7a5fc3e8.jpg' alt=''/>
                        <p>this helps see different planes of an objects. This helps see how light hits an object. At first start with larger planes and then you can add more and smaller plains on an object</p>
                    </Grid.Column>
                    <Grid.Column>
                        <h3>Doodle</h3>
                        <Image src='https://i.pinimg.com/originals/3d/b4/89/3db48930c45ff970cc92c4a63c981e11.jpg' alt=''/>
                        <p>Doodling is a great way to losten up and get creative. It also helps develop a style. It also helps build confidence with lines and an easy way to get ride of the white page anxiety when sitting down to draw. Doodling also helps build up your strength of drawing from memory.</p>
                    </Grid.Column>
                    <Grid.Column>
                        <h3>Blind Contour</h3>
                        <Image src='https://i.pinimg.com/originals/68/71/0b/68710b11a18ffbce3b792c67a5a7456c.jpg' alt=''/>
                        <p>Either look at an item or in the mirror with you sketchbook and favoirte drawing utencil. Now start drawing but do not look away from your reflextion or object. This wont be your prettiest drawing but this is a greate hand eye cordination drill.</p>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row columns={2}>
                    <Grid.Column>
                        <h3>Timed</h3>
                        <Image src='https://www.demilked.com/magazine/wp-content/uploads/2017/01/speed-drawing-challenge-thumb640.jpg' alt=''/>
                        <p>Timed drawing gives you a good start and stop point, it also helps you relizes that any amount of time drawing is going to help you improve. It also helps improve your drawing speed and confidence.</p>
                        <h3>Value</h3>
                        <Image src='https://www.joshuanava.biz/watercolour/images/1861_15_56-tonal-value.jpg' alt=''/>
                        <p>Objects in nature don't have outlines. Getting used to value is important if you want to move into realistic drawing. It is also good to see the range you can get out of one drawing utencil.</p>
                    </Grid.Column>
                    <Grid.Column>
                        <h3>Gesture</h3>
                        <Image src='https://quickposes.com/images/woodward/woodward-examples.jpg' alt=''/>
                        <p>This helps with getting the movement of a subject and compisition. Gesture also helps to show that a single line can show movement. This is also great done timed.</p>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row columns={3}>
                    <Grid.Column>
                        <h3>Change The Perspective</h3>
                        <Image src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSwmLU4D67HRHuti1e8XGA0OwUayUi5LchqfQ&usqp=CAU' alt=''/>
                        <p></p>
                    </Grid.Column>
                    <Grid.Column>
                        <h3>Break It Down</h3>
                        <img src='https://www.beginnersschool.com/wp-content/uploads/2013/11/FormsStillLife_2.jpg' alt=''/>
                        <p></p>
                    </Grid.Column>
                    <Grid.Column>
                        <h3>Non-Dominant Hand</h3>
                        <Image src='https://irenewibawa.files.wordpress.com/2015/11/20150913_1.jpg' alt=''/>
                        <p>It forces you to think differently and draw what you see and not what you already know.</p>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
            </Container>
        </div>
     );
}
 
const mapStateToProps = (state) => {
    return {
        auth: state.auth
    }
}


export default connect(mapStateToProps, null)(SkillDrills);