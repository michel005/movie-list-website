import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'
import './global.scss'
import { BrowserRouter } from 'react-router-dom'
import { ConfigProvider } from './contexts/ConfigContext'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<BrowserRouter>
		<ConfigProvider>
			<App />
		</ConfigProvider>
	</BrowserRouter>
)
