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

const put = (resource, data) =>
  axios.put(`${API_URL}/${resource}`, data, { headers })

const remove = resource => axios.delete(`${API_URL}/${resource}`, { headers })

export const getCategories = () => get('categories')

export const getPosts = () => get('posts')

export const postPost = (data, id) => {
  if (id) {
    post(`posts/${id}`, data)
    return
  }
  post('posts', data)
}

export const putPost = (id, data) => put(`posts/${id}`, data)

export const removePost = id => remove(`posts/${id}`)

export const getComments = postId => get(`posts/${postId}/comments`)

export const postComment = (data, id) => {
  if (id) {
    post(`comments/${id}`, data)
    return
  }
  post('comments', data)
}

export const putComment = (id, data) => put(`comments/${id}`, data)

export const removeComment = id => remove(`comments/${id}`)
