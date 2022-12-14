import React from "react";
import Profile from "./Profile";
import {getUserProfile, getStatus, updateStatus} from "../../redux/profile-reducer";
import {connect} from 'react-redux';
import {useParams} from "react-router-dom";
import { compose } from "redux";

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
       
        
        let userId = this.props.params.userId;
        if (!userId){
            userId=26371;
        }
        this.props.getUserProfile(userId);
        this.props.getStatus(userId);
    }
    render () {

        
   
    return(
<Profile {...this.props}  profile={this.props.profile}
 status={this.props.status}
 updateStatus={this.props.updateStatus}/>
    )
  }
}





let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status
});

export default compose(
    connect(mapStateToProps, {getUserProfile, getStatus, updateStatus}),
    withRouter,
    // withAuthRedirect
)(ProfileContainer)