import api from './api';

export async function signUp(name, email, password, img_url) {
  const response = await api.post('/users', { name, email, password, img_url });
  return response.data;
}

export async function updateProfile(body, token) {
  const updatedData = await api.post('/users/profile', body, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const response = {
    user: updatedData.data,
    token
  }
  return response;
}
