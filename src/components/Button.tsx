// Import React.
import React from 'react'

// Import styled-components.
import styled from 'styled-components'

// Import motion.
import { HTMLMotionProps, motion } from 'framer-motion'

// Get react-redux hooks to access redux state.
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

// 🐸: The *contrast* property sets the style variant of the button.
// The *disabled*, as the name saids, is if the component is disabled or not.
// The *loadable* sets if the button will be affected by application global loading - when it is making request, per example.
export function Button({
    children,
    contrast = false,
    disabled = false,
    loadable = false,
    ...props
}: {
    children: React.ReactNode
    contrast?: boolean
    disabled?: boolean
    loadable?: boolean
} & HTMLMotionProps<'button'>) {
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
                    ? props.onClick
                    : () => {
                          return
                      }
            }
        >
            {children}
        </ButtonStyled>
    )
}
