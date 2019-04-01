import axios from 'axios'

const API_URL = 'http://localhost:3001'

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

const get = resource => axios.get(`${API_URL}/${resource}`, { headers })

const post = (resource, data) =>
  axios.post(`${API_URL}/${resource}`, data, { headers })

const patch = (resource, data) =>
  axios.patch(`${API_URL}/${resource}`, data, { headers })

/* eslint-disable no-unused-vars */
const remove = resource => axios.delete(`${API_URL}/${resource}`, { headers })
/* eslint-enable no-unused-vars */

export const getCategories = () => get('categories')

export const getPosts = () => get('posts')

export const postPost = data => post('posts', data)

export const patchPost = (id, data) => patch(`posts/${id}`, data)
