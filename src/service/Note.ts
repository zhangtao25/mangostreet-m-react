import axios from 'axios'

export interface sss {
    data: sssx
}
export interface sssx {
    notes: sssc
}
export interface sssc {
    [index:number]:any,
    forEach(param: (item:any,index:number) => any): any;
}

function getNotesBasicInfo() {
    return new Promise((resolve, reject)=>{
        axios.get('http://localhost:8080/v1/notes').then((res:sss)=>{
            let arr:any = []
            res.data.notes.forEach((item, index)=>{
                console.log(item,index)
                arr.push({
                    "author": item.author,
                    "avatar": item.avatar,
                    "likeNum": item.like_num,
                    "noteTitle": item.note_title,
                    "noteCover": item.note_cover,
                    "noteId": item.noteId
                })
            });
            resolve(arr)
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
function AddNote(formData:any) {
    return new Promise((resolve, reject)=>{
        axios.post(`/api/v1/note`,formData).then((res:any)=>{
            resolve(res.data)
        }).catch(res=>{
            reject(res)
        })
    })
}

export default {
    getNotesBasicInfo,
    getNotes,
    getNote,
    AddNote
}
