import React from 'react'

// import styled-components
import styled from 'styled-components'

// import motion (to make animated jsx components)
import { motion } from 'framer-motion'

const Wrapper = styled(motion.main)`
    width: 100%;
    height: 100%;
    overflow: hidden;

    display: flex;
    justify-content: center;
    align-items: center;
`

export function CenterWrapper({ children }: { children: React.ReactNode }) {
    return <Wrapper>{children}</Wrapper>
}
