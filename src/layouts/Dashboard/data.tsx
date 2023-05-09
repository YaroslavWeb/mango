import { T_MenuItem } from 'features/Sidebar/models'

export const menuItems: T_MenuItem[] = [
  {
    key: 'articles',
    label: 'dashboard.sidebar.articles',
    icon: '1',
    to: '/articles',
  },
  {
    key: 'tags',
    label: 'dashboard.sidebar.tags',
    icon: '1',
    to: '/tags',
  },
  {
    key: 'reactions',
    label: 'dashboard.sidebar.reactions',
    icon: '1',
    to: '/reactions',
  },
  {
    key: 'admins',
    label: 'dashboard.sidebar.admins',
    icon: '1',
    to: '/admins',
  },
  {
    key: 'users',
    label: 'dashboard.sidebar.users',
    icon: '1',
    to: '/users',
  },
]
