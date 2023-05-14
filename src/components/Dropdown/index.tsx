import { PropsWithChildren, ReactNode, useRef, useState } from 'react'

import * as S from './styles'

import { useClickOutside } from 'hooks/useClickOutside'

interface I_DropdownProps {
  menu: ReactNode
}

export const Dropdown = ({ children, menu }: PropsWithChildren<I_DropdownProps>) => {
  const [isOpen, setIsOpen] = useState(false)

  const menuRef = useRef<HTMLDivElement>(null)

  const handleToggleMenu = () => {
    setIsOpen((prev) => !prev)
  }

  const handleCloseMenu = () => {
    setIsOpen(false)
  }

  useClickOutside<HTMLDivElement>(menuRef, handleCloseMenu, isOpen)

  return (
    <S.DropdownWrapper>
      <S.DropdownLabel onClick={handleToggleMenu}>{children}</S.DropdownLabel>
      {isOpen && <S.MenuWrapper>{menu}</S.MenuWrapper>}
    </S.DropdownWrapper>
  )
}
