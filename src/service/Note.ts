import axios from 'axios'

export interface sss {
    [index:number]:any,
}
class Test {
    // 字段
    engine:object;

    // 构造函数
    constructor(engine:sss) {
        this.engine = engine
    }
}

function getNotesBasicInfo() {
    return new Promise((resolve, reject)=>{
        axios.get('/api/notesbasic').then(res=>{
            resolve(new Test(res.data))
        }).catch(res=>{
            reject(res)
        })
    })
}

export default {
    getNotesBasicInfo
}