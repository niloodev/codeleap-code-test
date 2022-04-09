import React from 'react'

// import application components
import {
    CenterWrapper,
    Box,
    Input,
    MainText,
    SimpleText,
    Button,
    Flex as InputWrapper,
} from '../components'

// get useNavigate hook from react-router-dom to do imperative redirecting
import { useNavigate } from 'react-router-dom'

// get redux data hook, dispatch and necessary actions
import { useSelector, useDispatch } from 'react-redux'
import { setUser } from '../actions'

export default function SignUp() {
    const navigate = useNavigate()
    // user and dispatch
    const user = useSelector(state => state.user)
    const dispatch = useDispatch()

    return (
        // wrap all components, and align it to the center
        <CenterWrapper>
            {/* box component with static width and height */}
            <Box toggleAnimation maxWidth="440px" height="180px">
                {/* title */}
                <MainText>Welcome to CodeLeap network!</MainText>
                {/* basic user formulary */}
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
