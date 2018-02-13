import axios from 'axios'

const BASE_URL =  'http://demo.wp-api.org/wp-json/wp/v2'

const wpApi = axios.create({
    baseURL: BASE_URL,
})

const getPosts = () => {
  return wpApi.get('/posts')
}

const getUser = _id => {
  return wpApi.get(`/users/${_id}`)
}

export default {
  getPosts,
  getUser
}
