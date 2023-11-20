import axios from 'axios';
import { getCookie } from 'cookies-next';

// eslint-disable-next-line consistent-return
export const requireAuthentication = async () => {
  const token = await getCookie('ps-jwt');

  if (!token) {
    return {
      redirect: {
        destination: '/login',
        permanent: false
      }
    };
  }
  return true;
};

export const fetcher = (url: string, psToken: string) =>
  axios
    .get(url, { headers: { Authorization: `Bearer ${psToken}` } })
    .then((res: { data: any }) => res.data);
