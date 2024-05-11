import axios from 'axios'

const getAll = () => {
    const req = axios.get(import.meta.env.VITE_HELSINSKI_API_URL);
    return req.then(res => res.data)
}

export default { getAll };