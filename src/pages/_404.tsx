import React from 'react'

// get useSelector from redux to check information
import { useSelector } from 'react-redux'

// get useNavigate from react-router-dom to redirect if necessary (ProtectRoute)
import { Navigate } from 'react-router-dom'

export default function _404() {
    const user = useSelector(state => state.user)

    // redirect to respective page
    return user === '' ? (
        <Navigate to="/signup" replace />
    ) : (
        <Navigate to="/main" replace />
    )
}
