import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { AuthProvider } from './context/AuthContext'
import { ThemeContextProvider } from './context/ThemeContext'
import { CssBaseline } from '@mui/material'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <ThemeContextProvider>
            <CssBaseline />
            <AuthProvider>
                <App />
            </AuthProvider>
        </ThemeContextProvider>
    </React.StrictMode>,
)
