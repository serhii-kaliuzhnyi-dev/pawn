import './assets/main.css'
import '@fontsource/roboto'

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './tournament/store'

import './i18n'
import { ThemeProvider } from '@mui/material'
import { muiTheme } from './constants/muiTheme'
import { I18nextProvider } from 'react-i18next'
import i18n from './i18n'

const container = document.getElementById('root')

if (!container) throw new Error('Failed to find the root element')

const root = createRoot(container)

root.render(
  <StrictMode>
    <ThemeProvider theme={muiTheme}>
      <Provider store={store}>
        <BrowserRouter>
          <I18nextProvider i18n={i18n}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <App />
            </LocalizationProvider>
          </I18nextProvider>
        </BrowserRouter>
      </Provider>
    </ThemeProvider>
  </StrictMode>
)
