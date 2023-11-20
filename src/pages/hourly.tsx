/* eslint-disable no-console */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-shadow */

import { NextPage } from 'next';
import dynamic from 'next/dynamic';

import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

// const fetcher = (url: string) => axios.get(url).then((res) => res.data);

const CaneReport = dynamic(() => import('@/components/grid-tables/grid-demo'), {
  ssr: false
});

const Target: NextPage = () => {
  return (
    <Main
      meta={
        <Meta
          title='เป้าหมายพื้นที่ - บริษัท น้ำตาลพิษณุโลก จำกัด'
          description='เป้าหมายพื้นที่ ครอบคลุมทุกพื้นที่'
        />
      }
    >
      <div className='grid grid-cols-1 gap-6 xl:grid-cols-1'>
        <CaneReport />
      </div>
    </Main>
  );
};

export default Target;
