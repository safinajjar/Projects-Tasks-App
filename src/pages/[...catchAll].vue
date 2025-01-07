<script lang="ts" setup>
import { useErrorStore } from '@/stores/error'
usePageStore().pageData.title = '404 Page not found'

useErrorStore().setError({
  error: 'Page not found',
  customCode: 404
})
</script>

<script setup lang="ts"></script>

<template>
  <AppErrorPage />
</template>
