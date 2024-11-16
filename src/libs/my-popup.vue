<template>
  <div>
    <Teleport to="body">
      <transition name="fade">
        <div v-if="isShow" @click="isShow = false"
          class="fixed top-0 left-0 z-40 w-screen h-screen backdrop-blur-sm bg-zinc-900/80">
        </div>
      </transition>
      <transition name="popup-down-up">
        <div v-if="isShow" v-bind="$attrs" class="fixed bottom-0 z-50 w-screen bg-white">
          <slot />
        </div>
      </transition>
    </Teleport>
  </div>
</template>

<script setup lang="ts">

const isShow = defineModel<boolean>({
  default: false
})
const isLockScroll = useScrollLock(document.body)

watchEffect(() => {
  isLockScroll.value = isShow.value
})
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0
}

.popup-down-up-enter-active,
.popup-down-up-leave-active {
  transition: transform 0.3s ease;
}

.popup-down-up-enter-from,
.popup-down-up-leave-to {
  transform: translateY(100%);
}
</style>
