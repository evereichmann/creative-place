const defaultState = {
  admin: true,
   id: 1, 
   username: "ereichmann4",
    password: "1234password"
}

export default function auth(state=null, action) {
    switch(action.type) {
      case 'LOGIN_SUCCESS':
        return action.user
      case 'LOGOUT_SUCCESS':
        return null
      case 'LIKE_IDEA':
        return {...state, ideas:[...state.ideas, action.idea]}
      case 'LIKE_IMAGE':
        return {...state, images:[...state.images, action.image]}  
      case 'LIKE_COLORS':
        return {...state, palletes:[...state.palletes, action.pallete]}  
      default:
        return state
    }
  }