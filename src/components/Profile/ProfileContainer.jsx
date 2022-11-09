import React from "react";
import Profile from "./Profile";
import {getUserProfile} from "../../redux/profile-reducer";
import {connect} from 'react-redux';
import {useParams} from "react-router-dom";
// import { usersAPI } from "../../api/Api";

const withRouter = WrappedComponent => props => {
    const params = useParams();
    // etc... other react-router-dom v6 hooks
    return (
        <WrappedComponent
            {...props}
            params={params}
            // etc...
        />
    );
};

class ProfileContainer extends React.Component{
    componentDidMount() {
       
        console.log(this.props);
        let userId = this.props.params.userId;
        if (!userId){
            userId=2;
        }
        this.props.getUserProfile(userId);
    }
    render () {
   
    return(
<Profile {...this.props}  profile={this.props.profile}/>
    )
  }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile
});

let WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, {
    getUserProfile
}) (WithUrlDataContainerComponent);