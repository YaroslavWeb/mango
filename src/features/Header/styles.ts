import { styled } from 'styled-components'

export const Header = styled.header`
  display: flex;
  gap: 16px;
  align-items: center;
  justify-content: space-evenly;

  min-height: ${({ theme }) => theme.sizes.header.height}px;
  padding-inline: 16px;

  background-color: ${({ theme }) => theme.palette.white};
  box-shadow: 0 4px 5px #e9edf3;
`
