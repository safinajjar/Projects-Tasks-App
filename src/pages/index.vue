<script lang="ts" setup>
import { usePageStore } from '@/stores/page'

usePageStore().pageData.title = 'Home Page'
</script>

<template>
  <div>
    <h1>Home Page</h1>
  </div>
</template>
