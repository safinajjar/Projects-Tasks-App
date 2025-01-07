<script lang="ts" setup>
import { projectsQuery, type Projects } from '@/utils/supaQueries'
import type { ColumnDef } from '@tanstack/vue-table'
import { RouterLink } from 'vue-router'

usePageStore().pageData.title = 'Projects'

const projects = ref<Projects | null>(null)

const getProjects = async () => {
  const { data, error } = await projectsQuery

  if (error) {
    console.error(error)
  }

  projects.value = data
}

await getProjects()

const columns: ColumnDef<Projects[0]>[] = [
  {
    accessorKey: 'name',
    header: () => h('div', {}, 'Name'),
    cell: ({ row }) =>
      h(
        RouterLink,
        { to: `/projects/${row.original.slug}`, class: 'font-medium hover:bg-muted block w-full' },
        () => row.getValue('name'),
      ),
  },
  {
    accessorKey: 'status',
    header: () => h('div', {}, 'Status'),
    cell: ({ row }) =>
      h(
        RouterLink,
        { to: `/projects/${row.original.slug}`, class: 'font-medium hover:bg-muted block w-full' },
        () => row.getValue('status'),
      ),
  },
  {
    accessorKey: 'collaborators',
    header: () => h('div', {}, 'Collaborators'),
    cell: ({ row }) =>
      h(
        RouterLink,
        { to: `/projects/${row.original.slug}`, class: 'font-medium hover:bg-muted block w-full' },
        () => JSON.stringify(row.getValue('collaborators')),
      ),
  },
]
</script>

<template>
  <DataTable v-if="projects" :columns="columns" :data="projects" />
</template>
