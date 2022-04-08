import React from 'react'

// get useSelector from redux to check information
import { useSelector } from 'react-redux'

// get useNavigate from react-router-dom to redirect if necessary (ProtectRoute)
import { Navigate } from 'react-router-dom'

import {
    ColumnWrapper,
    MainPanel,
    TitleHeader,
    MainText,
    Flex,
    Flex as InputWrapper,
    PostModel,
    SimpleText,
    Button,
    Input,
    Box,
} from '../components'

export default function Main() {
    const user = useSelector(state => state.user)

    // protect route if user is empty
    // return user === '' ? (
    //     <Navigate to="/signup" replace />
    // ) : (
    //     <BlockWrapper>MAIN</BlockWrapper>
    // )

    return (
        <ColumnWrapper>
            <MainPanel>
                <TitleHeader>CodeLeap Network</TitleHeader>
                <Flex style={{ justifyContent: 'center', flexFlow: 'row' }}>
                    <Box maxWidth="660px" height="auto" toggleAnimation={false}>
                        <MainText>What&apos;s on your mind?</MainText>

                        <InputWrapper>
                            <SimpleText>Title</SimpleText>
                            <Input
                                textArea={false}
                                inputProps={{ placeholder: 'Hello world' }}
                            />
                        </InputWrapper>

                        <InputWrapper>
                            <SimpleText>Content</SimpleText>
                            <Input
                                textArea={true}
                                textAreaProps={{ placeholder: 'Content here' }}
                            />
                        </InputWrapper>
                        <InputWrapper
                            style={{
                                alignItems: 'flex-end',
                                padding: '10px 0px',
                            }}
                        >
                            <Button>CREATE</Button>
                        </InputWrapper>
                    </Box>
                </Flex>
            </MainPanel>
        </ColumnWrapper>
    )
}
