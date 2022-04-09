// Import React.
import React, { useState, useEffect } from 'react'

// Get react-redux hooks.
import { useSelector, useDispatch } from 'react-redux'

// Get application actions.
import { getPosts, addPost } from '../actions'

// 🐸: In signup page we get useNavigate hook to make imperative redirecting, now we're using Navigate node
// to do declarative redirecting, since we're going to protect this route if the *user is not defined in the store.
import { Navigate } from 'react-router-dom'

// Import application custom components.
import {
    ColumnWrapper,
    MainPanel,
    TitleHeader,
    MainText,
    Flex,
    Flex as InputWrapper, // 🐸: Flex component is used as simple Flex div, I assigned a new name to it just for organization!
    PostModel,
    Modal,
    ModalTypes,
    SimpleText,
    Button,
    Input,
    Box,
} from '../components'

// AnimatePresence to animate exit and entrance animations of the post component.
import { AnimatePresence } from 'framer-motion'

export default function Main() {
    // Set redux hooks.
    const { posts, user } = useSelector(state => state)
    const dispatch = useDispatch()

    // Set state of this functional component, basically the form values.
    const [postForm, setPostForm] = useState({ title: '', content: '' })

    // Set state of the modal management, and its function.
    // 🐸: This could be done in a better way with material-ui per example, but since I chose to not use any
    // ready-to-use component framework this is the approach that I choosed (I REALLY LOVE FEEDBACK, feel free!)
    const [modalManager, setManager] = useState({
        open: false,
        type: 'delete',
        postId: 0,
    })
    // openModal function.
    function openModal(type: keyof typeof ModalTypes, postId: number) {
        if (!postId) throw new Error('ModalError: postId is required')
        if (modalManager.open) return // cannot open modal if is already open
        setManager({ open: true, type, postId })
    }

    // Function that executes after first mounting, and in unmounting of the component.
    useEffect(() => {
        // Get the current posts.
        dispatch(getPosts())
        // Set update frequency.
        const id = setInterval(() => dispatch(getPosts()), 30000)
        // Dispose auto update after the component unmounts.
        return () => {
            clearInterval(id)
        }
    }, [])

    // Simple route protection, just to make the application more "reliable".
    return user === '' ? (
        // Declarative redirection.
        <Navigate to="/signup" replace />
    ) : (
        // Wraps everything in a column flex with some pre-determined properties.
        <ColumnWrapper>
            {/* 🐸: This is the "all-modals" component, configured by the modalManager, its easy to add new modals!
            You just have to go in Modal.tsx in components/ and add it in ModalType following some patterns. */}
            <Modal
                postId={modalManager.postId}
                type={modalManager.type as keyof typeof ModalTypes}
                open={modalManager.open}
                close={() => setManager({ ...modalManager, open: false })}
            />
            {/* The MainPanel, basically the main wrapper of everything in the main page. */}
            <MainPanel>
                {/* Title. */}
                <TitleHeader>CodeLeap Network</TitleHeader>
                {/* Post formulary with custom components. */}
                <Flex style={{ justifyContent: 'center', flexFlow: 'row' }}>
                    <Box maxWidth="660px" height="auto">
                        <MainText>
                            Hey {user}! What&apos;s on your mind?
                        </MainText>

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
                        <InputWrapper
                            style={{
                                alignItems: 'flex-end',
                            }}
                        >
                            <Button
                                loadable
                                disabled={
                                    postForm.title == '' ||
                                    postForm.content == ''
                                        ? true
                                        : false
                                }
                                onClick={() =>
                                    dispatch(
                                        addPost(
                                            postForm.title,
                                            postForm.content
                                        )
                                    )
                                }
                            >
                                CREATE
                            </Button>
                        </InputWrapper>
                    </Box>
                </Flex>
                {/* Animates the presence of the post components.*/}
                <AnimatePresence>
                    {posts.map(post => (
                        <PostModel
                            key={post.id}
                            id={post.id}
                            openModal={openModal}
                            title={post.title}
                            content={post.content}
                            created_datetime={post.created_datetime}
                            username={post.username}
                        />
                    ))}
                </AnimatePresence>
            </MainPanel>
        </ColumnWrapper>
    )
}
