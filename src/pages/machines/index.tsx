/* eslint-disable no-console */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-shadow */
import axios from 'axios';
import { NextPage } from 'next';
import dynamic from 'next/dynamic';
import useSWR from 'swr';

import { colModel, colName } from '@/components/grid-headers/machine.header';
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const fetcher = (url: string) => axios.get(url).then((res) => res.data);

const Machines = dynamic(() => import('@/components/grid-tables/grid-master'), {
  ssr: false
});

const Machine: NextPage = () => {
  const { data, error } = useSWR('/api/machine/get', fetcher, {
    // refreshInterval: 10000
  });
  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  return (
    <Main
      meta={
        <Meta
          title='อุปกรณ์ชาวไร่ - บริษัท น้ำตาลพิษณุโลก จำกัน'
          description='Next js Boilerplate is the perfect starter code for your project. Build your React application with the Next.js framework.'
        />
      }
    >
      <Machines
        impData={data}
        colModel={colModel}
        colNames={colName}
        isTable={'machine'}
        isAction={false}
        isExport={true}
        isCaption={'เครื่องมือ - เครื่องจักรชาวไร่'}
      />
    </Main>
  );
};

export default Machine;
