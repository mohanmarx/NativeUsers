import { SET_USERS, SET_SINGLE_USER, ADD_USERS } from '../actions/types'

export const initState = {
  users: [],
  user: {
    name: {
      first: '',
      last: ''
    },
    email: '',
    phone: '',
    cell: '',
    login: {
      username: ''
    },
    picture: {
      thumbnail: '',
      medium: ''
    },
    dob: {
      age: ''
    },
    location: {
      city: '',
      country: '',
      state: ''
    }
  }
}

export default (state = initState, action) => {

  switch (action.type) {
    case SET_USERS:
      return {
        ...state,
        users: action.payload
      }

    case ADD_USERS:
      return {
        ...state,
        users: [...state.users, ...action.payload]
      }

    case SET_SINGLE_USER:
      return {
        ...state,
        user: action.payload
      }

    default:
      return state
  }
}