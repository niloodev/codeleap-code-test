import React from 'react'

// import styled-components
import styled from 'styled-components'

// import motion (to make animated jsx components)
import { motion } from 'framer-motion'

const Wrapper = styled(motion.div)`
    width: 100%;
    height: auto;

    overflow: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column;
`

export function ColumnWrapper({ children }: { children: React.ReactNode }) {
    return <Wrapper>{children}</Wrapper>
}
