import axios from "axios";


const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': 'f09976ac-b900-4643-a026-27ff3d'
    },
})

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`, {

        }).then(response => response.data)
    },


    follow(userId) {
       return instance.post(`follow/${userId}`)
    },

    unFollow(userId) {
       return instance.delete(`follow/${userId}`)
    },

    getProfile(userId) {
        console.warn('obsolete method. Pla]ease profileAPI object ')
       return profileAPI.getProfile(userId);
       
    }
}
export const profileAPI = {
    getProfile(userId) {   
       return instance.get(`profile/`+ userId)  
    },
    getStatus(userId) {
        return instance.get(`profile/status/`+ userId)  
    },
    updateStatus(status) {
        return instance.put(`profile/status`, { status: status })  
    }
}
export const authAPI = {
    me() {
        return instance.get(`auth/me`)
    }
   
}


