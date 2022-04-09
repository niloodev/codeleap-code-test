// Import React.
import React from 'react'
import ReactDOM from 'react-dom'

// 🐸: BrowserRouter works similar as a provider, to make react-router-dom functionalities work as intended
// in all components of the application.
import { BrowserRouter } from 'react-router-dom'

// Import application component.
import App from './_app'

// Render _app.tsx component to DOM.
ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById('root')
)
