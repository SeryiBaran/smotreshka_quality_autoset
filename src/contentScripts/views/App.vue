<script setup lang="ts">
import { useTimeoutFn, useToggle } from '@vueuse/core'
import 'uno.css'
import { storageQuality } from '~/logic/storage'

const [show, toggle] = useToggle(false)

const button = ref<HTMLButtonElement | null>(null)

const timeout = useTimeoutFn(() => {
  button.value = Array.from(document.querySelectorAll<HTMLButtonElement>('.player-settings-menu .player-settings-options.body2 button')).find(btn => new RegExp(storageQuality.value, 'i').test(btn.textContent || '')) || null
}, 3000)

function clickButton() {
  if (button.value !== null) {
    button.value.click()
  }
}

watch(button, (newv) => {
  if (newv !== null && newv.value !== null) {
    timeout.stop()
    clickButton()
  }
})
</script>

<template>
  <div v-if="false" class="fixed right-0 bottom-0 m-5 z-100 flex items-end font-sans select-none leading-1em">
    <div
      v-show="show"
      class="bg-white text-gray-800 rounded-lg shadow w-max h-min"
      p="x-4 y-2"
      m="y-auto r-2"
      transition="opacity duration-300"
      :class="show ? 'opacity-100' : 'opacity-0'"
    >
      <h1 class="text-lg">
        Vitesse WebExt
      </h1>
      <SharedSubtitle />
    </div>
    <button
      class="flex w-10 h-10 rounded-full shadow cursor-pointer border-none"
      bg="teal-600 hover:teal-700"
      @click="toggle()"
    >
      <pixelarticons-power class="block m-auto text-white text-lg" />
    </button>
  </div>
</template>
