import React from 'react'

// import styled-components
import styled from 'styled-components'

// import motion (to make animated jsx components)
import { motion, MotionStyle } from 'framer-motion'

const StyledIconButton = styled(motion.div)`
    width: 30px;
    height: 30px;

    display: flex;
    justify-content: center;
    align-items: center;

    cursor: pointer;
`

export function IconButton({
    children,
    style,
}: {
    children: React.ReactNode
    style?: MotionStyle
}) {
    return (
        <StyledIconButton
            style={style}
            transition={{ duration: 0.01 }}
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.05 }}
        >
            {children}
        </StyledIconButton>
    )
}
