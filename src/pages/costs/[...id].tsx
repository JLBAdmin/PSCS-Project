/* eslint-disable no-console */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-shadow */
// import axios from 'axios';
import { getCookie } from 'cookies-next';
import { NextPage } from 'next';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import useSWR from 'swr';

import { colModel, colName } from '@/components/grid-headers/edit.cost.header';
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/MainAccount';
import { fetcher } from '@/utils/requireAuthentication';

// const fetcher = (url: string) => axios.get(url).then((res) => res.data);

const Costs = dynamic(() => import('@/components/grid-tables/grid-costs'), {
  ssr: false
});

const CostGroup: NextPage = () => {
  const router = useRouter();
  let allAdmin: number;
  let userlink;
  const { id } = router.query;
  const getZone: any = getCookie('user');
  if (getZone === 'Admin') {
    // eslint-disable-next-line unused-imports/no-unused-vars
    allAdmin = 99;
    userlink = `/api/cost/costs/${id}`;
  } else {
    // eslint-disable-next-line unused-imports/no-unused-vars
    allAdmin = getZone;
    userlink = `/api/cost/costs/${getZone}`;
  }
  const token = getCookie('ps-jwt');
  useEffect(() => {
    // outer.push(`/costs/${id}`);
    if (!token) {
      router.push('/login');
    }
    if (
      [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 99].includes(Number(allAdmin)) === false
    ) {
      // eslint-disable-next-line no-alert
      alert('คุณไม่ได้รับสิทธิ์ให้ทำงานหน้านี้');
      router.push('/costs');
    }
  }, []);

  const { data, error } = useSWR([userlink, token], fetcher, {
    refreshInterval: 0
  });
  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  return (
    <Main
      meta={
        <Meta
          title='รายรับ - รายจ่าย บริษัท น้ำตาลพิษณุโลก จำกัด'
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
          isZone={`${id}`}
          isDel={true}
          isOuter={'outerDiv1'}
          isGrid={'list'}
          isGroup={false}
          isInlineNav={true}
          isTopPager={true}
          isCaption={`รายรับ - รายจ่าย บริษัท น้ำตาลพิษณุโลก จำกัด ${getZone}`}
        />
      </div>
    </Main>
  );
};

export default CostGroup;
