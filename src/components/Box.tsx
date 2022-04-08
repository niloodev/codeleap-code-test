import React from 'react'

// import styled-components
import styled from 'styled-components'

// import motion (to make animated jsx components)
import { motion } from 'framer-motion'
import { MotionStyle } from 'framer-motion/types/motion/types'

const BoxStyled = styled(motion.div)`
    position: relative;
    padding: 20px 30px;
    border: 1px solid var(--tertiary);

    background-color: var(--quaternary);
    display: flex;
    flex-flow: column;
    justify-content: center;
    gap: 25px;

    flex: 1;
`

export function Box({
    children,
    maxWidth = 'auto',
    height = 'auto',
    toggleAnimation = true,
    style,
}: {
    children?: React.ReactNode
    maxWidth?: string
    height?: string
    toggleAnimation?: boolean
    style?: MotionStyle
}) {
    const animatePresenceProperties = toggleAnimation
        ? {
              initial: { opacity: 0, scale: 0.6 },
              animate: { opacity: 1, scale: 1 },
              exit: { opacity: 0, scale: 0.6 },
          }
        : null
    return (
        <BoxStyled
            style={{ ...style, maxWidth, height }}
            {...animatePresenceProperties}
        >
            {children}
        </BoxStyled>
    )
}
