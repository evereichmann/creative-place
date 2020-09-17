import React from 'react';
import AdminNav from './AdminNav';

const Header = () => {
    return ( 
        <div>
            <div class="container">
                <img id="img" src="https://i.pinimg.com/originals/23/eb/fc/23ebfcc40b2fe012cbf8be46bc130245.png" alt="cloud" />
                <div id="cloud2" class="cloud"></div>
                <div id="cloud3" class="cloud"></div>
                <div id="cloud4" class="cloud"></div>
                <div id="cloud5" class="cloud"></div>
                <div id="cloud6" class="cloud"></div>
                <div id="cloud7" class="cloud"></div> 
                    <div class="text-block">
                        <h1 id="sitename">Creative Place</h1>
                    </div>
                    <img id="background" src="https://i.ibb.co/0DHnd3n/Screen-Shot-2020-09-15-at-12-47-31-PM.png" />
                    <div id="nav-container">
                        <div id="nav-bar">
                            <h3>Hello Admin</h3> 
                            <h3>Logout</h3>   
                            <h3>Library</h3>
                            <h3>Skill Drills</h3>    
                            <h3>Approve Suggestion</h3>    
                        </div>
                    </div>      
            </div>
        </div>
     );
}
 
export default Header;