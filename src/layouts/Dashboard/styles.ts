import styled from 'styled-components'

export const Layout = styled.div`
  display: flex;
  flex-direction: 'row';
  min-height: 100vh;
`

export const LayoutWrapper = styled.div`
  display: flex;
  flex: auto;
  flex-direction: column;

  width: calc(100% - ${({ theme }) => theme.sizes.sidebar}px);
  height: 100vh;

  background: #f1f4f9;
`

export const LayoutContainer = styled.div`
  position: relative;

  overflow: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  min-height: calc(100vh - ${({ theme }) => theme.sizes.header.height}px);
  padding: 16px;
`

export const LayoutContent = styled.div`
  height: fit-content;
`
export const LayoutFooter = styled.div`
  margin-top: 8px;
  text-align: center;
`
