/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable tailwindcss/no-custom-classname */

import axios from 'axios';
import { deleteCookie, getCookie } from 'cookies-next';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import useSWR from 'swr';

import {
  action,
  colModel,
  colName
} from '@/components/grid-headers/budget.header';
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const fetcher = (url: string) => axios.get(url).then((res) => res.data);

const Budgets = dynamic(() => import('@/components/grid-tables/grid-master'), {
  ssr: false
});

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
  const { data, error } = useSWR(`/api/budget/get`, fetcher, {
    refreshInterval: 0
  });

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  return (
    <Main meta={<Meta title='น้ำตาลพิษณุโลก' description='น้ำตาลพิษณุโลก' />}>
      <div className='grid grid-cols-4 gap-6 xl:grid-cols-1'>
        <div className='report-card'>
          <Budgets
            impData={data}
            colModel={colModel}
            colNames={colName}
            isTable={'budget'}
            isAction={false}
            isImport={false}
            isAdd={false}
            isOption={action}
            isCaption={'งบประมาณรายบุคคล'}
          />
        </div>
      </div>
    </Main>
  );
};

export default Index;
