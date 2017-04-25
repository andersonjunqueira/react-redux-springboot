import React, { Component } from 'react';

import ProfileForm from './ProfileForm';

class Profile extends Component {

    doSubmit(values) {
    }

    render() {
        return (
            <ProfileForm doSubmit={this.doSubmit}/>
        );
    }

}

export default Profile;
