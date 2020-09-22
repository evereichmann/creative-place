export const loginSuccess = (user) => {
    return {
      type: "LOGIN_SUCCESS",
      user: user
    }
  }

  export const logoutSuccess = () => {
    return {
      type: 'LOGOUT_SUCCESS'
    }
  }

  export const likeIdea = (idea) => {
    return {
      type: 'LIKE_IDEA',
      idea: idea
    }
  }

  export const userIdeaUpdate = (idea) => {
    return {
      type: 'UPDATE_USER_IDEA',
      idea: idea
    }
  }

  export const likeImage = (image) => {
    return {
      type: 'LIKE_IMAGE',
      image: image
    }
  }

  export const likeUserImage = (image) => {
    return {
      type: 'LIKE_USER_IMAGE',
      image: image
    }
  }

  export const likeColors = (pallete) => {
    return{
      type: 'LIKE_COLORS',
      pallete: pallete
    }
  }

  export const deleteIdea = (id) => {
    return{
      type: 'DELETE_IDEA',
      id: id
    }
  }

  export const deleteUserIdea = (id) => {
    return{
      type: 'DELETE_USER_IDEA',
      id: id
    }
  }

  export const deleteImage = (id) => {
    return{
      type: 'DELETE_IMAGE',
      id: id
    }
  }

  export const deleteUserImage = (id) => {
    return{
      type: 'DELETE_USER_IMAGE',
      id: id
    }
  }

  export const deletePallete = (id) => {
    return{
      type: 'DELETE_PALLETE',
      id: id
    }
  }