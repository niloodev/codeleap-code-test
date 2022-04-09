import React from 'react'

// import styled-components
import styled from 'styled-components'

// import motion (to make animated jsx components)
import { motion } from 'framer-motion'

const Panel = styled(motion.div)`
    height: auto;
    width: 100%;
    max-width: 800px;
    overflow-x: hidden;

    gap: 35px;
    padding-bottom: 50px;
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;

    background-color: var(--quaternary);
`

export function MainPanel({ children }: { children?: React.ReactNode }) {
    return (
        <Panel
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
        >
            {children}
        </Panel>
    )
}
