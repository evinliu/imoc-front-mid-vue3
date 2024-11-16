<template>
  <div class="sticky top-0 left-0 z-10 bg-white">
    <ul
      class="flex overflow-hidden overflow-x-auto relative p-1 text-xs text-zinc-600"
      ref="ulTarget">
      <!-- 滑块 -->
      <li
        ref="sliderTarget"
        :style="sliderStyle"
        class="absolute h-[22px] bg-zinc-900 rounded-lg duration-200"></li>

      <li
        class="fixed items-center top-0 right-[-1px] h-4 px-1 flex bg-white z-20 shadow-l-white">
        <icon-ci-hamburger-md @click="isShowPopup = true" class="w-2 h-2" />
      </li>
      <li
        @click="handleItemClick(index)"
        :class="{ 'text-zinc-100': currentCategoryIndex === index }"
        class="z-10 px-1.5 py-0.5 rounded-md duration-200 shrink-0 last:mr-4"
        v-for="(item, index) in currentCategoryList"
        :key="item.id"
        :ref="el => (itemRefs[index] = el as HTMLElement)">
        {{ item.name }}
      </li>
    </ul>
    <my-popup v-model="isShowPopup">
      <menu-index :categories="currentCategoryList" @onItemClick="handleItemClick" />
    </my-popup>
  </div>
</template>

<script setup lang="ts">
import type { Category } from '@/api/category'
import { ALL_CATEGORY_ITEM } from '@/constants'
import * as R from 'remeda'
import { type CSSProperties } from 'vue'

interface Props {
  categoryList: Category[]
}

const sliderTarget = ref<HTMLElement | null>(null)
const sliderStyle = ref<CSSProperties>({})

const { categoryList = [] } = defineProps<Props>()
const currentCategoryList = computed(() => [ALL_CATEGORY_ITEM, ...R.clone(categoryList)])

const isShowPopup = ref(false)

// 获取 ul 元素
const ulTarget = ref<HTMLElement | null>(null)
// 获取所有的 item 元素
const itemRefs = ref<(HTMLElement | null)[]>([])
// const setItemRef = (el: HTMLElement | null) => {
//   if (el) {
//     itemRefs.push(el)
//   }
// }
const currentCategoryIndex = ref(0)
// 数据改变之后,DOM 变化之前
// onBeforeUpdate(() => {
//   itemRefs = []
// })
const handleItemClick = (index: number) => {
  currentCategoryIndex.value = index
  isShowPopup.value = false
}
watchEffect(
  () => {
    const categoryIndex = currentCategoryIndex.value
    const item = itemRefs.value[categoryIndex]
    if (!item) return
    const { width } = item.getBoundingClientRect()
    sliderStyle.value = {
      transform: `translateX(${item.offsetLeft - 10}px)`,
      width: `${width}px`,
    }
  },
  {
    flush: 'post',
  },
)
</script>
