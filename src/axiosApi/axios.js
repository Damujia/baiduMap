import axios from 'axios'
// 响应时间
// axios.defaults.timeout = 5 * 1000
// 配置请求头
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
// 配置接口地址
// 环境的切换
if (process.env.NODE_ENV === 'development') {
  axios.defaults.baseURL = 'http://192.168.1.50:8080/elijah202104sy'
} else if (process.env.NODE_ENV === 'debug') {
  // 
} else if (process.env.NODE_ENV === 'production') {
  axios.defaults.baseURL = 'http://192.168.1.50:8080/elijah202104sy'
}

// POST传参序列化(添加请求拦截器)
axios.interceptors.request.use(
  config => {
    return config
  },
  err => {
    return Promise.reject(err)
  }
)
// 返回状态判断(添加响应拦截器)
axios.interceptors.response.use(
  res => {
    return res
  },
  err => {
    return Promise.reject(err)
  }
)
// 发送请求
export function post (url, params) {
  return new Promise((resolve, reject) => {
    axios({
      method: 'post',
      url,
      data: params
    })
      // axios
      //   .post(url, params)
      .then(
        res => {
          resolve(res)
        },
        err => {
          reject(err)
        }
      )
      .catch(() => { })
  })
}
export function get (url, params) {
  return new Promise((resolve) => {
    axios({
      method: 'get',
      url,
      params
    })
      // axios
      //   .get(url, {
      //     params: params
      //   })
      .then(res => {
        resolve(res)
      })
      .catch(() => { })
  })
}
