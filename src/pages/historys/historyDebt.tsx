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
  const getZone: any = getCookie('zone');
  let allZone: number;
  if (getZone === 'All') {
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
          isImport={false}
          isOption={action}
          isCaption={'หนี้คงค้างทั้งหมด'}
        />
      </div>
    </Main>
  );
};

export default History;
