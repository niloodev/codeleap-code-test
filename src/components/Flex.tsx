// Import React.
import React from 'react'

// Import styled-components.
import styled from 'styled-components'

// Import motion.
import { motion, MotionStyle } from 'framer-motion'

// 🐸: Here I setted some basic values related to application design, highly customizable on style prop.
const FlexStyled = styled(motion.div)`
    width: 100%;
    display: flex;
    flex-flow: column;
    gap: 10px;
`

export function Flex({
    children,
    style,
}: {
    children?: React.ReactNode
    style?: MotionStyle
}) {
    return <FlexStyled style={style}>{children}</FlexStyled>
}
