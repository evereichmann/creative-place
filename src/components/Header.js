import React from 'react';
import AdminNav from './AdminNav';

const Header = () => {
    return ( 
        <div>
            <div class="container">
                <img id="img" src="https://i.pinimg.com/originals/23/eb/fc/23ebfcc40b2fe012cbf8be46bc130245.png" alt="cloud" />
                    <div class="text-block">
                        <h1 id="sitename">Creative Place</h1>
                    </div>
                    <img id="background" src="https://i.ibb.co/fMY3LQQ/Screen-Shot-2020-09-15-at-12-47-31-PM.png" />
                    <div id="nav-container">
                            <AdminNav />
                    </div>      
            </div>
        </div>
     );
}
 
export default Header;