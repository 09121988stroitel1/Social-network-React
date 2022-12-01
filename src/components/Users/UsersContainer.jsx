import React from "react";
import Users from "./Users";
import { connect } from "react-redux";
import { setCurrentPage,  } from "../../redux/users-reducer";
import { unFollow, toggleIsFetching,follow, toggleFollowingProgress, getUsers  } from "../../redux/users-reducer";
import Preloader from "../common/Preloader/Preloader";
import { withAuthRedirect } from "../../hoc/WithAuthRedirect";
import { compose } from 'redux';


class UsersContainer extends React.Component {

    componentDidMount() {

        this.props.getUsers(this.props.currentPage, this.props.pageSize);
      
    }

    onPageChanged = (pageNumber) => {

        this.props.getUsers(pageNumber, this.props.pageSize);

    }

    render() {
        return <>
        {this.props.isFetching ? <Preloader/>: null}
        <Users
            totalUsersCount={this.props.totalUsersCount}
            pageSize={this.props.pageSize}
            currentPage={this.props.currentPage}
            onPageChanged={this.onPageChanged}
            users={this.props.users}
            unFollow={this.props.unFollow}
            follow={this.props.follow}
            followingInProgress={this.props.followingInProgress}
        />
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        pageSize: getpageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),

    }
}

// let withRedirect =  withAuthRedirect(UsersContainer)

// export default  withAuthRedirect(connect(mapStateToProps, {
//         follow, unFollow,
//         setCurrentPage, toggleIsFetching, 
//         toggleFollowingProgress, getUsers
//     }))(UsersContainer);
    

    export default compose (
        withAuthRedirect,
        connect(mapStateToProps, {
        follow, unFollow,
        setCurrentPage, toggleIsFetching, 
        toggleFollowingProgress, getUsers
    }))(UsersContainer)
