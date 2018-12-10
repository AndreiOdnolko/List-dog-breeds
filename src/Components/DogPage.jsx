import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import styles from '../Style/List.Of.Dogs.module.css';
import { getSubBreedListThunk } from '../actions/dog';

class DogPage extends Component {
  componentWillMount() {
    const { match, getSubBreedlist } = this.props;
    getSubBreedlist(match.params.key);
  }

  render() {
    const { match, listSubBreedDogs, isReady } = this.props;

    const items = listSubBreedDogs.map(subBreed => (
      <Link
        to={`/listOfDogs/${match.params.key}/${subBreed}`}
        className={styles.link_subBreed}
        key={subBreed}
      >
        <li className={styles.title_subBreed} key={subBreed}>
          {subBreed}
        </li>
      </Link>
    ));
    return (
      <div className={styles.wrapper_page}>
        <span className={styles.title_page}>{match.params.key}</span>
        <div>
          {!isReady ? (
            'Loading...'
          ) : (
            <ul className={styles.wrapper_li}>{items}</ul>
          )}
        </div>
      </div>
    );
  }
}

DogPage.propTypes = {
  match: PropTypes.object.isRequired,
  getSubBreedlist: PropTypes.func.isRequired,
  listSubBreedDogs: PropTypes.array.isRequired,
  isReady: PropTypes.bool.isRequired,
};

const mapStateToProps = ({ dog }) => ({
  listSubBreedDogs: dog.listSubBreedDogs,
  isReady: dog.isReady,
});

const mapDispatchToProps = dispatch => ({
  getSubBreedlist: (breed) => {
    dispatch(getSubBreedListThunk(breed));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DogPage);
