import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./index.css";
import "semantic-ui-css/semantic.min.css";
import "../src/Components/MatrixAnimation/MatrixAnimation.css"

import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
