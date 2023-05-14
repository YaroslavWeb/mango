import MediaAvatar from 'assets/images/avatar.png'
import { T_UserListItem } from 'components/users/UserListItem/model'

export const mockUsers: { label: string; data: T_UserListItem[] }[] = [
  {
    label: 'Операторы',
    data: [
      { avatar: MediaAvatar, label: 'Мирон Батонов' },
      { avatar: MediaAvatar, label: 'Алексей Ильин' },
      { avatar: MediaAvatar, label: 'Милана Константинопольская' },
    ],
  },
  {
    label: 'Логисты',
    data: [
      { avatar: MediaAvatar, label: 'Александра Сизых' },
      { avatar: MediaAvatar, label: 'Илья Алексеев' },
      { avatar: MediaAvatar, label: 'Владимир Петров' },
    ],
  },
  {
    label: 'Бухгалтеры',
    data: [
      { avatar: MediaAvatar, label: 'Полина Калинина' },
      { avatar: MediaAvatar, label: 'Наталья Натальева' },
      { avatar: MediaAvatar, label: 'Константин Константинопольский' },
    ],
  },
]
