import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import PageOfDogs from './PageOfDogs';
import styles from '../Style/List.Of.Dogs.module.css';
import { getListAllBreedsThunk } from '../actions/dogs';

class ListOfDogs extends Component {
  static getDerivedStateFromProps(props) {
    if (!props.isReady) {
      props.getAllBreedsDogs();
    }
  }

  render() {
    const { listBreedsDogs, isReady } = this.props;
    if (listBreedsDogs) {
      const items = listBreedsDogs.map(breed => (
        <Link
          to={`/listOfDogs/${breed}`}
          key={breed}
          className={styles.link_subBreed}
        >
          <PageOfDogs breed={breed} key={breed} />
        </Link>
      ));
      return (
        <div className={styles.wrapper_page}>
          <span className={styles.title_page}>List of all dog breeds</span>
          {!isReady ? (
            'Loading...'
          ) : (
            <ul className={styles.wrapper_li}>{items}</ul>
          )}
        </div>
      );
    }
    return null;
  }
}

ListOfDogs.propTypes = {
  listBreedsDogs: PropTypes.array.isRequired,
  isReady: PropTypes.bool.isRequired,
};

const mapStateToProps = ({ dogs }) => ({
  listBreedsDogs: dogs.listBreedsDogs,
  isReady: dogs.isReady,
});

const mapDispatchToProps = dispatch => ({
  getAllBreedsDogs: () => {
    dispatch(getListAllBreedsThunk());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ListOfDogs);
