import React from 'react'

// import some local components to create PostModel
import { Flex, Box, TitleHeader, IconButton, PostText, PostTitle } from './'

// access state application
import { useSelector } from 'react-redux'

// moment import, used to translate datetime to a string that contains how much time has passed
import moment from 'moment'

// icons import
import DeleteIcon from './icons/DeleteIcon'
import EditIcon from './icons/EditIcon'

export function PostModel({
    username,
    created_datetime,
    title,
    content,
}: {
    username: string
    created_datetime: string
    title: string
    content: string
}) {
    // get user for simple string comparison
    const user = useSelector(state => state.user)

    return (
        // flex that wrap entire PostModel
        <Flex style={{ justifyContent: 'center', flexFlow: 'row' }}>
            {/* box that wrap everything, animation is enabled and gap and padding had a reajust */}
            <Box
                maxWidth="722px"
                height="auto"
                style={{ gap: '12.5px', padding: '0px' }}
            >
                {/* title of the application */}
                <TitleHeader>
                    <PostTitle>{title}</PostTitle>

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
                            <IconButton>
                                <DeleteIcon />
                            </IconButton>
                            <IconButton>
                                <EditIcon />
                            </IconButton>
                        </Flex>
                    ) : (
                        ''
                    )}
                </TitleHeader>
                {/* box that wrap info / data */}
                <Box
                    style={{ paddingTop: '0px', border: 'none', gap: '12.5px' }}
                    toggleAnimation={false}
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
                    <PostText data-color="black">{content}</PostText>
                </Box>
            </Box>
        </Flex>
    )
}
