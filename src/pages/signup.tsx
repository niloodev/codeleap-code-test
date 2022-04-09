// Import React.
import React from 'react'

// Import application custom components.
import {
    CenterWrapper,
    Box,
    Input,
    MainText,
    SimpleText,
    Button,
    Flex as InputWrapper,
} from '../components'

// Get useNavigate hook from react-router-dom to do imperative redirecting.
import { useNavigate } from 'react-router-dom'

// Get redux data hook, dispatch and necessary actions.
import { useSelector, useDispatch } from 'react-redux'
import { setUser } from '../actions'

export default function SignUp() {
    // Setting hooks.
    const navigate = useNavigate()
    const user = useSelector(state => state.user)
    const dispatch = useDispatch()

    return (
        // Wrap all components, and align it to the center.
        <CenterWrapper>
            {/* 🐸: Box component with maxWidth and height properties, this will be used a lot in the application! */}
            <Box toggleAnimation maxWidth="440px" height="180px">
                {/* MainText as a title. */}
                <MainText>Welcome to CodeLeap network!</MainText>
                {/* Basic user formulary, with InputWrapper (Flex) and some basic components. */}
                <InputWrapper>
                    <SimpleText>Please enter your username</SimpleText>
                    <Input
                        inputProps={{
                            placeholder: 'John doe',
                            value: user,
                            onChange: e => {
                                dispatch(setUser(e.target.value))
                            },
                            onKeyDown: e =>
                                e.key == 'Enter' ? navigate('/main') : null,

                            maxLength: 30,
                        }}
                    />
                </InputWrapper>
                <InputWrapper style={{ alignItems: 'flex-end' }}>
                    <Button
                        disabled={user == ''}
                        onClick={() => navigate('/main')}
                    >
                        ENTER
                    </Button>
                </InputWrapper>
                {/* /////////////////// */}
            </Box>
        </CenterWrapper>
    )
}
