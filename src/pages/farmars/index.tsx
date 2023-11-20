import axios from 'axios';
import { getCookie } from 'cookies-next';
import { NextPage } from 'next';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import useSWR from 'swr';

import { action } from '@/components/grid-headers/budget.header';
import { colModel, colName } from '@/components/grid-headers/farmar.header';
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const fetcher = (url: string) => axios.get(url).then((res) => res.data);

const Farmars = dynamic(() => import('@/components/grid-tables/grid-master'), {
  ssr: false
});

const Farmar: NextPage = () => {
  const router = useRouter();
  useEffect(() => {
    const token = getCookie('ps-jwt');
    if (!token) {
      router.push('/login');
    }
  }, []);
  const { data, error } = useSWR(`/api/quotas/get`, fetcher, {
    refreshInterval: 0
  });
  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  return (
    <Main
      meta={
        <Meta
          title='PS - ชาวไร่โรงงานน้ำตาลพิษณุโลก'
          description='ชาวไร่ทั้่งหมด'
        />
      }
    >
      <div className='grid grid-cols-1 gap-6 xl:grid-cols-1'>
        <Farmars
          impData={data}
          colModel={colModel}
          colNames={colName}
          isTable={'quotas'}
          isAddress={true}
          isImport={false}
          isExport={false}
          isOption={action}
          isCaption={'ชาวไร่น้ำตาลพิษณุโลก'}
        />
      </div>
    </Main>
  );
};

export default Farmar;
