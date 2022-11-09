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
       return instance.get(`profile/`+userId)
       
    }
}
export const authAPI = {
    me() {
        return instance.get(`auth/me`)
    }
   
}


