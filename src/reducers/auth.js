const defaultState = {
  admin: true,
  id: 1, 
  username: "ereichmann4",
  password: "1234password",
  first_name: "Eve",
  last_name: "Reichmann",
  ideas: [{id:1, saying: 'cat in socks'}],
  images: [{img_url: 'https://picsum.photos/id/0/5616/3744'},{ img_url:"https://picsum.photos/id/1/5616/3744"}],
  palletes: [{id: 1, color_one_rgb_value: "238,32,77", color_two_rgb_value: "253,217,181" , color_three_rgb_value: "135,169,107" }]
}

export default function auth(state=null, action) {
    switch(action.type) {
      case 'LOGIN_SUCCESS':
        return action.user
      case 'LOGOUT_SUCCESS':
        return null
      case 'LIKE_IDEA':
        return {...state, ideas:[...state.ideas, action.idea]}
      case 'UPDATE_USER_IDEA':
        return {...state, user_ideas: [...state.user_ideas, action.idea]}  
      case 'LIKE_IMAGE':
        return {...state, images:[...state.images, action.image]}  
      case 'LIKE_USER_IMAGE':
        return  {...state, user_image:[...state.user_image, action.image]}
      case 'LIKE_COLORS':
        return {...state, palletes:[...state.palletes, action.pallete]}  
      case 'DELETE_IDEA':
        return {...state, ideas: [...state.ideas.filter(t => t.id !== action.id)]}
      case 'DELETE_USER_IDEA':
        return {...state, user_ideas: [...state.user_ideas.filter(t => t.id !== action.id)]}
      case 'DELETE_IMAGE':
        return {...state, images: [...state.images.filter(t => t.id !== action.id)]}
      case 'DELETE_USER_IMAGE':
        return {...state, user_image: [...state.user_image.filter(t => t.id !== action.id)]}
      case 'DELETE_PALLETE':
        return {...state, palletes: [...state.palletes.filter(t => t.id !== action.id)]}
      case 'ADD_ITEM':
        return {...state, items: [...state.items, action.item]}  
      case 'DELETE_ITEM':
        return {...state, items: [...state.items.filter(t => t.id !== action.id)]}
      default:
        return state
    }
  }