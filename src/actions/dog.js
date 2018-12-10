import ApiService from '../services/service';

export const getSubBreedListAction = message => ({
  type: 'GET_SUB_BREED_LIST',
  payload: message,
});

export const getSubBreedListThunk = breed => (dispatch) => {
  ApiService.getSubBreed(breed).then((message) => {
    dispatch(getSubBreedListAction(message));
  });
};
