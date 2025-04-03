<script setup lang="ts">
import logo from '~/assets/logo.svg'
import { storageQuality } from '~/logic/storage'
</script>

<template>
  <main class="px-4 py-10 text-center text-gray-700 dark:text-gray-200">
    <img :src="logo" class="icon-btn mx-2 text-2xl" alt="extension icon">
    <div>Настройки</div>
    <SharedSubtitle />

    <!-- <input v-if="false" v-model="storageDemo" class="border border-gray-400 rounded px-2 py-1 mt-2"> -->
    <div>Качество: <input v-model="storageQuality" class="border border-gray-400 rounded px-2 py-1 mt-2"></div>

    <div class="mt-4">
      Сделано на vitesse-webext <pixelarticons-zap class="align-middle inline-block" />
    </div>
  </main>
</template>
