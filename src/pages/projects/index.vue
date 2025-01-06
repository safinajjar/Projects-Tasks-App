<script lang="ts" setup>
import supabase from '@/lib/supabaseClient'
import { h, ref } from 'vue'
import type { Tables } from '../../../database/types'
import type { ColumnDef } from '@tanstack/vue-table'
import DataTable from '@/components/ui/data-table/DataTable.vue'
import { RouterLink } from 'vue-router'

const projects = ref<Tables<'projects'>[] | null>(null)

;(async () => {
  const { data, error } = await supabase.from('projects').select()

  if (error) {
    console.error(error)
  }

  projects.value = data
})()

const columns: ColumnDef<Tables<'projects'>>[] = [
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
