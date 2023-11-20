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

import { colModel, colName } from '@/components/grid-headers/company.header';
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const fetcher = (url: string) => axios.get(url).then((res) => res.data);

const Companys = dynamic(() => import('@/components/grid-tables/grid-master'), {
  ssr: false
});

const Company: NextPage = () => {
  const router = useRouter();
  useEffect(() => {
    const token = getCookie('ps-jwt');
    if (!token) {
      router.push('/login');
    }
  }, []);
  const { data, error } = useSWR(`/api/company/get`, fetcher, {
    refreshInterval: 0
  });
  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  return (
    <Main
      meta={
        <Meta
          title='โรงงานน้ำตาลในประเทศไทย - บริษัท น้ำตาลพิษณุโลก จำกัด'
          description='ธุระกิจโรงงานน้ำตาลในประเทศไทย'
        />
      }
    >
      <div className='grid grid-cols-1 gap-6 xl:grid-cols-1'>
        <Companys
          impData={data}
          colModel={colModel}
          colNames={colName}
          isTable={'company'}
          isAction={false}
          // isOption={action}
          isImport={false}
          isCaption={'โรงงานน้ำตาลในประเทศไทย'}
        />
      </div>
    </Main>
  );
};

export default Company;
