import axios from 'axios'

const baseUrl = '/api/people' // from 'http://localhost:3001/api/persons'

const getAll = () => {
    const req = axios.get(baseUrl);
    return req.then(res => res.data)
}

const create = newObject => {
    const req = axios.post(baseUrl, newObject)
    return req.then(res => res.data)
}

const update = (id, newObject) => {
    const req = axios.put(`${baseUrl}/${id}`, newObject)
    return req.then(res => res.data)
}

const destroy = (id) => {
    return axios.delete(`${baseUrl}/${id}`)
}

export default { getAll, create, update, destroy }

