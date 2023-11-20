import axios from 'axios';
import { deleteCookie, getCookie } from 'cookies-next';
import { NextPage } from 'next';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import useSWR from 'swr';

import { colModel, colName } from '@/components/grid-headers/all.cost.header';
import { action } from '@/components/grid-headers/budget.header';
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/MainAccount';

const fetcher = (url: string) => axios.get(url).then((res) => res.data);

const Costs = dynamic(() => import('@/components/grid-tables/grid-master'), {
  ssr: false
});

const Cost: NextPage = () => {
  const router = useRouter();
  useEffect(() => {
    if (!getCookie('user')) {
      deleteCookie('zone');
      deleteCookie('ps-jwt');
      router.push('/login');
    }

    const token = getCookie('ps-jwt');

    if (!token) {
      router.push('/login');
    }
  }, []);
  const { data, error } = useSWR([`/api/cost/costs/0`], fetcher, {
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
        <Costs
          impData={data}
          colModel={colModel}
          colNames={colName}
          isTable={'cost'}
          isAction={false}
          isExport={false}
          isImport={false}
          isAdd={false}
          isOption={action}
          isGrid={'list'}
          isCaption={'รายรับ-รายจ่าย บริษัท น้ำตาลพิษณุโลก จำกัด'}
        />
      </div>
    </Main>
  );
};

export default Cost;
