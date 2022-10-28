import axios from 'axios';
const URL_API = 'https://airlineflight.herokuapp.com';

export const getFlight = async (origin, destiny) => {
    try {
        const {data} = await axios.get(`${URL_API}/flight?origin=${origin}&destiny=${destiny}`)
        return data;
    } catch (error) {
        return error
    }
}
