<template>
  <div class="flex flex-col gap-2 h-[80vh]">
    <h2 class="px-1 mb-2 text-xl font-bold text-zinc-900">Menu</h2>
    <ul class="overflow-y-scroll">
      <li v-for="(category, index) in categories" :key="category.id"
        class="px-1 py-1.5 text-lg duration-100 text-zinc-900 active:bg-zinc-100" @click="$emit('onItemClick', index)">
        <span class="text-sm font-bold">{{ category.name }}</span>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import type { Category } from '@/api/category';

const { categories = [] } = defineProps<{
  categories: Category[]
}>()
defineEmits<{
  onItemClick: [index: number]
}>()
</script>

<style scoped></style>