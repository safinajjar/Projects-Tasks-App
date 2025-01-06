<script lang="ts" setup>
import supabase from '@/lib/supabaseClient'
import type { Tables } from '../../../database/types'
import type { ColumnDef } from '@tanstack/vue-table'
import { RouterLink } from 'vue-router'

const tasks = ref<Tables<'tasks'>[] | null>(null)

const getTasks = async () => {
  const { data, error } = await supabase.from('tasks').select()

  if (error) {
    console.error(error)
  }

  tasks.value = data
}

await getTasks()

const columns: ColumnDef<Tables<'tasks'>>[] = [
  {
    accessorKey: 'name',
    header: () => h('div', {}, 'Name'),
    cell: ({ row }) =>
      h(
        RouterLink,
        { to: `/tasks/${row.original.id}`, class: 'font-medium hover:bg-muted block w-full' },
        () => row.getValue('name'),
      ),
  },
  {
    accessorKey: 'status',
    header: () => h('div', {}, 'Status'),
    cell: ({ row }) =>
      h(
        RouterLink,
        { to: `/tasks/${row.original.id}`, class: 'font-medium hover:bg-muted block w-full' },
        () => row.getValue('status'),
      ),
  },
  {
    accessorKey: 'due_date',
    header: () => h('div', {}, 'Due Date'),
    cell: ({ row }) =>
      h(
        RouterLink,
        { to: `/tasks/${row.original.id}`, class: 'font-medium hover:bg-muted block w-full' },
        () => row.getValue('due_date'),
      ),
  },
  {
    accessorKey: 'project_id',
    header: () => h('div', {}, 'Project'),
    cell: ({ row }) =>
      h(
        RouterLink,
        { to: `/tasks/${row.original.id}`, class: 'font-medium hover:bg-muted block w-full' },
        () => row.getValue('project_id'),
      ),
  },
  {
    accessorKey: 'collaborators',
    header: () => h('div', {}, 'Collaborators'),
    cell: ({ row }) =>
      h(
        RouterLink,
        { to: `/tasks/${row.original.id}`, class: 'font-medium hover:bg-muted block w-full' },
        () => JSON.stringify(row.getValue('collaborators')),
      ),
  },
]
</script>

<template>
  <DataTable v-if="tasks" :columns="columns" :data="tasks" />
</template>
