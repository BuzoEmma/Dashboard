const AuthReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN": {
      return {
        currentUser: action.payload,
      };
    }
    case "LOGINOUT": {
      return {
        currentUser: null,
      };
    }

    default:
      return state;
  }
};

export default AuthReducer