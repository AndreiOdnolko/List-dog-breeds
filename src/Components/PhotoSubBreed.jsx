import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import styles from '../Style/Photo.Sub.Breed.module.css';
import { getImagesThunk } from '../actions/photo';

class PhotoSubBreed extends Component {
  constructor(props) {
    super(props);
    this.setState = {
      isLoading: false,
    };
  }

  getPhoto() {
    const { getImages, match } = this.props;
    if (match.params.sub && !this.setState.isLoading) {
      getImages(match.params.sub, match.params.key);
    }
    this.setState.isLoading = !this.setState.isLoading;
  }

  render() {
    this.getPhoto();
    const { listImages, isReady } = this.props;
    return (
      <div className={styles.wrapper_photo}>
        {!isReady ? 'Loading...' : <img src={listImages} alt="img" className={styles.img_photo} />}
      </div>
    );
  }
}

PhotoSubBreed.propTypes = {
  listImages: PropTypes.string.isRequired,
  isReady: PropTypes.bool.isRequired,
  getImages: PropTypes.func.isRequired,
  match: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  isReady: state.photo.isReady,
  listImages: state.photo.listImages,
});

const mapDispatchToProps = dispatch => ({
  getImages: (subBreed, breed) => {
    dispatch(getImagesThunk(subBreed, breed));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(PhotoSubBreed);
