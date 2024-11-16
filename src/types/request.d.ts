
export interface ApiResponse<T> {
  success: boolean
  code: number
  data: T
  message: string
}

// 通用的分页参数

export interface PaginationParams {
  page: number
  pageSize: number
}

// 通用的排序参数
export interface SortParams {
  sortBy?: string
  orderBy?: 'asc' | 'desc'
}

// 组合分页和排序参数
export type ListParams = PaginationParams & Partial<SortParams> 