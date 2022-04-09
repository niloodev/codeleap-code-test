// Import React.
import React from 'react'

// Import styled-components.
import styled from 'styled-components'

// Import motion.
import { HTMLMotionProps, motion } from 'framer-motion'

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

export function MainPanel(props: HTMLMotionProps<'div'>) {
    return (
        <Panel
            {...props}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
        >
            {props.children}
        </Panel>
    )
}
