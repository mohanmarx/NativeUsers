import Axios from '../../Config/Axios'
import { SET_USERS, SET_SINGLE_USER, ADD_USERS } from './types'

export const getUsers = (count, page) => (dispatch) => (
  Axios.get(`?page=${page}&results=${count}`)
    .then(res => {
      const users = res.data.results.map((el) => {
        el.key = (Math.random() * 1000000).toString()
        return el;
      })
      dispatch({ type: (page === 0) ? SET_USERS : ADD_USERS, payload: users })
    })
    .catch(err => {
      alert(JSON.stringify(err, null, 2))
    })
)

export const getSingleUser = (user) => (dispatch) => (
  dispatch({ type: SET_SINGLE_USER, payload: user })
)