import React from 'react';
import { connect } from 'react-redux'
import AdminNav from './AdminNav'

const ApproveSuggestions = (props) => {
    return ( 
        <div>
            <div id="navigation">
                <AdminNav />
            </div>
            <p>approved this or that </p>
        </div>
     );
}
 
const mapStateToProps = (state) => {
    return {
        auth: state.auth
    }
}


export default connect(mapStateToProps, null)(ApproveSuggestions);