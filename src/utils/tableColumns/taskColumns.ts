import type { ColumnDef } from '@tanstack/vue-table'
import { RouterLink } from 'vue-router'
import type { TaskWithProjects } from '../supaQueries'

export const columns: ColumnDef<TaskWithProjects[0]>[] = [
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
    accessorKey: 'projects',
    header: () => h('div', {}, 'Project'),
    cell: ({ row }) =>
      row.original.projects &&
      h(
        RouterLink,
        {
          to: `/projects/${row.original.projects.slug}`,
          class: 'font-medium hover:bg-muted block w-full',
        },
        () => row.original.projects?.name,
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
