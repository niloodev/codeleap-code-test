// Create axios instance with the CodeLeap provided url for the test.
import axios from 'axios'

export default axios.create({
    baseURL: 'https://dev.codeleap.co.uk/careers/',
})
