import { motion } from 'framer-motion'

import styled, { css } from 'styled-components'

import { E_ButtonMod, E_ButtonSize } from '.'

import { T_StyledVariants } from 'models/styled'

interface ButtonProps {
  $mod: E_ButtonMod
  $size: E_ButtonSize
  disabled: boolean
}

export const Button = styled.button<ButtonProps>`
  cursor: pointer;
  user-select: none;

  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;

  width: 100%;
  padding: 0 16px;
  border-radius: 4px;

  font-size: 18px;
  font-weight: 400;
  line-height: 28px;

  background: ${({ theme }) => theme.palette.white};
  border: none;

  transition: 0.25s color ease, 0.25s background-color ease;

  ${({ $size }) => sizes[$size]};

  ${({ theme, $mod }) => {
    switch ($mod) {
      case E_ButtonMod.primary:
        return css`
          background-color: ${theme.palette.primary};
          color: ${theme.palette.white};

          &:hover {
            background-color: ${theme.palette.primary_hover};
          }

          &:active {
            background-color: ${theme.palette.primary_active};
          }
        `
      case E_ButtonMod.outline:
        return css`
          box-shadow: rgba(0, 0, 0, 0.5) 0 3px 7px -3px, 0 6px 0 0 ${theme.palette.white};
        `
    }
  }};

  svg {
    width: 24px;
    height: 24px;
  }
`

const sizes: T_StyledVariants<E_ButtonSize> = {
  regular: css`
    height: 48px;
  `,
  small: css`
    height: 40px;
  `,
}
