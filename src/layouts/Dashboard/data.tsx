import MediaBriefcase from 'assets/icons/app/briefcase-outline.svg'
import MediaCalls from 'assets/icons/app/calls.svg'
import MediaCharTimeline from 'assets/icons/app/chart_timeline.svg'
import MediaDocuments from 'assets/icons/app/documents.svg'
import MediaLibrary from 'assets/icons/app/local_library.svg'
import MediaMail from 'assets/icons/app/mail_outline.svg'
import MediaOrders from 'assets/icons/app/orders.svg'
import MediaPeople from 'assets/icons/app/people.svg'
import MediaProfile from 'assets/icons/app/profile.svg'
import MediaSettings from 'assets/icons/app/settings.svg'

import { T_MenuItem } from 'features/Sidebar/models'

export const menuItems: T_MenuItem[] = [
  {
    key: 'totals',
    label: 'Итоги',
    icon: <MediaCharTimeline />,
    to: '/calls',
  },
  {
    key: 'orders',
    label: 'Заказы',
    icon: <MediaOrders />,
    to: '/calls',
  },
  {
    key: 'messages',
    label: 'Сообщения',
    icon: <MediaMail />,
    to: '/calls',
  },
  {
    key: 'calls',
    label: 'Звонки',
    icon: <MediaCalls />,
    to: '/calls',
  },
  {
    key: 'partners',
    label: 'Контрагенты',
    icon: <MediaPeople />,
    to: '/calls',
  },
  {
    key: 'documents',
    label: 'Документы',
    icon: <MediaDocuments />,
    to: '/calls',
  },
  {
    key: 'performers',
    label: 'Исполнители',
    icon: <MediaProfile />,
    to: '/calls',
  },
  {
    key: 'reports',
    label: 'Отчеты',
    icon: <MediaBriefcase />,
    to: '/calls',
  },
  {
    key: 'library',
    label: 'База знаний',
    icon: <MediaLibrary />,
    to: '/calls',
  },
  {
    key: 'settings',
    label: 'Настройки',
    icon: <MediaSettings />,
    to: '/calls',
  },
]
