import axios from 'axios'

function getNotes(pageIndex:any) {
  return new Promise((resolve, reject) => {
    axios.get('/api/notes/?page='+pageIndex).then((res: any) => {
      resolve(res.data.results)
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
