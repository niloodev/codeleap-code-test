import React from 'react'

// import styled-components
import styled from 'styled-components'

// import motion (to make animated jsx components)
import { motion, MotionStyle } from 'framer-motion'

// here I setted some basic values to the application, highly customizable on style prop.
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
