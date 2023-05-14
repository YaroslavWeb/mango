import { mockUsers } from './data'
import * as S from './styles'

import MediaArrowDown from 'assets/icons/app/arrow_down.svg'
import MediaPlaceholder from 'assets/images/placeholder.png'
import { Dropdown } from 'components/Dropdown'
import { UserList } from 'components/users/UserList'

export const HeaderProfile = () => {
  return (
    <S.HeaderProfileWrapper>
      <Dropdown menu={<MenuProfile />}>
        <S.DropdownInner>
          <span>ИП Сидорова Александра Михайловна</span>
          <MediaArrowDown />
        </S.DropdownInner>
      </Dropdown>

      <Dropdown menu={<MenuProfile />}>
        <S.DropdownInner>
          <img src={MediaPlaceholder} alt='avatar' />
          <MediaArrowDown />
        </S.DropdownInner>
      </Dropdown>
    </S.HeaderProfileWrapper>
  )
}

const MenuProfile = () => {
  return (
    <S.MenuInner>
      <div>Упоров Кирилл</div>
      <div>Директор • Санкт-Петербург</div>
      <div>8 (800) 333-17-21</div>
      <div>hi@skilla.ru</div>
      {mockUsers.map((list) => (
        <UserList key={list.label} {...list} />
      ))}
    </S.MenuInner>
  )
}
