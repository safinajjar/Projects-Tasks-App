<script lang="ts" setup>
import { usePageStore } from '@/stores/page'

usePageStore().pageData.title = '404 Page not found'
</script>

<template>
  <div>
    <h1>404 Page not found</h1>
  </div>
</template>
