import React from 'react'

// import styled-components
import styled from 'styled-components'

// import motion (to make animated jsx components)
import { motion, MotionStyle } from 'framer-motion'

const TitleHeaderStyled = styled(motion.div)`
    width: calc(100% - 74px);
    background-color: var(--primary);
    color: var(--quaternary);

    padding: 27px 37px;

    font-size: 22px;
    font-weight: 700;

    margin-bottom: 9px;
    display: flex;
    align-items: center;
`

export function TitleHeader({
    children,
    style,
    absolute = false,
}: {
    children?: React.ReactNode
    style?: MotionStyle
    absolute?: boolean
}) {
    return (
        <TitleHeaderStyled data-absolute={absolute} style={style}>
            {children}
        </TitleHeaderStyled>
    )
}
