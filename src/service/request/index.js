import axios from 'axios'
import { TIMEOUT, BASE_URL_Three } from './config'
import useMainStore from '@/store/modules/main'
const mainStore = useMainStore()

class HYRequest {
  constructor(baseURL, TIMEOUT) {
    this.instance = axios.create({
      baseURL,
      TIMEOUT
    })
    this.instance.interceptors.request.use(config => {
      // 携带Token
      config.headers = {
        authorization: localStorage.getItem('token')
      }
      // 加载动画Loading
      mainStore.isloading = true
      return config
    }, err => {
      return err
    })
    this.instance.interceptors.response.use(config => {
      mainStore.isloading = false
      return config
    }, err => {
      mainStore.isloading = false
      return err
    })

  }

  request(config) {
    return new Promise((resolve, reject) => {
      this.instance.request(config).then(res => {
        resolve(res.data)
      }).catch(err => {
        reject(err)
      })
    })
  }

  get(config) {
    return this.request({ ...config, method: "get" })
  }

  post(config) {
    return this.request({ ...config, method: "post" })
  }
}

export default new HYRequest(BASE_URL_Three)

