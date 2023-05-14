import { styled } from 'styled-components'

export const DropdownWrapper = styled.div`
  position: relative;
`

export const DropdownLabel = styled.div`
  cursor: pointer;
  user-select: none;

  display: flex;
  align-items: center;

  height: 100%;
`

export const MenuWrapper = styled.div`
  position: absolute;
  padding: 20px 32px 32px;
  background-color: ${({ theme }) => theme.palette.white};
`
