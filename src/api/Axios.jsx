import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://backend-gmmc.onrender.com/',
    withCredentials:true

})

export default instance;