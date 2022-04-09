import React from 'react'

// import styled-components
import styled from 'styled-components'

// import motion (to make animated jsx components)
import { motion } from 'framer-motion'

// get load status from redux
import { useSelector } from 'react-redux'

const ButtonStyled = styled(motion.button)`
    width: 111px;

    padding: 7.5px 0;

    font-size: 14.5px;
    font-weight: 700;

    transition: all 0.2s ease;
    border: 1px solid var(--primary);
    background-color: var(--primary);
    color: var(--quaternary);

    cursor: pointer;
    user-select: none;

    display: flex;
    justify-content: center;
    align-items: center;

    &[disabled] {
        pointer-events: none;
        border: 1px solid var(--tertiary);
        background-color: var(--tertiary);
        color: var(--secondary);
    }

    &[data-contrast='contrast'] {
        background-color: var(--quaternary);
        color: var(--primary);
    }

    @media (max-width: 500px) {
        width: 100%;
    }
`

export function Button({
    children,
    contrast = false,
    disabled = false,
    loadable = false,
    onClick = () => {
        return
    },
}: {
    children: React.ReactNode
    contrast?: boolean
    disabled?: boolean
    loadable?: boolean
    onClick?: React.MouseEventHandler<HTMLButtonElement>
}) {
    const load = useSelector(state => state.load)
    return (
        <ButtonStyled
            transition={{ duration: 0.01 }}
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.05 }}
            disabled={disabled || (loadable ? load : false)}
            data-contrast={contrast ? 'contrast' : 'non-contrast'}
            onClick={
                !disabled
                    ? onClick
                    : () => {
                          return
                      }
            }
        >
            {children}
        </ButtonStyled>
    )
}
