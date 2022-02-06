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
      const response = await axios.post(`${API_URL}/${route}`, data); 

      return {
        status: response.status,
        text: 'Criado com sucesso!',
      }
    } catch (error) {
      console.log(error);
    }
  };

  static async put(route, data) {
    try {
      const response = await axios.put(`${API_URL}/${route}`, data);

      return {
        status: response.status,
        text: 'Atualizado com sucesso!',
      }
    } catch (error) {
      console.log(error);
    }
  };

  static async delete(route, data) {
    try {
      const response = await axios.delete(`${API_URL}/${route}`, data);

      return {
        status: response.status,
        text: 'Deletado com sucesso!',
      }
    } catch (error) {
      console.log(error);
    }
  }
};

export default Api;
