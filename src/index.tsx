// render _app.tsx component to DOM
import React from 'react'
import ReactDOM from 'react-dom'

// BrowserRouter works similar as a provider, to make Routes and Route work on all application
import { BrowserRouter } from 'react-router-dom'

// import application component
import App from './_app'

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById('root')
)
