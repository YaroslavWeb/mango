import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import { App } from './App.tsx'

import { store } from 'store/index.ts'
import { GlobalStyles } from 'styles/global.ts'
import { theme } from 'styles/theme.ts'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <App />
        <GlobalStyles />
      </BrowserRouter>
    </ThemeProvider>
  </Provider>,
)
