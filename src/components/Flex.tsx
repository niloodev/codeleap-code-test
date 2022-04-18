// Import React.
import React from 'react'

// Import styled-components.
import styled from 'styled-components'

// Import motion.
import { HTMLMotionProps, motion } from 'framer-motion'

// 🐸: Here I setted some basic values related to application design, highly customizable on style prop.
const FlexStyled = styled(motion.div)`
    width: 100%;
    display: flex;
    flex-flow: column;
    gap: 10px;
`

export function Flex(props: HTMLMotionProps<'div'>) {
    return <FlexStyled {...props}>{props.children}</FlexStyled>
}
