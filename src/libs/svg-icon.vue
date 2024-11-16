<template>
  <div>
   <svg aria-hidden="true">
      <use :xlink:href="symbolId" :fill="color" :class="fillClass" />
    </svg>
  </div>
</template>

<script setup lang="ts">
interface Props {
  name: string,
  color?: string,
  fillClass?: string
}
const { name, color, fillClass } = defineProps<Props>()

const symbolId = computed(() => `#icon-${name}`)
</script>

<style scoped></style>