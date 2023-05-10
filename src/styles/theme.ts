// Source: https://getbootstrap.com/docs/4.0/layout/grid/
export enum E_MediaQuery {
  xl = '(max-width: 1140px)',
  lg = '(max-width: 960px)',
  md = '(max-width: 720px)',
  sm = '(max-width: 540px)',
}

export const theme = {
  palette: {
    primary: '#005FF8',
    primaryHover: '#0024CB',
    primaryActive: '#274BC8',
    sidebar: '#091336',
    sidebarSelectedItem: 'rgba(216, 228, 251, 0.32)',

    greenLight: '#00A775',
    green: '#28A879',
    yellowLight: '#FFB800',
    yellow: '#FFD500',
    redLight: '#EA1A4F',
    red: '#EA1A4F',
    white: '#FFFFFF',
    gray: '#899CB1',
    milk: '#DEE6F5',
  },
  media: {
    xl: E_MediaQuery.xl,
    lg: E_MediaQuery.lg,
    md: E_MediaQuery.md,
    sm: E_MediaQuery.sm,
  },
  sizes: {
    header: { height: 64 },
    sidebar: { width: 240 },
  },
}

export type Theme = typeof theme
