import axios from 'axios';
import { getCookie } from 'cookies-next';
import { NextPage } from 'next';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import useSWR from 'swr';

import { action } from '@/components/grid-headers/budget.header';
import { colModel, colName } from '@/components/grid-headers/plot.header';
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const fetcher = (url: string) => axios.get(url).then((res) => res.data);

const Plots = dynamic(() => import('@/components/grid-tables/grid-mcss'), {
  ssr: false
});

const Plot: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;
  useEffect(() => {
    const token = getCookie('ps-jwt');
    if (!token) {
      router.push('/login');
    }
  }, []);

  const { data, error } = useSWR(`/api/plotcode/get/${id}`, fetcher, {
    refreshInterval: 0
  });
  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  return (
    <Main
      meta={
        <Meta
          title='PS - แปลอ้อยโรงงานน้ำตาลพิษณุโลก'
          description='แปลงสัญญาทั้งหมดทั้่งหมด'
        />
      }
    >
      <div className='grid grid-cols-1 gap-6 xl:grid-cols-1'>
        <Plots
          impData={data}
          colModel={colModel}
          colNames={colName}
          isTable={'plotcode'}
          isPlot={true}
          isAddress={true}
          isImport={false}
          isExport={true}
          isOption={action}
          isCaption={'แปลงอ้อยโรงงานน้ำตาลพิษณุโลก'}
        />
      </div>
    </Main>
  );
};

export default Plot;
