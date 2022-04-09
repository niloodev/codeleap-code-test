// import styled-components
import styled from 'styled-components'

// import motion (to make animated jsx components)
import { motion } from 'framer-motion'

// // // text variations
export const MainText = styled(motion.span)`
    font-weight: 700;
    font-size: 22px;

    &[data-bold-off] {
        font-weight: 400;
    }
`

export const SimpleText = styled(motion.span)`
    font-weight: 400;
    font-size: 16px;
`

export const PostText = styled(motion.span)`
    color: var(--tertiary);
    font-weight: 400;
    font-size: 18px;
    word-break: break-word;

    &[data-color='black'] {
        color: var(--primary);
    }
`

export const PostTitle = styled(motion.div)`
    font-size: 22px;
    font-weight: 700;

    color: var(--quaternary);
    word-break: break-all;
`
