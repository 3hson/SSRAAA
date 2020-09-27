// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from 'axios';

const API_URl = 'localhost:3000/api';

const login = async (email, password) => {
  try {
    const response = await axios.post(
      `${API_URl}/users/login`,
      JSON.stringify({ user: { email, password } }),
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    return response;
  } catch (error) {
    return error.response;
  }
};

const register  = async (username, email, password) => {
  try {
    const response = await axios.post(
      `${API_URl}/users`,
      JSON.stringify({ user: { username, email, password } }),
      {
        headers: {
          'Content-Type': 'applicatizon/json',
        },
      }
    );
    return response;
  } catch (error) {
    return error.response;
  }
};

const user = async () => {
  const user = window.localStorage.getItem('user');
  const token = user?.token;
  try {
    const response = await axios.get('/user', {
      headers: {
        Authorization: `Token ${encodeURIComponent(token)}`,
      },
    });
    return response;
  } catch (error) {
    return error.response;
  }
};

export default {user, login, register};