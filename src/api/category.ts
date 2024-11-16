import { request } from '@/utils/request'

export interface Category {
  id: string
  name: string
  col?: number
  urlname?: string
}

export interface CategoryList {
  categorys: Category[]
}

// 获取所有分类
export const getAllCategory = (): Promise<CategoryList> => {
  return request({
    url: '/category',
    method: 'GET'
  })
}
