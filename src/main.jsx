import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx';
// import Body from './Component/body';
// import LeftPart from './Component/left_part'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {/* <LeftPart /> */}
  </StrictMode>,
)