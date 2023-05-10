import { Link } from 'react-router-dom'

import { T_MenuItem } from './models'
import * as S from './styles'

import MediaAlert from 'assets/icons/app/alert.svg'
import MediaCircleAdd from 'assets/icons/app/circle_add.svg'
import MediaLogo from 'assets/icons/logo.svg'
import { Button } from 'components/Button'

interface I_SidebarProps {
  items: T_MenuItem[]
  selectedItem: string
}

export const Sidebar = ({ items, selectedItem }: I_SidebarProps) => {
  return (
    <S.SidebarWrapper>
      <S.SidebarInner>
        <S.SidebarLogo>
          <MediaLogo />
        </S.SidebarLogo>
        <S.SidebarList>
          {items.map((item) => (
            <Link key={item.key} to={item.to}>
              <S.SidebarListItem $isActive={item.key === selectedItem}>
                {item.icon}
                <span>{item.label}</span>
              </S.SidebarListItem>
            </Link>
          ))}
        </S.SidebarList>
        <S.SidebarActions>
          <Button>
            Добавить заказ <MediaCircleAdd />
          </Button>
          <Button>
            Оплата <MediaAlert />
          </Button>
        </S.SidebarActions>
      </S.SidebarInner>
    </S.SidebarWrapper>
  )
}
