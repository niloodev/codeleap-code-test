// here we will define base url to the API connection
import axios from 'axios'

export default axios.create({
    baseURL: 'https://dev.codeleap.co.uk/careers/',
})
