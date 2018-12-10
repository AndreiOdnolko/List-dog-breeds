const initialState = {
  isReady: false,
  listBreedsDogs: [],
};

const actions = {
  GET_LIST_ALL_BREEDS: 'GET_LIST_ALL_BREEDS',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actions.GET_LIST_ALL_BREEDS: {
      return {
        ...state,
        listBreedsDogs: Object.keys(action.payload),
        isReady: true,
      };
    }
    default:
      return state;
  }
};
