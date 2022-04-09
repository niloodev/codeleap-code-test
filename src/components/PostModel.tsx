// Import React.
import React from 'react'

// Import some local components to create PostModel.
import { Flex, Box, TitleHeader, IconButton, PostText, PostTitle } from './'
import { ModalTypes } from './Modal' // import modal types object

// Access state application, with hook.
import { useSelector } from 'react-redux'

// 🐸: The *moment* import, used to translate datetime to a string that contains how much time has passed!
// It is very friendly and easy to use, I highly recommend!
import moment from 'moment'

// Icons import.
import DeleteIcon from './icons/DeleteIcon'
import EditIcon from './icons/EditIcon'

// 🐸: It requests the basic properties of the post object defined by the code test.
// Excepts for openModal, that is a function that opens a modal with the current post id.
export function PostModel({
    id,
    username,
    created_datetime,
    title,
    content,
    openModal,
}: {
    id: number
    username: string
    created_datetime: string
    title: string
    content: string
    openModal: (type: keyof typeof ModalTypes, id: number) => void
}) {
    // Get user for simple string comparison. (evaluate if the current user is the "owner" of the post)
    const user = useSelector(state => state.user)

    return (
        // Flex that wrap entire PostModel.
        <Flex style={{ justifyContent: 'center', flexFlow: 'row' }}>
            {/* Box that wrap everything, animation is enabled (toggleAnimation) and gap & padding had a reajust.*/}
            <Box
                toggleAnimation
                maxWidth="722px"
                height="auto"
                style={{ gap: '12.5px', padding: '0px' }}
            >
                {/* Title of the application. */}
                <TitleHeader>
                    <PostTitle>{title}</PostTitle>

                    {/* Checks if the user is the owner, if true renders the edit and delete functions. */}
                    {user == username ? (
                        <Flex
                            style={{
                                flexFlow: 'row',
                                width: 'auto',
                                gap: '20px',
                                marginLeft: 'auto',
                                paddingLeft: '37px',
                            }}
                        >
                            <IconButton onClick={() => openModal('delete', id)}>
                                <DeleteIcon />
                            </IconButton>
                            <IconButton onClick={() => openModal('edit', id)}>
                                <EditIcon />
                            </IconButton>
                        </Flex>
                    ) : (
                        ''
                    )}
                </TitleHeader>

                {/* Box that wrap info / data. */}
                <Box
                    style={{ paddingTop: '0px', border: 'none', gap: '12.5px' }}
                >
                    <Flex
                        style={{
                            flexFlow: 'row',
                            justifyContent: 'space-between',
                        }}
                    >
                        <PostText>@{username}</PostText>
                        <PostText>
                            {moment(created_datetime).fromNow()}
                        </PostText>
                    </Flex>
                    <PostText data-primary-color>{content}</PostText>
                </Box>
            </Box>
        </Flex>
    )
}
