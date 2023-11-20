import axios from 'axios';
import { NextPage } from 'next';
import dynamic from 'next/dynamic';
import useSWR from 'swr';

import {
  colModel,
  colName
} from '@/components/grid-headers/budget.cost.header';
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/MainAccount';

const fetcher = (url: string) => axios.get(url).then((res) => res.data);

const Costs = dynamic(() => import('@/components/grid-tables/grid-costs'), {
  ssr: false
});

const Cost: NextPage = () => {
  const { data, error } = useSWR(`/api/cost/get`, fetcher, {
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
          isDel={true}
          isOuter={'outerDiv1'}
          isGrid={'list'}
          isGroup={false}
          isInlineNav={true}
          isTopPager={true}
          isCaption={'รายรับ-รายจ่าย บริษัท น้ำตาลพิษณุโลก จำกัด'}
        />
      </div>
    </Main>
  );
};

export default Cost;
