/* eslint-disable no-console */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-shadow */
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
} from '@/components/grid-headers/budget.mcss.header';
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';
import { fetcher } from '@/utils/requireAuthentication';

// const fetcher = (url: string) => axios.get(url).then((res) => res.data);

const Budgets = dynamic(() => import('@/components/grid-tables/grid-master'), {
  ssr: false
});

const Budget: NextPage = () => {
  const router = useRouter();
  const getZone: any = getCookie('zone');
  const token = getCookie('ps-jwt');
  useEffect(() => {
    if (!token) {
      router.push('/login');
    }
    if (['Admin', 'All'].includes(getZone) === false) {
      // eslint-disable-next-line no-alert
      alert('คุณไม่ได้รับสิทธิ์ให้ทำงานหน้านี้');
      // router.push('/budgets');
    }
  }, []);
  const { data, error } = useSWR([`/api/mcss/budgets`, token], fetcher, {
    refreshInterval: 0
  });
  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  return (
    <Main
      meta={
        <Meta
          title='ปรับปรุงงบประมาณระบบ MCSS - บริษัท น้ำตาลพิษณุโลก จำกัด'
          description='งบประมาณชาวไร่อ้อยรายบุคคล ครอบคลุมทุกพื้นที่'
        />
      }
    >
      <div className='grid grid-cols-1 gap-6 xl:grid-cols-1'>
        <Budgets
          impData={data}
          colModel={colModel}
          colNames={colName}
          isTable={'mcss'}
          isAction={true}
          isImport={false}
          isExport={true}
          isOption={action}
          isCaption={'งบประมาณตามประเภทอ้อยที่ได้รับอนุมัติ'}
        />
      </div>
    </Main>
  );
};

export default Budget;
