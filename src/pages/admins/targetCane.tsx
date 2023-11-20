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
} from '@/components/grid-headers/target.header.cane';
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const fetcher = (url: string) => axios.get(url).then((res) => res.data);

const Targets = dynamic(() => import('@/components/grid-tables/grid-master2'), {
  ssr: false
});

const Target: NextPage = () => {
  const router = useRouter();
  useEffect(() => {
    const token = getCookie('ps-jwt');
    if (!token) {
      router.push('/login');
    }
  }, []);
  const { data, error } = useSWR(`/api/subzone/get`, fetcher, {
    refreshInterval: 0
  });
  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  return (
    <Main
      meta={
        <Meta
          title='เป้าหมายเข้าหีบ - บริษัท น้ำตาลพิษณุโลก จำกัด'
          description='เป้าหมายการนำอ้อยเข้าหีบตามนักสำรวจ'
        />
      }
    >
      <div className='grid grid-cols-1 gap-6 xl:grid-cols-1'>
        <Targets
          impData={data}
          colModel={colModel}
          colNames={colName}
          isTable={'target'}
          isAction={false}
          isImport={false}
          isAdd={false}
          isDel={false}
          isCaption={`เป้าหมายส่งอ้อยเข้าโรงงาน --> <a href=' /admins/imports/targetCane'>ต้องการนำเข้าข้อมูล</a>`}
        />
      </div>
    </Main>
  );
};

export default Target;
