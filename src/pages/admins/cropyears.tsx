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

import { colModel, colName } from '@/components/grid-headers/cropYear.header';
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const fetcher = (url: string) => axios.get(url).then((res) => res.data);

const CropYear = dynamic(
  () => import('@/components/grid-tables/grid-master2'),
  { ssr: false }
);

const CropYears: NextPage = () => {
  const router = useRouter();
  const getZone: any = getCookie('zone');
  useEffect(() => {
    const token = getCookie('ps-jwt');
    if (!token) {
      router.push('/login');
    }
    if (['admin', 'Admin', 'all', 'All'].includes(getZone) === false) {
      // eslint-disable-next-line no-alert
      alert('คุณไม่ได้รับสิทธิ์ให้ทำงานหน้านี้');
      router.push('/');
    }
  }, []);
  const { data, error } = useSWR(`/api/crop_years/get-crop`, fetcher, {
    refreshInterval: 100000
  });
  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  return (
    <Main
      meta={
        <Meta
          title='ปีการส่งเสริม - บริษัท น้ำตาลพิษณุโลก จำกัด'
          description='Next js Boilerplate is the perfect starter code for your project. Build your React application with the Next.js framework.'
        />
      }
    >
      <div className='grid grid-cols-1 gap-6 xl:grid-cols-1'>
        <CropYear
          impData={data}
          colModel={colModel}
          colNames={colName}
          isTable={'crop_years'}
          isAction={false}
          isImport={false}
          isExport={false}
          isCaption={'ปีการส่งเสริม'}
        />
      </div>
    </Main>
  );
};

export default CropYears;
