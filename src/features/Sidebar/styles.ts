import { motion } from 'framer-motion'
import styled, { css } from 'styled-components'

export const SidebarWrapper = styled(motion.div)`
  z-index: 100;

  overflow: hidden;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  justify-content: space-between;

  width: ${({ theme }) => theme.sizes.sidebar.width};
  height: 100vh;

  font-size: 16px;
  color: #ffffffa6;

  background-color: ${({ theme }) => theme.palette.sidebar};
`

export const SidebarInner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const SidebarLogo = styled.div`
  position: relative;

  display: flex;
  align-items: center;

  height: 80px;
  padding-left: 12px;
`

export const SidebarList = styled.ul`
  overflow-x: hidden;
  overflow-y: auto;
  display: flex;
  flex-direction: column;

  ::-webkit-scrollbar {
    width: 2px;
  }

  ::-webkit-scrollbar-track {
    background-color: #1e1939;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #fff;
  }
`

export const SidebarListItem = styled.li<{ $isActive: boolean }>`
  position: relative;

  display: flex;
  align-items: center;
  gap: 12px;

  width: 100%;
  height: 52px;
  padding: 16px;

  ${({ $isActive, theme }) =>
    $isActive &&
    css`
      font-weight: 500;
      color: #fff;
      background-color: ${theme.palette.sidebarSelectedItem};

      ::before {
        content: '';

        position: absolute;
        top: 0;
        left: 0;

        width: 3px;
        height: 100%;

        background-color: ${theme.palette.primary};
      }

      ::after {
        content: '';

        position: absolute;
        top: 50%;
        right: 12px;
        transform: translateY(-50%);

        width: 8px;
        height: 8px;

        background: #ffd500;
        border-radius: 50%;
        box-shadow: 0 3px 8px rgb(237 218 1 / 50%);
      }
    `}
`

export const SidebarActions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;

  margin-top: 64px;
  padding-inline: 20px;
`

export const SidebarOverlay = styled(motion.div)`
  position: fixed;
  z-index: 90;
  inset: 0;

  background-color: ${({ theme }) => theme.palette.primary};
  backdrop-filter: blur(2px);
`
