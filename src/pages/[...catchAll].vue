<script lang="ts" setup>
import { useErrorStore } from '@/stores/error'
usePageStore().pageData.title = '404 Page not found'

useErrorStore().setError()
</script>

<script setup lang="ts"></script>

<template>
  <AppErrorPage />
</template>
