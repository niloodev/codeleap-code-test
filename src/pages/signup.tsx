import React from 'react'

// import application components
import {
    CenterWrapper,
    Box,
    Input,
    MainText,
    SimpleText,
    Button,
} from '../components'

// get useNavigate hook from react-router-dom to do imperative redirecting
import { useNavigate } from 'react-router-dom'

export default function SignUp() {
    const navigate = useNavigate()

    return (
        // wrap all components, and align it to the center
        <CenterWrapper>
            {/* box component with static width and height */}
            <Box width="440px" height="180px">
                {/* text, button and input to the basic formulary */}
                <MainText>Welcome to CodeLeap network!</MainText>
                <div
                    style={{
                        width: '100%',
                        display: 'flex',
                        flexFlow: 'column',
                        gap: '13px',
                    }}
                >
                    <SimpleText>Please enter your username</SimpleText>
                    <Input
                        textArea={false}
                        inputProps={{ placeholder: 'John doe' }}
                    />
                </div>
                <div
                    style={{
                        width: '100%',
                        display: 'flex',
                        justifyContent: 'flex-end',
                    }}
                >
                    <Button
                        onClick={() => {
                            navigate('/main')
                        }}
                    >
                        ENTER
                    </Button>
                </div>
            </Box>
        </CenterWrapper>
    )
}
