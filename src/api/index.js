import axios from 'axios'

const BASE_URL =  'https://elpuas.com/wp-json/wp/v2'

const wpApi = axios.create({
    baseURL: BASE_URL,
})

const getPosts = () => {
  return wpApi.get('/posts')
}

const getUser = _id => {
  return wpApi.get(`/users/${_id}`)
}

const getPages = () => {
  return wpApi.get('/pages/')
}

export default {
  getPosts,
  getUser,
  getPages,
}
