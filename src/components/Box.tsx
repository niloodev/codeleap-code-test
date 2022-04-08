import React from 'react'

// import styled-components
import Styled from 'styled-components'

// import motion (to make animated jsx components)
import { motion } from 'framer-motion'

const BoxStyled = Styled(motion.div)`
    padding: 20px 30px;
    border: 1px solid var(--tertiary);

    background-color: var(--quaternary);
    display: flex; flex-flow: column; 
    justify-content: center;
    gap: 25px;

    @media(max-width: 500px) {
        padding: 25px 30px;
    }
`

export function Box({
    children,
    width = '100px',
    height = '100px',
}: {
    children: React.ReactNode
    width?: string
    height?: string
}) {
    return (
        <BoxStyled
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.6 }}
            style={{ width, height }}
        >
            {children}
        </BoxStyled>
    )
}
