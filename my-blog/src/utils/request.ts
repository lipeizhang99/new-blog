import { UpdateArticleViewType } from '@/api/articles/type'

import axios from 'axios'

import type {
    AxiosInstance, CreateAxiosDefaults, InternalAxiosRequestConfig,
    AxiosRequestHeaders,
    AxiosResponse,
    AxiosRequestConfig
} from 'axios'


declare module 'axios' {
    interface AxiosRequestConfig {
        successCode?: number
    }
}

interface ApiResult<T = unknown> {
    code: number
    data: T
    message: string
}
axios.defaults.timeout = 200000
axios.defaults.withCredentials = true
class Reauest {
    private instance: AxiosInstance;
    //存放取消请求的控制器Map
    private abortControllerMap: Map<string, AbortController>

    constructor(config: CreateAxiosDefaults) {
        this.instance = axios.create(config)
        this.abortControllerMap = new Map()

        //请求拦截器
        axios.interceptors.request.use(
            //请求拦截器
            (request: InternalAxiosRequestConfig) => {
                request.headers = request.headers || ({} as AxiosRequestHeaders)
                request.headers['Content-Type'] = 'application/json; charset=utf-8'
                const controller = new AbortController()
                const url = request.url || ''
                request.signal = controller.signal
                this.abortControllerMap.set(url, controller)
                return request
            },
            Promise.reject
        )
        //响应拦截器
        axios.interceptors.response.use(
            (response: AxiosResponse) => {
                const url = response.config?.url || ''
                this.abortControllerMap.delete(url)

                const sucessCode = response.config?.successCode || 200
                if (response.data?.code !== sucessCode) {
                    return Promise.reject(response?.data)
                }
                return response.data
            }, (error) => {
                const { response } = error;
                let errMessage = '未知错误'
                if (response) {
                    // 返回错误结果
                    switch (response.status) {
                        case 400:
                            errMessage = '错误的请求'
                            break
                        case 401:
                            errMessage = '未授权，请重新登录'
                            localStorage.removeItem('token')
                            // 退出登录
                            window.location.href = '#/admin/login'
                            break
                        case 403:
                            errMessage = '拒绝访问'
                            break
                        case 404:
                            errMessage = '404请求错误,未找到该资源'
                            break
                        case 405:
                            errMessage = '请求方法未允许'
                            break
                        case 408:
                            errMessage = '请求超时'
                            break
                        case 500:
                            errMessage = '服务器端出错'
                            break
                        case 501:
                            errMessage = '网络未实现'
                            break
                        case 502:
                            errMessage = '网络错误'
                            break
                        case 503:
                            errMessage = '服务不可用'
                            break
                        case 504:
                            errMessage = '网络超时'
                            break
                        case 505:
                            errMessage = 'http版本不支持该请求'
                            break
                        default:
                            errMessage = `其他连接错误 --${response.status}`
                    }
                } else {
                    if (!window.navigator.onLine) {
                        //断网处理，跳转断网页面
                        return
                    }
                    return Promise.reject(error)
                }
                console.log('errMessage,', errMessage)
            }
        )
    }

    //取消全部请求
    cancelAllRequest() {
        for (const [_, controller] of this.abortControllerMap) {
            controller.abort()
        }
        this.abortControllerMap.clear()
    }
    //取消指定的请求
    cancelRequest(url: string | string[]) {
        const urlList = Array.isArray(url) ? url : [url]
        for (const _url of urlList) {
            this.abortControllerMap.get(_url).abort()
            this.abortControllerMap.delete(_url)
        }
    }

    request<T = unknown>(config: AxiosRequestConfig): Promise<ApiResult<T>> {
        return this.instance.request(config)
    }

    put<T = unknown>(
        url: string,
        data: UpdateArticleViewType,
        config: AxiosRequestConfig
    ): Promise<ApiResult<T>> {
        return this.instance.put(url, data, config)
    }

    get<T = unknown>(url: string, config?: AxiosRequestConfig): Promise<ApiResult<T>> {
        return this.instance.get(url, config)
    }
    post<T = unknown>(
        url: string,
        data?: unknown,
        config?: AxiosRequestConfig
    ): Promise<ApiResult<T>> {
        return this.instance.post(url, data, config)
    }
}

export const request = new Request({
    timeout: 20 * 1000,
    baseURL: import.meta.env.VITE_API_URL
})