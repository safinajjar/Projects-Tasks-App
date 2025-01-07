<script lang="ts" setup>
import AppErrorPage from '@/components/AppError/AppErrorPage.vue'
usePageStore().pageData.title = '404 Page not found'
</script>

<script setup lang="ts"></script>

<template>
  <AppErrorPage />
</template>
