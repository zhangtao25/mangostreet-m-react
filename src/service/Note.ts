import axios from 'axios'

export interface sss {
    [index:number]:any,
}


function getNotesBasicInfo() {
    return new Promise((resolve, reject)=>{
        axios.get('/api/notesbasic').then((res:any)=>{
            resolve(res.data)
        }).catch(res=>{
            reject(res)
        })
    })
}

function getNotes() {
    return new Promise((resolve, reject)=>{
        axios.get('/api/v1/notes').then((res:any)=>{
            resolve(res.data)
        }).catch(res=>{
            reject(res)
        })
    })
}
function getNote(id:any) {
    return new Promise((resolve, reject)=>{
        axios.get(`/api/v1/note/${id}`).then((res:any)=>{
            resolve(res.data)
        }).catch(res=>{
            reject(res)
        })
    })
}

export default {
    getNotesBasicInfo,
    getNotes,
    getNote
}
