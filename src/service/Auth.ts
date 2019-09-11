import axios from 'axios'

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
