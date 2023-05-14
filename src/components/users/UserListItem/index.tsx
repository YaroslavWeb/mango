import { T_UserListItem } from './model'

interface I_UserListItemProps {
  item: T_UserListItem
}

export const UserListItem = ({ item }: I_UserListItemProps) => {
  return (
    <div>
      <img alt='avatar' src={item.avatar} />
      <span>{item.label}</span>
    </div>
  )
}
