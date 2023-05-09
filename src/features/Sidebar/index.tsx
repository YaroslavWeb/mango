import { AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'

import { T_MenuItem } from './models'
import { sidebarActions } from './slice'
import * as S from './styles'

import { useMediaQuery } from 'hooks/useMediaQuery'
import { useStoreDispatch } from 'hooks/useStoreDispatch'
import { useStoreSelector } from 'hooks/useStoreSelector'
import { E_MediaQuery } from 'styles/theme'

interface I_SidebarProps {
  items: T_MenuItem[]
  selectedItem: string
}

export const Sidebar = ({ items, selectedItem }: I_SidebarProps) => {
  const dispatch = useStoreDispatch()
  const { isOpen } = useStoreSelector((state) => state.sidebar)
  const isMobile = useMediaQuery(E_MediaQuery.md)

  const handleClose = () => {
    dispatch(sidebarActions.closeSidebar())
  }

  return (
    <AnimatePresence>
      {(!isMobile || isOpen) && (
        <>
          <S.SidebarWrapper isMobile={isMobile}>
            <S.SidebarInner>
              <S.SidebarLabel>
                <S.SidebarTitle>logo</S.SidebarTitle>
              </S.SidebarLabel>
              <S.SidebarList>
                {items.map((item) => (
                  <Link key={item.key} to={item.to}>
                    <S.SidebarListItem isActive={item.key === selectedItem}>
                      <S.SidebarListItemIcon>{item.icon}</S.SidebarListItemIcon>
                      <S.SidebarListItemTextOverflow>
                        <S.SidebarListItemText>{item.label}</S.SidebarListItemText>
                      </S.SidebarListItemTextOverflow>
                    </S.SidebarListItem>
                  </Link>
                ))}
              </S.SidebarList>
            </S.SidebarInner>
          </S.SidebarWrapper>
          {isMobile && <S.SidebarOverlay onClick={handleClose} />}
        </>
      )}
    </AnimatePresence>
  )
}
