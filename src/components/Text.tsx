// import styled-components
import styled from 'styled-components'

// import motion (to make animated jsx components)
import { motion } from 'framer-motion'

// // // text variations
export const MainText = styled(motion.span)`
    font-weight: 700;
    font-size: 22px;
`

export const SimpleText = styled(motion.span)`
    font-weight: 400;
    font-size: 16px;
`

export const PostText = styled(motion.span)`
    color: var(--tertiary);
    font-weight: 400;
    font-size: 18px;

    &[data-color='black'] {
        color: var(--primary);
    }
`
