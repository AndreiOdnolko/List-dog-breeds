const initialState = {
  isReady: false,
  listSubBreedDogs: [],
};

const actions = {
  GET_SUB_BREED_LIST: 'GET_SUB_BREED_LIST',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actions.GET_SUB_BREED_LIST:
      return {
        ...state,
        listSubBreedDogs: action.payload,
        isReady: true,
      };
    default:
      return state;
  }
};
