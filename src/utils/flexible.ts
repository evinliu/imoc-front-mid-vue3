import { MOBILE_WIDTH } from '@/constants'
import { useWindowSize } from '@vueuse/core'
import { computed } from 'vue'

export const useIsMobileTerminal = () => {
  const { width } = useWindowSize()
  const isMobileTerminal = computed(() => {
    return width.value < MOBILE_WIDTH
  })

  return {
    isMobileTerminal,
  }
}

// 动态计算根元素字体大小，最大为40px
export const useRem = () => {
  const { width } = useWindowSize()
  document.addEventListener('DOMContentLoaded', () => {
    document.documentElement.style.fontSize = `${Math.min(width.value / 10, 40)}px`
  })
}
