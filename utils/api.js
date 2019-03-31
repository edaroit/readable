import axios from 'axios'

const API_URL = 'localhost:3001'

let { token } = localStorage
/* eslint-disable no-multi-assign */
if (!token)
  token = localStorage.token = Math.random()
    .toString(36)
    .substr(-8)
/* eslint-enable no-multi-assign */

const headers = {
  Accept: 'application/json',
  Authorization: token,
}

/* eslint-disable no-unused-vars */
const get = resource => axios.get(`${API_URL}/${resource}`, { headers })

const patch = (resource, data) =>
  axios.patch(`${API_URL}/${resource}`, data, { headers })

const post = (resource, data) =>
  axios.post(`${API_URL}/${resource}`, data, { headers })

const remove = resource => axios.delete(`${API_URL}/${resource}`, { headers })
/* eslint-enable no-unused-vars */
