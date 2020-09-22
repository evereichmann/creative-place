import React from 'react';
import '../style/Basic.css'
import { Container, Grid, Image } from 'semantic-ui-react'
import LoginNav from './LoginNav'
import LogoutNav from './LogoutNav'

const Challenges = (props) => {
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
            <Grid.Row columns={3}>
                <Grid.Column>
                    <h3>100 Heads</h3>
                    <Image src='https://i.ytimg.com/vi/0A_kQsxeeTE/maxresdefault.jpg' />
                    <p> 100 heads challenge was created by the artist Ahmed Aldoori and it basically consists in drawing 100 heads in 10 days. <a href="https://www.pinterest.com/aaldoori/portrait/" target="_blank">Here is the link to the pinterest page.</a></p>
                </Grid.Column>
                <Grid.Column>
                    <h3>Magical March</h3>
                    <Image height="300px" src='https://i.pinimg.com/originals/1f/82/a3/1f82a3acdd0745423d59ef376908aaa5.jpg' />
                    <p>MagicalMarch was popularized <a href="https://www.instagram.com/p/BfHHisql-H_/?utm_source=ig_web_button_share_sheet" target="_blank">by Mariana Real</a>. The first version of this challenge was <a href="https://www.deviantart.com/envyskort" target="_blank">Ruby's 31 Day Magical Girl Challenge</a> back in 2015. This challenge is drawing anything magical. People mostly do magical female characters.</p>
                </Grid.Column>
                <Grid.Column>
                    <h3>Mermay</h3>
                    <Image src='https://cdnb.artstation.com/p/assets/images/images/018/417/287/large/mike-gamble-mermay-mermaids-2019-x.jpg?1559285988' alt=''/>
                    <p><a href="https://www.mermay.com/" target="_blank">Mermay</a> was started by Tom Bancroft in 2016. This challange is drawing mermaids everyday in the month of May. There is a propmt but you do not have to follow strickly.</p>
                </Grid.Column>
            </Grid.Row>
            <Grid.Row columns={3}>
                <Grid.Column>
                    <h3>Different Styles</h3>
                    <Image src='https://i.pinimg.com/originals/54/b5/30/54b5305be3b7a528208b27b078d1b0d1.png' />
                    <p>It's called #stylechallenge the idea is to draw the same animation character multiple times in the styles of as many famous cartoons as possible.</p>
                </Grid.Column>
                <Grid.Column>
                    <h3>Toon Me</h3>
                    <Image src='https://clumsyyellow.files.wordpress.com/2020/02/img_0412.jpg?w=656' />
                    <p>The #ToonMe Challenge began on January 2020, when artist and illustrator René Córdova posted a half-real, half-drawn selfie to his Instagram. It very quickly became famous. Take a selfie or photo of a friend and illustrate half of the face.</p>
                </Grid.Column>
                <Grid.Column>
                    <h3>Smaugust</h3>
                    <Image src='https://brushwarriors.com/wp-content/uploads/2020/07/dajegry-d6b56930-3ad7-48b2-8729-25b21ec87b0c.jpg' />
                    <p>This is a challenge in the month of August where you draw, sketch, or paint a dragon every day. There are prompts going around the internet but it has not picked up as much as other drawing challenges.</p>
                </Grid.Column>
            </Grid.Row>
            <Grid.Row columns={3}>
                <Grid.Column>
                    <h3>Character Design</h3>
                    <Image src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS9t4b7zn7C35LXCrKIg99HjgKVG6jI4WXBRw&usqp=CAU' />
                    <p><i>'The Character Design Challenge is an international community of artists who share common goals: improve and learn from each other, promote their work online and having fun designing characters together.'</i><a href="https://characterdesignreferences.com/about-the-challenge#:~:text=The%20Character%20Design%20Challenge%20(or,having%20fun%20designing%20characters%20together." target="_blank">There website here.</a></p>
                </Grid.Column>
                <Grid.Column>
                    <h3>Inktober</h3>
                    <Image src='https://images.squarespace-cdn.com/content/v1/58bdb4b49f7456dff81be981/1517010286331-69LB58X9VZ6F0VWD25TE/ke17ZwdGBToddI8pDm48kGJGlcyy5UyZ_78pIv6a2qFZw-zPPgdn4jUwVcJE1ZvWEtT5uBSRWt4vQZAgTJucoTqqXjS3CfNDSuuf31e0tVGvebToXm6HicHX6FFLjxJm0My453GRhe6B32SlpdF9oWQ6l2WM7tn7mqHTODzkmeM/logo_1.png' alt=''/>
                    <p><i>'Jake Parker created Inktober in 2009 as a challenge to improve his inking skills and develop positive drawing habits. It has since grown into a worldwide endeavor with thousands of artists taking on the challenge every year.'</i> <a href="https://inktober.com/" target="_blank"> Website here</a></p>
                </Grid.Column>
                <Grid.Column>
                    <h3>Huevember</h3>
                    <Image src='https://brushwarriors.com/wp-content/uploads/2019/09/huevember-e1446879435169.png' alt=''/>
                    <p>How Huevember works is you pick a starting hue, or color. You draw a monochromtic picture with that hue. Everyday you work your way around the colorwheel.</p>
                </Grid.Column>
            </Grid.Row>
            </Grid>
            </Container>
        </div>
     );
}
 
export default Challenges;