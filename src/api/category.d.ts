import type { ApiResponse } from '@/types/request.d'

// Category 相关的类型定义
interface Category {
  id: string;
  name: string;
  col: number;
  urlname: string;
}

interface CategoryList {
  categorys: Category[]
}

export type CategoryResponse = ApiResponse<CategoryList>