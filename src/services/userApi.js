import api from './api';

export async function signUp(name, email, password, img_url) {
  const response = await api.post('/users', { name, email, password, img_url });
  return response.data;
}
//
