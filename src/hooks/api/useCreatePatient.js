import useAsync from '../useAsync';
import useToken from '../useToken';
import * as patientApi from '../../services/patienApi'

export default function useCreatePatient() {
  const token = useToken();

  const {
    loading: loadingCreatePatient,
    error: errorCreatePatient,
    act: createPatient
  } = useAsync((data) => patientApi.createPatient(data, token), false);

  return {
    loadingCreatePatient,
    errorCreatePatient,
    createPatient
  };
}