import React from 'react'

// import styled-components
import styled from 'styled-components'

// import motion (to make animated jsx components)
import { motion, HTMLMotionProps } from 'framer-motion'

// get load state from redux
import { useSelector } from 'react-redux'

// (I made one component that joins input and textarea, to make easier to applicate it on app)
const InputStyled = styled(motion.input)`
    padding: 6px 11px;
    height: 16px;

    border-radius: 4px;
    border: 1px solid var(--tertiary);
`

const TextAreaStyled = styled(motion.textarea)`
    height: 62px;
    padding: 6px 11px;
    resize: none;

    border-radius: 4px;
    border: 1px solid var(--tertiary);
`

export function Input({
    textArea = false,
    loadable = false,
    inputProps,
    textAreaProps,
}: {
    textArea?: boolean
    loadable?: boolean
    inputProps?: HTMLMotionProps<'input'>
    textAreaProps?: HTMLMotionProps<'textarea'>
}) {
    const load = useSelector(state => state.load)

    return textArea ? (
        <TextAreaStyled disabled={loadable ? load : false} {...textAreaProps} />
    ) : (
        <InputStyled disabled={loadable ? load : false} {...inputProps} />
    )
}
