// axios
import axios from 'axios'

const baseURL = 'https://dmc9l6wlyb.execute-api.us-east-1.amazonaws.com'

const instance = axios.create({
  baseURL
  // You can add your headers here
})

instance.interceptors.request.use(function (config) {
  const token = localStorage.getItem('IdToken')
  if (token) {
    config.headers.Authorization =  token
  }
  return config
})

// instance.interceptors.response.use(response => response,
//   error => {
//     console.log('interceptor!!!!!!!!', error)
//     if (error.message.lastIndexOf('status code 401') !== -1) {
//       localStorage.removeItem('userInfo')
//       location.href = '/app/home'
//     }
//   }
// )

export default instance
