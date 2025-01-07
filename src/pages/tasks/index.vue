<script lang="ts" setup>
import { tasksWithProjectsQuery, type TaskWithProjects } from '@/utils/supaQueries'
import { columns } from '@/utils/tableColumns/taskColumns'

usePageStore().pageData.title = 'My Tasks'

const tasks = ref<TaskWithProjects | null>(null)

const getTasks = async () => {
  const { data, error, status } = await tasksWithProjectsQuery

  console.log('error', error)

  if (error) {
    useErrorStore().setError({ error, customCode: status })
  }

  tasks.value = data
}

await getTasks()
</script>

<template>
  <DataTable v-if="tasks" :columns="columns" :data="tasks" />
</template>
