import axios from '../utils/AxiosConfig';
import useAuth from './useAuth';

const useRefreshToken = () => {
  const { setAuth }: any = useAuth();

  const refresh = async () => {
    const response = await axios.get('/refresh', {
      withCredentials: true
    });
    setAuth((prev: any) => {
      // eslint-disable-next-line no-console
      console.log(JSON.stringify(prev));
      // eslint-disable-next-line no-console
      console.log(response.data.accessToken);
      return { ...prev, accessToken: response.data.accessToken };
    });
    return response.data.accessToken;
  };
  return refresh;
};

export default useRefreshToken;
