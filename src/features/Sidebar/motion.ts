import { HTMLMotionProps } from 'framer-motion'

export const sidebarWrapperAttrs = (isMobile: boolean): HTMLMotionProps<'div'> => ({
  initial: { x: isMobile ? -250 : 0 },
  exit: { x: isMobile ? -250 : 0 },
})

export const sidebarOverlayAttrs = (): HTMLMotionProps<'div'> => ({
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
})
