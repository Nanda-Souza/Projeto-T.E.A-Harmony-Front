import api from './api';

export async function createPatient(body, token) {  
  const updatedData = await api.post('/patients/create', body, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });  

  const response = {
    patient: updatedData.data,
    token
  }
  return response;
}

