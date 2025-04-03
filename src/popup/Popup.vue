<script setup lang="ts">
import { storageQuality } from '~/logic/storage'

function openOptionsPage() {
  browser.runtime.openOptionsPage()
}
</script>

<template>
  <main class="w-[300px] px-4 py-5 text-center text-gray-700">
    <Logo />
    <div>Попап</div>
    <SharedSubtitle />

    <button class="btn mt-2" @click="openOptionsPage">
      Открыть настройки
    </button>
    <div class="mt-2">
      <!-- <span v-if="false" class="opacity-50">Storage:</span> {{ storageDemo }} -->
      <div>Качество: <input v-model="storageQuality" class="border border-gray-400 rounded px-2 py-1 mt-2"></div>
    </div>
  </main>
</template>
