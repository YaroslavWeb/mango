import { HTMLMotionProps } from 'framer-motion'

import * as v from './variants'

export const sidebarWrapperAttrs = (isMobile: boolean): HTMLMotionProps<'div'> => ({
  initial: { x: isMobile ? -250 : 0 },
  animate: v.E_SidebarVariant.opened,
  exit: { x: isMobile ? -250 : 0 },
  variants: v.sidebarWrapperVariants,
})

export const sidebarOverlayAttrs = (): HTMLMotionProps<'div'> => ({
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
})
