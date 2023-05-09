import { Variants } from 'framer-motion'

export enum E_SidebarVariant {
  collapsed = 'collapsed',
  opened = 'opened',
}

export const sidebarWrapperVariants: Variants = {
  [E_SidebarVariant.collapsed]: {
    x: 0,
    width: 88,
    transition: {
      stiffness: 0,
    },
  },
  [E_SidebarVariant.opened]: {
    x: 0,
    width: 240,
    transition: {
      stiffness: 0,
    },
  },
}
