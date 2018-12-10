import ApiService from '../services/service';

export const getImagesAction = message => ({
  type: 'GET_IMAGES',
  payload: message,
});

export const getImagesThunk = (breed, subBreed) => (dispatch) => {
  ApiService.getImages(breed, subBreed).then((message) => {
    dispatch(getImagesAction(message));
  });
};
