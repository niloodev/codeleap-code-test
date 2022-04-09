/* eslint-disable @typescript-eslint/no-explicit-any */

// Import React and some hooks.
import React, { useEffect, useRef, useState } from 'react'

// Import styled-components.
import styled from 'styled-components'

// Import motion.
import { motion, AnimatePresence, HTMLMotionProps } from 'framer-motion'

// All components used in modals.
import {
    Box,
    MainText,
    Flex as InputWrapper,
    SimpleText,
    Input,
    Button,
} from './'

// Dispatch hook, its type and the necessary actions.
import { useDispatch } from 'react-redux'
import { Dispatch } from 'redux'
import { deletePost, patchPost } from '../actions'

// Types of modal.
// 🐸: All modals in modalType have to accept the following properties:
// close: A simple function that returns nothing, its used to modals have control above theirselves open state.
// postId: The post id that the modal is related to.
// dispatch: The dispatch function provided by ModalWrapper (all modals component).
const ModalType = {
    // Edit modal.
    edit: ({
        close,
        postId,
        dispatch,
        ...props
    }: HTMLMotionProps<'div'> & {
        close: () => void
        postId: number
        dispatch: Dispatch<any>
    }): JSX.Element => {
        // Hook that sets the state of the formulary used on Edit Modal.
        const [postForm, setPostForm] = useState({ title: '', content: '' })
        return (
            // Basic formulary.
            <Box
                {...props}
                toggleAnimation
                maxWidth="660px"
                height="310px"
                style={{
                    alignSelf: 'center',
                }}
            >
                <MainText>Edit item</MainText>
                <InputWrapper>
                    <SimpleText>Title</SimpleText>
                    <Input
                        loadable
                        inputProps={{
                            placeholder: 'Hello world',
                            value: postForm.title,
                            onChange: e =>
                                setPostForm({
                                    ...postForm,
                                    title: e.target.value,
                                }),
                        }}
                    />
                </InputWrapper>
                <InputWrapper>
                    <SimpleText>Content</SimpleText>
                    <Input
                        loadable
                        textArea
                        textAreaProps={{
                            placeholder: 'Content here',
                            value: postForm.content,
                            onChange: e =>
                                setPostForm({
                                    ...postForm,
                                    content: e.target.value,
                                }),
                        }}
                    />
                </InputWrapper>
                <InputWrapper style={{ alignItems: 'flex-end' }}>
                    <Button
                        loadable
                        disabled={
                            postForm.title == '' || postForm.content == ''
                                ? true
                                : false
                        }
                        onClick={() => {
                            dispatch(
                                patchPost(
                                    postId,
                                    postForm.title,
                                    postForm.content
                                )
                            )
                            close()
                        }}
                    >
                        SAVE
                    </Button>
                </InputWrapper>
            </Box>
        )
    },
    // Delete modal.
    delete: ({
        close,
        postId,
        dispatch,
        ...props
    }: HTMLMotionProps<'div'> & {
        close: () => void
        postId: number
        dispatch: Dispatch<any>
    }): JSX.Element => {
        return (
            // Basic formulary used on Delete Modal.
            <Box {...props} toggleAnimation maxWidth="660px" height="125px">
                <MainText data-bold-off>
                    Are you sure you want to delete this item?
                </MainText>
                <InputWrapper style={{ flexFlow: 'row-reverse' }}>
                    <Button
                        contrast
                        onClick={() => {
                            dispatch(deletePost(postId))
                            close()
                        }}
                    >
                        OK
                    </Button>
                    <Button contrast onClick={close}>
                        Cancel
                    </Button>
                </InputWrapper>
            </Box>
        )
    },
}

// ModalBackground and ModalWrapper stylization and configuration.
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

    /* 🐸: I didn't used var() function here because I needed to apply opacity to *tertiary* color, so I choosed
    to use arrow function style. */
    background-color: ${props => props.theme.colors.tertiary + 'CC'};

    @media (max-width: 600px) {
        width: 100%;
        height: 100%;
        padding: 0;

        align-items: center;
    }
`

// 🐸: ModalWrapper or Modal requires the following properties:
// type: Is the ModalType key that will be used in the Wrapper. (per example: "delete" is DeleteModal).
// open: Make ModalWrapper controls the renderization of the modals and background in a declarative way (React pattern).
// close: A simple function that returns nothing, its used to modals have control above theirselves open state - it is passed through the hierarchy to modals.
export function Modal({
    type,
    open = false,
    postId,
    close = () => {
        return
    },
}: {
    type: keyof typeof ModalType
    open?: boolean
    postId: number
    close: () => void
}) {
    // Dispatch for modals functionality. (will be passed to children modals)
    const dispatch = useDispatch()

    // Get ModalBody (JSX.Element) based on the type key of ModalType.
    const ModalBody = ModalType[type]

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const ref = useRef<any>(null) // Ref to make outside click work.

    // Sets keyboard listener to close modal, and remove it on unmount.
    useEffect(() => {
        const c = (e: KeyboardEvent) => (e.key == 'Escape' ? close() : null)
        window.addEventListener('keydown', c)
        return () => window.removeEventListener('keydown', c)
    }, [open])

    // Click-outside-close function handler. (uses ref)
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
        // Animate modals entrance and exit.
        <AnimatePresence exitBeforeEnter>
            {/* Conditional rendering based on open value */}
            {open ? (
                <ModalBackground
                    ref={ref}
                    key="modal"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    {/* The custom child modal defined by type */}
                    <ModalBody
                        close={close}
                        postId={postId}
                        dispatch={dispatch}
                    />
                </ModalBackground>
            ) : (
                <></>
            )}
        </AnimatePresence>
    )
}

// Exports ModalType for type (or anything similar) purposes.
export const ModalTypes = ModalType
