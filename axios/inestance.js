import axios from "axios"

export const axiosInestance = axios.create({
    baseURL:"https://api.themoviedb.org/3/movie",
    params:{
        api_key:"aa6fc65fcedb7431af3ac2fbe6484cd0",
        language:"en-US",
        page:1
    }} )