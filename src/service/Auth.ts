import axios from 'axios'

declare var window: Window & { $store: any }

axios.interceptors.request.use(config => {
  window.$store.store.changeActivityIndicatorStatus(true)
  // window.$store
  if (localStorage.token) {
    config.headers['Authorization'] = localStorage.token;
  } else {
    config.headers['Authorization'] = 'none';
  }
  return config
}, error => {
  return Promise.reject(error)
})

axios.interceptors.response.use(config => {
  window.$store.store.changeActivityIndicatorStatus(false)
  return config
}, error => {
  window.$store.store.changeActivityIndicatorStatus(false)
  if (error.response.data.errorCode === 8888) {
    window.location.href = '/#/welcome';
  }
  return Promise.reject(error)
})

function login(data: any) {
  console.log(data, "登录信息")
  return new Promise((resolve, reject) => {
    let aa = new FormData()
    aa.append('user_account', data.user_account)
    aa.append('user_password', data.user_password)
    axios.post('/api/users/login/', aa).then((res: any) => {
      resolve(res.data)
    }).catch(res => {
      reject(res)
    })
  })
}

function reg(data: any) {
  console.log(data, "注册信息")
  let aa = new FormData()
  aa.append('user_account', data.user_account)
  aa.append('vcode', data.vcode)
  aa.append('user_password', data.user_password)
  aa.append('user_nickname', data.user_nickname)
  return new Promise((resolve, reject) => {
    axios.post('/api/users/reg/', aa).then((res: any) => {
      resolve(res.data)
    }).catch(res => {
      reject(res)
    })
  })
}

function getVcode(data: any) {
  console.log(data, 1111)
  return new Promise((resolve, reject) => {
    console.log(data)
    axios.get('/api/users/vcode/', {params: data}).then((res: any) => {
      resolve(res.data)
    }).catch(res => {
      reject(res)
    })
  })
}

export default {
  login,
  reg,
  getVcode
}
