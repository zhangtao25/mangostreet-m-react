import axios from 'axios'

function login(data:any) {
    console.log(data,"登录信息")
    return new Promise((resolve, reject)=>{
        axios.post('/api/users/login/',data).then((res:any)=>{
            resolve(res.data)
        }).catch(res=>{
            reject(res)
        })
    })
}

function reg(data:any) {
    console.log(data,"注册信息")
    return new Promise((resolve, reject)=>{
        axios.post('/api/users/reg/',data).then((res:any)=>{
            resolve(res.data)
        }).catch(res=>{
            reject(res)
        })
    })
}

export default {
    login,
    reg
}
