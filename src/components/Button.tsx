import React from 'react'

// import styled-components
import Styled from 'styled-components'

// import motion (to make animated jsx components)
import { motion } from 'framer-motion'

const ButtonStyled = Styled(motion.button)`
    width: 111px;

    padding: 6px 0;

    font-size: 16px;
    font-weight: 700;

    transition: all 0.2s ease;
    border: 1px solid var(--primary);
    background-color: var(--primary);
    color: var(--quaternary);

    cursor: pointer;
    user-select: none;

    display: flex; justify-content: center; align-items: center;

    &[disabled] {
        pointer-events: none;
        border: 1px solid var(--tertiary);
        background-color: var(--tertiary);
        color: var(--secondary);
    }

    &[data-contrast = "contrast"] {
        background-color: var(--quaternary);
        color: var(--primary);
    }

    @media (max-width: 500px) {
        flex: 1;
    }
`

export function Button({
    children,
    contrast = false,
    disabled = false,
    onClick = () => {
        return
    },
}: {
    children: React.ReactNode
    contrast?: boolean
    disabled?: boolean
    onClick?: React.MouseEventHandler<HTMLButtonElement>
}) {
    return (
        <ButtonStyled
            transition={{ duration: 0.01 }}
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.05 }}
            disabled={disabled}
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
