import { motion } from 'framer-motion'
import styled, { css } from 'styled-components'

import * as m from './motion'

export const SidebarWrapper = styled(motion.div).attrs<{ isMobile: boolean }>(({ isMobile }) =>
  m.sidebarWrapperAttrs(isMobile),
)<{ isMobile: boolean }>`
  z-index: 100;

  overflow: hidden;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  justify-content: space-between;

  width: 240px;
  height: 100vh;

  color: #ffffffa6;

  background-color: ${({ theme }) => theme.palette.sidebar};

  ${({ isMobile }) =>
    isMobile
      ? css`
          position: absolute;
        `
      : css`
          position: relative;
        `}
`

export const SidebarInner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const SidebarLogo = styled.div`
  position: relative;
  height: 80px;

  display: flex;
  align-items: center;
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
      background-color: ${theme.palette.sidebarSelectedItem};
      color: #fff;

      ::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 3px;
        background-color: ${theme.palette.primary};
      }

      ::after {
        content: '';
        position: absolute;
        height: 8px;
        width: 8px;
        top: 50%;
        right: 12px;
        transform: translateY(-50%);

        border-radius: 50%;
        background: #ffd500;
        box-shadow: 0px 3px 8px rgba(237, 218, 1, 0.5);
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

export const SidebarOverlay = styled(motion.div).attrs(m.sidebarOverlayAttrs)`
  position: fixed;
  z-index: 90;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  background-color: ${({ theme }) => theme.palette.primary};
  backdrop-filter: blur(2px);
`
