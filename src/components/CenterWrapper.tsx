// Import React.
import React from 'react'

// Import styled-components.
import styled from 'styled-components'

// Import motion.
import { motion } from 'framer-motion'

// Simple flex wrapper, just for standardization.
const Wrapper = styled(motion.main)`
    width: 100%;
    height: 100%;
    overflow: hidden;

    display: flex;
    justify-content: center;
    align-items: center;
`

export function CenterWrapper({ children }: { children: React.ReactNode }) {
    return <Wrapper>{children}</Wrapper>
}
