// Import React.
import React from 'react'

// Import styled-components.
import styled from 'styled-components'

// Import motion.
import { motion } from 'framer-motion'

// Simple flex wrapper, just for standardization.
const Wrapper = styled(motion.div)`
    position: relative;

    width: 100%;
    height: auto;

    overflow: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column;
`

export function ColumnWrapper({ children }: { children: React.ReactNode }) {
    return <Wrapper>{children}</Wrapper>
}
