import axios from 'axios'

axios.interceptors.request.use(config => {
  if (localStorage.token) {
    config.headers['Authorization'] = localStorage.token;
  }
  return config
}, error => {
  return Promise.reject(error)
})

function getUserInfo() {
  return new Promise((resolve, reject) => {
    axios.get(`/api/users/info/`).then((res: any) => {
      resolve(res.data)
    }).catch(res => {
      reject(res)
    })
  })
}

function updateUserInfo(data: any) {
  console.log(data, 1111)
  return new Promise((resolve, reject) => {
    let aa = new FormData()
    if (data.user_nickname !== undefined) {
      aa.append('user_nickname', data.user_nickname)
    } else if (data.user_sex !== undefined) {
      aa.append('user_sex', data.user_sex)
    }

    axios.post(`/api/users/updateinfo/`, aa).then((res: any) => {
      resolve(res.data)
    }).catch(res => {
      reject(res)
    })
  })
}


export default {
  getUserInfo,
  updateUserInfo
}
