import axios from 'axios'
axios.interceptors.request.use(config => {
    if (localStorage.token) {
        config.headers['Authorization'] = localStorage.token;
    }
    return config
},error =>{
    return Promise.reject(error)
})

function getUserInfo() {
    return new Promise((resolve, reject)=>{
        axios.get('/api/users/info/').then((res:any)=>{
            resolve(res.data)
        }).catch(res=>{
            reject(res)
        })
    })
}


export default {
    getUserInfo
}
