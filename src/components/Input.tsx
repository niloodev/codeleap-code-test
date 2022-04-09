// Import React.
import React from 'react'

// Import styled-components.
import styled from 'styled-components'

// Import motion.
import { motion, HTMLMotionProps } from 'framer-motion'

// Get react-redux hook.
import { useSelector } from 'react-redux'

// 🐸: I made one component that joins input and textarea components, to make easier to applicate it on app.
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

// 🐸: Same as Button, Input have a *loadable* property that defines if this component will load together with the application.
// *textArea* property sets if the component is an Input or a TextArea.
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
