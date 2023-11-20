/* eslint-disable no-console */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-shadow */
import axios from 'axios';
import { NextPage } from 'next';
import dynamic from 'next/dynamic';
import useSWR from 'swr';

import { action } from '@/components/grid-headers/budget.header';
import {
  colModel,
  colName
} from '@/components/grid-headers/budget.header.admin';
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const fetcher = (url: string) => axios.get(url).then((res) => res.data);

const Budgets = dynamic(() => import('@/components/grid-tables/grid-master'), {
  ssr: false
});

const Budget: NextPage = () => {
  const { data, error } = useSWR(`/api/budget/get`, fetcher, {
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
          isAction={true}
          isImport={false}
          isExport={true}
          isOption={action}
          isCaption={'งบประมาณรายบุคคล'}
        />
      </div>
    </Main>
  );
};

export default Budget;
