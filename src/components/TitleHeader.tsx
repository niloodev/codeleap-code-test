// Import React.
import React from 'react'

// Import styled-components.
import styled from 'styled-components'

// Import motion.
import { HTMLMotionProps, motion } from 'framer-motion'

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

export function TitleHeader(props: HTMLMotionProps<'div'>) {
    return <TitleHeaderStyled {...props}>{props.children}</TitleHeaderStyled>
}
