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

import { action } from '@/components/grid-headers/budget.header';
import {
  colModel,
  colName
} from '@/components/grid-headers/historyDebt.header';
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const fetcher = (url: string) => axios.get(url).then((res) => res.data);

const Historys = dynamic(() => import('@/components/grid-tables/grid-master'), {
  ssr: false
});

const History: NextPage = () => {
  const router = useRouter();
  useEffect(() => {
    const token = getCookie('ps-jwt');
    if (!token) {
      router.push('/login');
    }
  }, []);
  const { data, error } = useSWR(`/api/debt/get`, fetcher, {
    refreshInterval: 0
  });
  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  return (
    <Main
      meta={
        <Meta
          title='หนี้คงค้าง - บริษัท น้ำตาลพิษณุโลก จำกัด'
          description='หนี้คงค้างชาวไร่อ้อยรายบุคคล ครอบคลุมทุกพื้นที่'
        />
      }
    >
      <div className='grid grid-cols-1 gap-6 xl:grid-cols-1'>
        <Historys
          impData={data}
          colModel={colModel}
          colNames={colName}
          isTable={'debt'}
          isAction={false}
          isOption={action}
          isImport={false}
          isCaption={'หนี้คงค้างทั้งหมด'}
        />
      </div>
    </Main>
  );
};

export default History;
