/* eslint-disable no-console */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-shadow */
import axios from 'axios';
import { getCookie } from 'cookies-next';
import { NextPage } from 'next';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import useSWR from 'swr';

import { colModel, colName } from '@/components/grid-headers/securitie.header';
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const fetcher = (url: string) => axios.get(url).then((res) => res.data);

const Securities = dynamic(
  () => import('@/components/grid-tables/grid-master2'),
  { ssr: false }
);

const Securitie: NextPage = () => {
  const router = useRouter();
  const getZone: any = getCookie('zone');
  let allZone: number;
  if (getZone === 'All' || getZone === 'Center') {
    // eslint-disable-next-line unused-imports/no-unused-vars
    allZone = 99;
  } else {
    // eslint-disable-next-line unused-imports/no-unused-vars
    allZone = getZone;
  }
  useEffect(() => {
    const token = getCookie('ps-jwt');
    if (!token) {
      router.push('/login');
    }
    if (
      [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 15, 99].includes(
        Number(allZone)
      ) === false
    ) {
      // eslint-disable-next-line no-alert
      alert('คุณไม่ได้รับสิทธิ์ให้ทำงานหน้านี้');
      router.push('/');
    }
  }, []);
  const { data, error } = useSWR('/api/securitie/get', fetcher, {
    refreshInterval: 100000
  });
  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  return (
    <Main
      meta={
        <Meta
          title='หลักทรัพย์ค้ำประกัน - บริษัท น้ำตาลพิษณุโลก จำกัด'
          description='Next js Boilerplate is the perfect starter code for your project. Build your React application with the Next.js framework.'
        />
      }
    >
      <div className='grid grid-cols-1 gap-6 xl:grid-cols-1'>
        <Securities
          impData={data}
          colModel={colModel}
          colNames={colName}
          isTable={'securitie'}
          isAction={false}
          isDelete={true}
          isCaption={'หลักทรัพย์ค้ำประกัน'}
        />
      </div>
    </Main>
  );
};

export default Securitie;
