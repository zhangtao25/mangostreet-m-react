import axios from 'axios'

axios.interceptors.request.use(config => {
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
  return config
}, error => {
  if (error.response.data.errorCode === 8888) {
    console.log('没登录')
    window.location.href = '/#/welcome';
  }
  return Promise.reject(error)
})

function getNotes() {
  return new Promise((resolve, reject) => {
    axios.get('/api/notes/all/').then((res: any) => {
      resolve(res.data)
    }).catch(res => {
      reject(res)
    })
  })
}

function getNoteById(id: any) {
  return new Promise((resolve, reject) => {
    axios.get(`/api/notes/${id}/`).then((res: any) => {
      resolve(res.data)
    }).catch(res => {
      reject(res)
    })
  })
}

function AddNote(formData: any) {
  return new Promise((resolve, reject) => {
    axios.post(`/api/notes/`, formData).then((res: any) => {
      resolve(res.data)
    }).catch(res => {
      reject(res)
    })
  })
}

export default {
  getNotes,
  getNoteById,
  AddNote
}
