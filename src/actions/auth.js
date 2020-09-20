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

  export const likeImage = (image) => {
    return {
      type: 'LIKE_IMAGE',
      image: image
    }
  }

  export const likeColors = (pallete) => {
    return{
      type: 'LIKE_COLORS',
      pallete: pallete
    }
  }