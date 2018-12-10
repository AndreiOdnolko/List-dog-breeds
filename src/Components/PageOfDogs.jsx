import React from 'react';
import PropTypes from 'prop-types';

import styles from '../Style/List.Of.Dogs.module.css';

const PageOfDogs = ({ breed }) => <li className={styles.title_subBreed}>{breed}</li>;

PageOfDogs.propTypes = {
  breed: PropTypes.string.isRequired,
};

export default PageOfDogs;
