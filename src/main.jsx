import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Router from './router.jsx'
import MainBg from './pages/mainBg.jsx'
import Shop from './pages/shop.jsx'
import Footer from './pages/footer.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router />
    <MainBg/>
    < Shop />
    < Footer />
  </StrictMode>,
)
