import React from 'react'

// import styled-components
//import styled from 'styled-components'

// import motion (to make animated jsx components)
//import { motion } from 'framer-motion'

// import some local components to create PostModel
import { Flex } from './Flex'
import { Box } from './Box'
import { TitleHeader } from './TitleHeader'
import { IconButton } from './IconButton'
import { PostText } from './Text'

// icons import
import DeleteIcon from './icons/DeleteIcon'
import EditIcon from './icons/EditIcon'

export function PostModel() {
    return (
        <Flex style={{ justifyContent: 'center', flexFlow: 'row' }}>
            <Box
                maxWidth="660px"
                height="auto"
                toggleAnimation={false}
                style={{ paddingTop: '100px', gap: '12.5px' }}
            >
                <TitleHeader absolute={true}>
                    Name of Post
                    <Flex
                        style={{
                            flexFlow: 'row',
                            width: 'auto',
                            gap: '20px',
                            marginLeft: 'auto',
                        }}
                    >
                        <IconButton>
                            <DeleteIcon />
                        </IconButton>
                        <IconButton>
                            <EditIcon />
                        </IconButton>
                    </Flex>
                </TitleHeader>
                <Flex
                    style={{ flexFlow: 'row', justifyContent: 'space-between' }}
                >
                    <PostText>@Vitor</PostText>
                    <PostText>25 minutes ago</PostText>
                </Flex>
                <PostText data-color="black">
                    Curabitur suscipit suscipit tellus. Phasellus consectetuer
                    vestibulum elit. Pellentesque habitant morbi tristique
                    senectus et netus et malesuada fames ac turpis egestas.
                    Maecenas egestas arcu quis ligula mattis placerat. Duis vel
                    nibh at velit scelerisque suscipit. Duis lobortis massa
                    imperdiet quam. Aenean posuere, tortor sed cursus feugiat,
                    nunc augue blandit nunc, eu sollicitudin urna dolor sagittis
                    lacus. Fusce a quam. Nullam vel sem. Nullam cursus lacinia
                    erat.
                </PostText>
            </Box>
        </Flex>
    )
}
