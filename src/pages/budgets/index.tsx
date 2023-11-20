/* eslint-disable no-console */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-shadow */
// import axios from 'axios';
import { deleteCookie, getCookie } from 'cookies-next';
import { NextPage } from 'next';
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
import { fetcher } from '@/utils/requireAuthentication';

// const fetcher = (url: string, psToken: string) =>
//   axios
//     .get(url, { headers: { Authorization: `Bearer ${psToken}` } })
//     .then((res) => res.data);

const Budgets = dynamic(() => import('@/components/grid-tables/grid-master'), {
  ssr: false
});

const Budget: NextPage = () => {
  const router = useRouter();
  const token = getCookie('ps-jwt');
  useEffect(() => {
    if (!getCookie('zone')) {
      deleteCookie('user');
      deleteCookie('ps-jwt');
      router.push('/login');
    }
    if (!token) {
      router.push('/login');
    }
  }, []);
  const { data, error } = useSWR([`/api/budget/get`, token], fetcher, {
    refreshInterval: 0
  });
  if (error) return <div>failed to load</div>;
  if (!data)
    return (
      <Main
        meta={
          <Meta
            title='งบประมาณรายบุคคล - บริษัท น้ำตาลพิษณุโลก จำกัด'
            description='งบประมาณชาวไร่อ้อยรายบุคคล ครอบคลุมทุกพื้นที่'
          />
        }
      >
        <div>loading...</div>
      </Main>
    );
  return (
    <Main
      meta={
        <Meta
          title='งบประมาณรายบุคคล - บริษัท น้ำตาลพิษณุโลก จำกัด'
          description='งบประมาณชาวไร่อ้อยรายบุคคล ครอบคลุมทุกพื้นที่'
        />
      }
    >
      <div className='grid grid-cols-1 gap-6 xl:grid-cols-1'>
        <Budgets
          impData={data}
          colModel={colModel}
          colNames={colName}
          isTable={'budget'}
          isAction={true}
          isExport={true}
          isImport={false}
          isAdd={true}
          isOption={action}
          isCaption={'งบประมาณรายบุคคล - รวมทั้งหมด'}
        />
      </div>
    </Main>
  );
};

export default Budget;
