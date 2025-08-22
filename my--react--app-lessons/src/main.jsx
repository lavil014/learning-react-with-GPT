import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import Input from './input'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App/>
    <Input/>
    
  </StrictMode>,
)
