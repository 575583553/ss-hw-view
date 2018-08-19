import axios from 'axios';

class Http {
  get(options = {}) {
    return axios({
      ...options,
      method: 'get',
    });
  }

  post(options = {}) {
    return axios({
      ...options,
      method: 'post',
    });
  }
}

export default new Http();
