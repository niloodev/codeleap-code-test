// import React (is required by eslint, if you have TSX | JSX components you have to import React)
import React from 'react'

// import routing features from react-router-dom
import { Route, Routes } from 'react-router-dom'

// import pages
import SignUp from './pages/signup'
import Main from './pages/main'

// styled-components and stylization imports
import { ThemeProvider } from 'styled-components'
import {
    GlobalStyle,
    ThemePalette,
} from './components/global-css-definition/global-style'

function App() {
    return (
        <ThemeProvider theme={ThemePalette}>
            <Routes>
                <Route path="/signup" element={<SignUp />} />
                <Route path="/main" element={<Main />} />
            </Routes>
            <GlobalStyle />
        </ThemeProvider>
    )
}

export default App
