import { PropsWithChildren } from 'react'

import * as S from './styles'

export enum E_ButtonMod {
  primary = 'primary',
  outline = 'outline',
  text = 'text',
}

export enum E_ButtonSize {
  regular = 'regular',
  small = 'small',
}

interface I_ButtonProps {
  onClick?: () => void
  mod?: E_ButtonMod
  size?: E_ButtonSize
  disabled?: boolean
}

const ButtonComponent = ({
  children,
  onClick,
  mod = E_ButtonMod.primary,
  disabled = false,
  size = E_ButtonSize.regular,
}: PropsWithChildren<I_ButtonProps>) => (
  <S.Button onClick={onClick} $mod={mod} disabled={disabled} $size={size}>
    {children}
  </S.Button>
)

ButtonComponent.mod = E_ButtonMod
ButtonComponent.size = E_ButtonSize

export const Button = ButtonComponent
