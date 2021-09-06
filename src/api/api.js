import * as axios from 'axios';

const instance = axios.create({
   withCredentials: true,
   baseURL: 'https://social-network.samuraijs.com/api/1.0/',
   headers: { 'API-KEY': '52ea950b-9f6e-454f-9590-59f39a25ac70' }
});

export const usersAPI = {
   getUsers(currentPage, count) {
      return instance.get(`users?page=${currentPage}&count=${count}`).then(response => response.data);
   },
   getUserByName(userName) {
      return instance.get(`users?term=${userName}`).then(response => response.data);
   }
   //getUserByName -- must be applied
};

export const followAPI = {
   follow(id) {
      return instance.post(`follow/${id}`, {}).then(response => response.data);
   },
   unfollow(id) {
      return instance.delete(`follow/${id}`).then(response => response.data);
   }
};

export const authAPI = {
   checkIsAuth() {
      return instance.get(`auth/me`).then(response => response.data);
   },
   login(email, password, rememberMe = false, captcha = null) {
      return instance.post(`auth/login`, { email, password, rememberMe, captcha }).then(response => response.data);
   },
   logout() {
      return instance.delete(`auth/login`).then(response => response.data);
   }
};

export const profileAPI = {
   getUserProfile(userId) {
      return instance.get(`profile/${userId}`).then(response => response.data);
   },
   getStatus(userId) {
      return instance.get(`profile/status/${userId}`).then(response => response.data);
   },
   updateStatus(status) {
      return instance.put(`profile/status`, { status: status }).then(response => response.data);
   },
   savePhoto(photoFIle) {
      const formData = new FormData();
      formData.append('image', photoFIle);
      return instance.put(`profile/photo`, formData, {
         headers: { 'Content-Type': 'multipart/form-data' }
      }).then(response => response.data);
   },
   saveProfile(profile) {
      return instance.put(`profile`, profile).then(response => response.data);
   }
};

export const securityAPI = {
   getCaptchaUrl() {
      return instance.get(`security/get-captcha-url`).then(response => response.data);
   }
};