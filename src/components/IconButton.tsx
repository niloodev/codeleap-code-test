// Import React.
import React from 'react'

// Import styled-components.
import styled from 'styled-components'

// Import motion.
import { HTMLMotionProps, motion } from 'framer-motion'

const StyledIconButton = styled(motion.div)`
    width: 30px;
    height: 30px;

    display: flex;
    justify-content: center;
    align-items: center;

    cursor: pointer;
`

export function IconButton(props: HTMLMotionProps<'div'>) {
    return (
        <StyledIconButton
            {...props}
            transition={{ duration: 0.01 }}
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.05 }}
        >
            {props.children}
        </StyledIconButton>
    )
}
