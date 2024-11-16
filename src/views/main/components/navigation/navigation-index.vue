<template>
  <mobile-navigation :category-list="categoryList" />
</template>

<script setup lang="ts">
import { getAllCategory } from '@/api/category'
import type { Category } from '@/api/category'
const categoryList = ref<Category[]>([])

const getCategoryList = async () => {
  const data = await getAllCategory()
  categoryList.value = data.categorys
}

getCategoryList()
</script>

<style scoped></style>