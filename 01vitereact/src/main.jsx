import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'


createRoot(document.getElementById('root')).render(
    <>
      <App />
    </>
)

// createRoot runs the algorithm of the latest react fibre and uses the concept reconciliation 
// If we generaly pass the javascript without react we need to render by dom by creating using id but incase here render() function takes care of this job
