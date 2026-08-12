import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { I18nProvider } from './i18n/index.jsx'
import { RouterProvider } from './router.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <I18nProvider>
      <RouterProvider>
        <App />
      </RouterProvider>
    </I18nProvider>
  </React.StrictMode>,
)
