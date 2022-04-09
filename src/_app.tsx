// Import React. (🐸: is required by eslint, if you have TSX | JSX components in the file you have to import React)
import React from 'react'

// Import routing features from react-router-dom.
import { Route, Routes, useLocation } from 'react-router-dom'

// Import pages.
import SignUp from './pages/signup'
import Main from './pages/main'
import _404 from './pages/_404'

// Styled-components, stylization imports and AnimatePresence from framer-motion.
import { ThemeProvider } from 'styled-components'
import {
    GlobalStyle,
    themePalette,
} from './components/global-css-definition/global-style'

import { AnimatePresence } from 'framer-motion'

// Import store of redux, and provider of react-redux.
import store from './redux/store'
import { Provider as ReduxProvider } from 'react-redux'

function App() {
    // This provides location info about the current url, I will explain the use of it further ahead.
    const location = useLocation()

    return (
        // ReduxProvider provides store data to all application.
        <ReduxProvider store={store}>
            {/* ThemeProvider provides ThemePalette to all styled-components nodes. */}
            <ThemeProvider theme={themePalette}>
                {/* Animates enter and exit animations from motion components. (used in all application) */}
                <AnimatePresence exitBeforeEnter>
                    {/*🐸: Conditional rendering based on path, *location* is used to force Routes to accept conditional
                    rendering - consequently making AnimatePresence work as intended! */}
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
