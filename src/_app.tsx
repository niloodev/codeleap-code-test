// import React (is required by eslint, if you have TSX | JSX components you have to import React)
import React from 'react'

// import routing features from react-router-dom
import { Route, Routes, useLocation } from 'react-router-dom'

// import pages
import SignUp from './pages/signup'
import Main from './pages/main'
import _404 from './pages/_404'

// styled-components, stylization imports and AnimatePresence from framer-motion
import { ThemeProvider } from 'styled-components'
import {
    GlobalStyle,
    themePalette,
} from './components/global-css-definition/global-style'

import { AnimatePresence } from 'framer-motion'

// import store of redux, and provider of react-redux
import store from './redux/store'
import { Provider as ReduxProvider } from 'react-redux'

function App() {
    // this provides location info about the current url
    const location = useLocation()

    return (
        // provides store data to all application
        <ReduxProvider store={store}>
            {/* provides ThemePalette to all styled-components nodes */}
            <ThemeProvider theme={themePalette}>
                {/* animates enter and exit animations */}
                <AnimatePresence exitBeforeEnter>
                    {/*conditional rendering based on path, location is used to force Routes to accept conditional
                    rendering - consequently making AnimatePresence work as intended */}
                    <Routes location={location} key={location.pathname}>
                        <Route
                            path="/signup"
                            element={<SignUp key="signup" />}
                        />
                        <Route path="/main" element={<Main key="main" />} />
                        <Route path="*" element={<_404 key="_404" />} />
                    </Routes>
                </AnimatePresence>
                <GlobalStyle />
            </ThemeProvider>
        </ReduxProvider>
    )
}

export default App
