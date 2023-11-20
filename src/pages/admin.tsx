import axios from 'axios';
import { getCookie } from 'cookies-next';
import Link from 'next/link';
import { useEffect } from 'react';

import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

// import axios from '../utils/AxiosConfig';

const USER_GET = '/api/users/get';

// import Users from './users';

const Admin = () => {
  // const [isLoaded, setIsLoaded] = useState(false);
  // const [user, setUser] = useState([]);

  useEffect(() => {
    const token = getCookie('ps-jwt');
    axios
      .get(USER_GET, {
        headers: {
          'Content-type': 'application/json',
          Authorization: `Bearer ${token}`,
          withCredentials: true
        },
        withCredentials: true
      })
      .then(({ data: isData }) => {
        // eslint-disable-next-line no-console
        console.log(isData);
      })
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.log(error);
      });
  }, []);
  return (
    <Main meta={<Meta title='Lorem ipsum' description='Lorem ipsum' />}>
      <section>
        <h1>Admin Page</h1>
        <br />
        {/* <Users /> */}
        <br />
        <p>You do not have access to the requested page.</p>
        <Link href='/'>
          <a>Home</a>
        </Link>
      </section>
    </Main>
  );
};

export const getServerSideRedirect = async (context: any) => {
  const token = context.req?.cookies?.token;
  // eslint-disable-next-line no-console
  console.log('redirect token: ', token);
  // const pathName = context.resolvedUrl;
  // const newUrl = await getRedirectUrl(token, pathName)
  // console.log(newUrl)
  // if (newUrl) {
  //   return {
  //     redirect: {
  //       destination: newUrl,
  //       permanent: false,
  //     },
  //   }
  // }

  // return {
  //   props: {},
  // }
};

export default Admin;
