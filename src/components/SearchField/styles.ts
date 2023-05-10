import { styled } from 'styled-components'

export const SearchFieldWrapper = styled.div`
  position: relative;
  display: flex;
  height: 40px;
`

export const SearchFieldInner = styled.div`
  cursor: pointer;

  display: flex;
  gap: 28px;
  align-items: center;

  min-width: 16px;
  min-height: 40px;

  svg {
    cursor: pointer;

    position: absolute;
    top: 50%;
    transform: translateY(-50%);

    color: #adbfdf;

    transition: 0.25s ease color;
  }

  &:hover {
    svg {
      color: ${({ theme }) => theme.palette.primary};
    }
  }
`

export const SearchFieldInput = styled.div`
  position: relative;
  padding-inline: 18px;
  border: 1px solid #eaf0fa;
  border-radius: 48px;

  span {
    position: absolute;
    transform: translateY(-50%);
    color: #adbfdf;
    transition: 0.25s ease color;
  }

  span:first-child {
    top: 50%;
  }

  span:last-child {
    cursor: pointer;
    top: 50%;
    right: 18px;
  }

  input {
    height: 100%;
    padding-inline: 28px;

    font-size: 14px;

    border-radius: 48px;
    outline: none;
  }
`
