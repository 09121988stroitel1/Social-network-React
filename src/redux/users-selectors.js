import { createSelector } from "reselect"

export const getUsers1 = (state) => {
    return state.usersPage.users
}

export const getUsersSuper = createSelector(getUsers1, (users)=> {
    return users.filter(u=> true)
})

export const gePageSize = (state) => {
    return state.usersPage.pageSize
}
export const getTotalUsersCount = (state) => {
    return state.usersPage.totalUsersCount
}
export const getCurrentPage = (state) => {
    return state.usersPage.currentPage
}
export const getIsFetching = (state) => {
    return state.usersPage.isFetchin
}
export const getFollowingInProgress = (state) => {
    return state.usersPage.followingInProgress
}