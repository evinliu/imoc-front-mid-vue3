import type { ApiResponse } from '@/types/request.d'
import axios, { type AxiosError, type AxiosResponse, type InternalAxiosRequestConfig, type AxiosRequestHeaders } from 'axios'

export const request = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_API_PREFIX,
  timeout: 10000,
})

// 添加请求拦截器
request.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    // 在发送请求之前做些什么，例如添加token
    const token = localStorage.getItem('token')
    if (token) {
      if (!config.headers) {
        config.headers = {} as AxiosRequestHeaders
      }
      config.headers['Authorization'] = `Bearer ${token}`
    }
    return config
  },
  (error: AxiosError) => {
    return Promise.reject(error)
  }
)

// 添加响应拦截器
request.interceptors.response.use(
  <T>(response: AxiosResponse<ApiResponse<T>>) => {
    const { success, message, data } = response.data
    if (success) {
      return data
    }
    return Promise.reject(new Error(message))
  },
  (error: AxiosError) => {
    if (error.response) {
      switch (error.response.status) {
        case 401:
          // 未授权，可以在这里处理登出逻辑
          break
        case 404:
          // 请求不存在
          break
        case 500:
          // 服务器错误
          break
      }
    }
    return Promise.reject(error)
  }
)
