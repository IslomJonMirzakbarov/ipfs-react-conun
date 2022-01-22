const AppReducer = (state, action) => {
  switch (action.type) {
    case "ADD_IMAGE_URL":
      return {
        imgUrls: [...state.imgUrls, action.payload],
      };
    default:
      return state;
  }
};

export default AppReducer;
