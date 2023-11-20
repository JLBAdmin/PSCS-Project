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

import { action } from '@/components/grid-headers/budget.header';
import { colModel, colName } from '@/components/grid-headers/budget.rid.header';
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
  const { data, error } = useSWR([`/api/budget/project`, token], fetcher, {
    refreshInterval: 0
  });
  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

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
          isDue={true}
          isAction={true}
          isImport={false}
          isAdd={false}
          isOption={action}
          isCaption={'งบประมาณโครงการ - รวมโครงการทั้งหมด'}
        />
      </div>
    </Main>
  );
};

export default Budget;
