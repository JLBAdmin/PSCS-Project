/* eslint-disable no-console */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-shadow */
import axios from 'axios';
import { NextPage } from 'next';
import dynamic from 'next/dynamic';
import useSWR from 'swr';

import { action } from '@/components/grid-headers/budget.header';
import { colModel } from '@/components/grid-headers/carbon.header';
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const fetcher = (url: string) => axios.get(url).then((res) => res.data);

const Carbons = dynamic(() => import('@/components/grid-tables/grid-carbon'), {
  ssr: false
});

const Machine: NextPage = () => {
  const { data, error } = useSWR('/api/carbon/credit', fetcher, {
    // refreshInterval: 10000
  });
  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  return (
    <Main
      meta={
        <Meta
          title='ข้อมูลชาวไร่ - บริษัท น้ำตาลพิษณุโลก จำกัน'
          description='Next js Boilerplate is the perfect starter code for your project. Build your React application with the Next.js framework.'
        />
      }
    >
      <Carbons
        impData={data}
        colModel={colModel}
        isTable={'carbon'}
        isCarbon={true}
        isImport={false}
        isExport={true}
        isOption={action}
        isCaption={'Carbon Cerdit'}
      />
    </Main>
  );
};

export default Machine;
