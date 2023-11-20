/* eslint-disable tailwindcss/no-custom-classname */
import { deleteCookie, getCookie } from 'cookies-next';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

import ClockChart from '@/components/echarts/ClockChart';
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const Index = () => {
  const router = useRouter();
  useEffect(() => {
    if (!getCookie('zone')) {
      deleteCookie('user');
      deleteCookie('ps-jwt');
      router.push('/login');
    }

    const token = getCookie('ps-jwt');

    if (!token) {
      router.push('/login');
    }
  }, []);

  return (
    <Main
      meta={
        <Meta
          title='บริษัท น้ำตาลพิษณุโลก'
          description='Next js Boilerplate is the perfect starter code for your project. Build your React application with the Next.js framework.'
        />
      }
    >
      {/* <!-- General Report --> */}
      <div
        className='grid grid-cols-6 gap-2 lg:grid-cols-1'
        style={{
          backgroundImage: 'url(/images/PS-mision.png)',
          width: '100%',
          height: '85vh'
        }}
      >
        {/* <div className='card border-teal-400 text-white shadow-md'> */}
        <div className='card-body flex flex-row'>
          <ClockChart />
        </div>
        {/* </div> */}
      </div>
    </Main>
  );
};

export default Index;
