import axios from 'axios'
axios.interceptors.request.use(config => {
    if (localStorage.token) {
        config.headers['Authorization'] = localStorage.token;
    }
    return config
},error =>{
    return Promise.reject(error)
})

function getNotes() {
    return new Promise((resolve, reject)=>{
        axios.get('/api/notes/all/').then((res:any)=>{
            resolve(res.data)
        }).catch(res=>{
            reject(res)
        })
    })
}
function getNoteById(id:any) {
    return new Promise((resolve, reject)=>{
        axios.get(`/api/notes/${id}/`).then((res:any)=>{
            resolve(res.data)
        }).catch(res=>{
            reject(res)
        })
    })
}
function AddNote(formData:any) {
    return new Promise((resolve, reject)=>{
        axios.post(`/api/notes/`,formData).then((res:any)=>{
            resolve(res.data)
        }).catch(res=>{
            reject(res)
        })
    })
}

export default {
    getNotes,
    getNoteById,
    AddNote
}
