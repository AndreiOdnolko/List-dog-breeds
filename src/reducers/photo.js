const initialState = {
  isReady: false,
  listImages: '',
};

const actions = {
  GET_IMAGES: 'GET_IMAGES',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actions.GET_IMAGES:
      return {
        ...state,
        listImages: action.payload,
        isReady: true,
      };
    default:
      return state;
  }
};
