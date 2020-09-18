import React from 'react';
import { connect } from 'react-redux'

const Artbox = () => {
    return ( 
        <div>
            <h1>all my things and stuff</h1>
        </div>
     );
}

const mapStateToProps = (state) => {
    return {
        auth: state.auth
    }
}
export default connect(mapStateToProps, null) (Artbox);