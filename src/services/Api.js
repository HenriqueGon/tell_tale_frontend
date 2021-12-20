import axios from 'axios';

import API_URL from './config';

class Api {
  static async get(route) {
    try {
      const response = await axios.get(`${API_URL}/${route}`);

      return response.data;
    } catch (error) {
      console.log(error);
    }
  };

  static async post(route, data) {
    try {
      await axios.post(`${API_URL}/${route}`, data); 
    } catch (error) {
      console.log(error);
    }
  };

  static async put(route, data) {
    try {
      await axios.put(`${API_URL}/${route}`, data);
    } catch (error) {
      console.log(error);
    }
  };

  static async delete(route, data) {
    try {
      await axios.delete(`${API_URL}/${route}`, data);
    } catch (error) {
      console.log(error);
    }
  }
};

export default Api;
