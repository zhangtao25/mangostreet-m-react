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

export default {
    getNotesBasicInfo
}