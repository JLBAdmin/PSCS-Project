import axios from 'axios';
import { getCookie } from 'cookies-next';
import { NextPage } from 'next';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import useSWR from 'swr';

import { action } from '@/components/grid-headers/budget.header';
import { colModel, colName } from '@/components/grid-headers/notifys.header';
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const fetcher = (url: string) => axios.get(url).then((res) => res.data);

const Notifys = dynamic(() => import('@/components/grid-tables/grid-mcss'), {
  ssr: false
});

const Notify: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;
  useEffect(() => {
    const token = getCookie('ps-jwt');
    if (!token) {
      router.push('/login');
    }
  }, []);

  const { data, error } = useSWR(`/api/plotcode/notify/${id}`, fetcher, {
    refreshInterval: 0
  });
  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  return (
    <Main
      meta={
        <Meta title='PS - พิกัดจดแจ้ง' description='เป้าหมายพื้นที่ส่งเสริม' />
      }
    >
      <div className='grid grid-cols-1 gap-6 xl:grid-cols-1'>
        <Notifys
          impData={data}
          colModel={colModel}
          colNames={colName}
          isTable={'plotcode'}
          isWaters={true}
          isNotify={true}
          isImport={false}
          isExport={true}
          isOption={action}
          isCaption={'พิกัดจดแจ้ง'}
        />
      </div>
    </Main>
  );
};

export default Notify;
