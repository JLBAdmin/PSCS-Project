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

import {
  colModel,
  colName
} from '@/components/grid-headers/reports/factory.header';
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const fetcher = (url: string) => axios.get(url).then((res) => res.data);

const Factorys = dynamic(
  () => import('@/components/grid-tables/grid-master2'),
  {
    ssr: false
  }
);

const Factory: NextPage = () => {
  const router = useRouter();
  useEffect(() => {
    const token = getCookie('ps-jwt');
    if (!token) {
      router.push('/login');
    }
  }, []);
  const { data, error } = useSWR(`/api/factory/get`, fetcher, {
    refreshInterval: 0
  });
  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  return (
    <Main
      meta={
        <Meta title='อ้อยเข้าหีบ - โรงงานใกล้เคียง' description='โซนเหนือ' />
      }
    >
      <div className='grid grid-cols-1 gap-6 xl:grid-cols-1'>
        <Factorys
          impData={data}
          colModel={colModel}
          colNames={colName}
          isTable={'factory'}
          isAction={false}
          // isOption={action}
          isImport={false}
          isCaption={'อ้อยเข้าหีบโรงงานต่างๆ'}
        />
      </div>
    </Main>
  );
};

export default Factory;
