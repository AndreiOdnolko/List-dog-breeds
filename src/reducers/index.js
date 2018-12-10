import { combineReducers } from 'redux';

import dogs from './dogs';
import dog from './dog';
import photo from './photo';

export default combineReducers({
  dogs,
  dog,
  photo,
});
