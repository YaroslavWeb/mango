import { UserListItem } from '../UserListItem'
import { T_UserListItem } from '../UserListItem/model'

interface I_UserListProps {
  label: string
  data: T_UserListItem[]
}

export const UserList = ({ label, data }: I_UserListProps) => {
  return (
    <div>
      <span>{label}</span>
      {data.map((item) => (
        <UserListItem key={item.label} item={item} />
      ))}
    </div>
  )
}
