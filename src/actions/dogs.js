import ApiService from '../services/service';

export const getListAllBreedsAction = message => ({
  type: 'GET_LIST_ALL_BREEDS',
  payload: message,
});

export const getListAllBreedsThunk = () => (dispatch) => {
  ApiService.getListAllBreeds().then((message) => {
    dispatch(getListAllBreedsAction(message));
  });
};
