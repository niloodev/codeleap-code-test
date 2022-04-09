// Import React.
import React from 'react'

// Get react-redux hooks.
import { useSelector } from 'react-redux'

// Get useNavigate from react-router-dom to declarative redirecting.
import { Navigate } from 'react-router-dom'

export default function _404() {
    const user = useSelector(state => state.user)

    // 🐸: Checks if the user is empty, redirects to signup, if else redirects to main page.
    return user === '' ? (
        <Navigate to="/signup" replace />
    ) : (
        <Navigate to="/main" replace />
    )
}
