/* eslint-disable no-console */
import axios from 'axios';

const Service = class {
  async getListAllBreeds() {
    try {
      this.response = await axios.get('https://dog.ceo/api/breeds/list/all');
      return this.response.data.message;
    } catch (error) {
      return console.log(error);
    }
  }

  async getSubBreed(breed) {
    try {
      this.response = await axios.get(`https://dog.ceo/api/breed/${breed}/list`);
      return this.response.data.message;
    } catch (error) {
      return console.log(error);
    }
  }

  async getImages(subBreed, breed) {
    try {
      this.response = await axios.get(`https://dog.ceo/api/breed/${breed}/${subBreed}/images/random`);
      return this.response.data.message;
    } catch (error) {
      return console.log(error);
    }
  }
};

export default new Service();
