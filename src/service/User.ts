import axios from 'axios'

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
    } else if (data.user_img !== undefined) {
      aa.append('user_img', data.user_img)
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
