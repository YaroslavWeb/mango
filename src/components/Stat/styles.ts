import { css, styled } from 'styled-components'

import { E_StatMod } from '.'

export const StatWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7px;
  min-width: 156px;
`

export const StatText = styled.span<{ $mod: E_StatMod }>`
  ${({ theme, $mod }) => {
    switch ($mod) {
      case E_StatMod.green:
        return css`
          color: ${theme.palette.greenLight};
        `
      case E_StatMod.yellow:
        return css`
          color: ${theme.palette.yellowLight};
        `
      case E_StatMod.red:
        return css`
          color: ${theme.palette.red};
        `
    }
  }}
`

export const StatProgress = styled.div<{ $mod: E_StatMod; $progress: number }>`
  height: 8px;
  width: 100%;
  position: relative;
  overflow: hidden;

  border-radius: 12px;

  background-color: ${({ theme }) => theme.palette.milk};

  &:before {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    height: 100%;
    width: 50px;
    background-color: ${({ theme }) => theme.palette.milk};
  }

  ${({ theme, $mod, $progress }) => {
    switch ($mod) {
      case E_StatMod.green:
        return css`
          &:before {
            background-color: ${theme.palette.green};
            width: ${$progress}%;
          }
        `
      case E_StatMod.yellow:
        return css`
          &:before {
            background-color: ${theme.palette.yellow};
            width: ${$progress}%;
          }
        `
      case E_StatMod.red:
        return css`
          &:before {
            background-color: ${theme.palette.red};
            width: ${$progress}%;
          }
        `
    }
  }}
`
