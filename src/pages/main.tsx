import React, { useState, useEffect } from 'react'

// get useSelector from redux to check information
import { useSelector, useDispatch } from 'react-redux'

// get actions
import { getPosts, addPost } from '../actions'

// get useNavigate from react-router-dom to redirect if necessary (ProtectRoute)
import { Navigate } from 'react-router-dom'

// import application components
import {
    ColumnWrapper,
    MainPanel,
    TitleHeader,
    MainText,
    Flex,
    Flex as InputWrapper, // Flex component is used as global flex div, and InputWrapper
    PostModel,
    Modal,
    ModalTypes,
    SimpleText,
    Button,
    Input,
    Box,
} from '../components'

// animate presence to posts list
import { AnimatePresence } from 'framer-motion'

export default function Main() {
    // get redux state info and dispatch function
    const { posts, user } = useSelector(state => state)
    const dispatch = useDispatch()

    // title and content values to post
    const [postForm, setPostForm] = useState({ title: '', content: '' })

    // modal management functions and state
    const [modalManager, setManager] = useState({ open: true, type: 'delete' })
    function openModal(type: keyof typeof ModalTypes) {
        setManager({ open: true, type })
    }

    // gets posts after component did mounted, add update function and removes it on component did unmount
    useEffect(() => {
        dispatch(getPosts())
        const id = setInterval(() => dispatch(getPosts()), 2000)
        return () => {
            clearInterval(id)
        }
    })

    // protect route if user is empty
    return user === '' ? (
        // navigate to signup page
        <Navigate to="/signup" replace />
    ) : (
        // wraps everything in a column flex
        <ColumnWrapper>
            {/* modal wrapper toggle */}
            <Modal
                type={modalManager.type as keyof typeof ModalTypes}
                open={modalManager.open}
                close={() => setManager({ ...modalManager, open: false })}
            />
            {/* its the page main panel, contains everything */}
            <MainPanel>
                {/* title */}
                <TitleHeader>CodeLeap Network</TitleHeader>
                {/* post formulary */}
                <Flex style={{ justifyContent: 'center', flexFlow: 'row' }}>
                    <Box maxWidth="660px" height="auto" toggleAnimation={false}>
                        <MainText>
                            Hey {user}! What&apos;s on your mind?
                        </MainText>

                        <InputWrapper>
                            <SimpleText>Title</SimpleText>
                            <Input
                                textArea={false}
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
                                textArea={true}
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
                                disabled={
                                    postForm.title == '' ||
                                    postForm.content == ''
                                        ? true
                                        : false
                                }
                                loadable={true}
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
                {/* //////////// */}
                <AnimatePresence>
                    {posts.map(post => (
                        <PostModel
                            key={post.id}
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
