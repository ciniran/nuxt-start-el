export default function ({ $axios, redirect }) {
    //请求前注册
    $axios.onRequest(config => {
        console.log('Making request to ' + config.url)
    })
    //统一处理请求错误
    $axios.onError(error => {
        const code = parseInt(error.response && error.response.status)
        if (code === 400) {
            redirect('/400')
        }
    })
}