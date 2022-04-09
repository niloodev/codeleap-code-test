import React, { useEffect, useRef } from 'react'

// import styled-components
import styled from 'styled-components'

// import motion (to make animated jsx components)
import { motion, AnimatePresence, HTMLMotionProps } from 'framer-motion'

// all modals components
import {
    Box,
    MainText,
    Flex as InputWrapper,
    SimpleText,
    Input,
    Button,
} from './'

// types of modal
const ModalType = {
    edit: ({
        close,
        ...props
    }: HTMLMotionProps<'div'> & { close: () => void }): JSX.Element => {
        return (
            <Box
                {...props}
                maxWidth="660px"
                height="310px"
                style={{
                    alignSelf: 'center',
                }}
            >
                <MainText>Edit item</MainText>
                <InputWrapper>
                    <SimpleText>Title</SimpleText>
                    <Input inputProps={{ placeholder: 'Hello world' }} />
                </InputWrapper>
                <InputWrapper>
                    <SimpleText>Content</SimpleText>
                    <Input
                        textArea={true}
                        textAreaProps={{ placeholder: 'Content here' }}
                    />
                </InputWrapper>
                <InputWrapper style={{ alignItems: 'flex-end' }}>
                    <Button>SAVE</Button>
                </InputWrapper>
            </Box>
        )
    },
    delete: ({
        close,
        ...props
    }: HTMLMotionProps<'div'> & { close: () => void }): JSX.Element => {
        return (
            <Box {...props} maxWidth="660px" height="125px">
                <MainText data-bold-off>
                    Are you sure you want to delete this item?
                </MainText>
                <InputWrapper style={{ flexFlow: 'row-reverse' }}>
                    <Button contrast={true}>OK</Button>
                    <Button contrast={true} onClick={close}>
                        Cancel
                    </Button>
                </InputWrapper>
            </Box>
        )
    },
}

// modal background and modal wrapper stylization and configuration
const ModalBackground = styled(motion.div)`
    width: calc(100% - 80px);
    height: calc(100% - 80px);

    top: 0px;

    position: fixed;
    display: flex;
    flex-flow: row;
    justify-content: center;

    padding: 40px;
    z-index: 5;

    background-color: rgba(119, 119, 119, 0.8);

    @media (max-width: 600px) {
        width: 100%;
        height: 100%;
        padding: 0;

        align-items: center;
    }
`

export function Modal({
    type,
    open = false,
    close = () => {
        return
    },
}: {
    type: keyof typeof ModalType
    open?: boolean
    close: () => void
}) {
    // get ModalBody base on modal type provided
    const ModalBody = ModalType[type]

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const ref = useRef<any>(null) // ref to make outside click work

    // sets key listener to close modal, and ends it on component unmount
    useEffect(() => {
        const c = (e: KeyboardEvent) => (e.key == 'Escape' ? close() : null)
        window.addEventListener('keydown', c)
        return () => window.removeEventListener('keydown', c)
    }, [open])

    // click outside close handler
    useEffect(() => {
        const listener = (event: MouseEvent | TouchEvent) => {
            // Do nothing if clicking ref's element or descendent elements
            if (ref.current == event.target) close()
        }
        document.addEventListener('mousedown', listener)
        document.addEventListener('touchstart', listener)
        return () => {
            document.removeEventListener('mousedown', listener)
            document.removeEventListener('touchstart', listener)
        }
    }, [ref, close])

    return (
        <AnimatePresence exitBeforeEnter>
            {open ? (
                <ModalBackground
                    ref={ref}
                    key="modal"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    <ModalBody close={close} />
                </ModalBackground>
            ) : (
                <></>
            )}
        </AnimatePresence>
    )
}

// exports ModalType for type uses
export const ModalTypes = ModalType
