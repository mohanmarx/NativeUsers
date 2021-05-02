import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://randomuser.me/api/'
})

instance.interceptors.request.use(request => {
  return request
})

export default instance