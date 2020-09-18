export default function auth(state={admin: true, id: 1, username: "ereichmann4", password: "1234password"}, action) {
    switch(action.type) {
      case 'LOGIN_SUCCESS':
        return action.user
      case 'LOGOUT_SUCCESS':
        return null
      default:
        return state
    }
  }