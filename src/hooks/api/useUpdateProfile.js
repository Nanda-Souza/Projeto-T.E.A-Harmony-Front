import useAsync from '../useAsync';
import useToken from '../useToken';
import * as userApi from '../../services/userApi';

export default function useUpdateProfile() {
  const token = useToken();

  const {
    loading: loadingUpdateProfile,
    error: updateProfileError,
    act: updateProfile
  } = useAsync((data) => userApi.updateProfile(data, token), false);

  return {
    loadingUpdateProfile,
    updateProfileError,
    updateProfile
  };
}