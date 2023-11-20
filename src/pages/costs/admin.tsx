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

import { colModel, colName } from '@/components/grid-headers/admin.cost.header';
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/MainAccount';
import { fetcher } from '@/utils/requireAuthentication';

// const fetcher = (url: string) => axios.get(url).then((res) => res.data);

const Costs = dynamic(() => import('@/components/grid-tables/grid-costs'), {
  ssr: false
});

const CostGroup: NextPage = () => {
  const router = useRouter();
  // const token = getCookie('ps-jwt');
  const getZone: any = getCookie('user');
  // let allAdmin: number;
  let userlink;
  const { id } = router.query;
  if (getZone === 'Admin' || getZone === 'admin') {
    // eslint-disable-next-line unused-imports/no-unused-vars
    // allAdmin = 99;
    userlink = `/api/cost/costs/0`;
  } else {
    // eslint-disable-next-line unused-imports/no-unused-vars
    // allAdmin = getZone;
    userlink = `/api/cost/costs/${getZone}`;
  }
  const token = getCookie('ps-jwt');
  useEffect(() => {
    if (!token) {
      router.push('/login');
    }
    if (['admin', 'Admin', 'all', 'All'].includes(getZone) === false) {
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
          isOuter={'outerDiv1'}
          isGrid={'list'}
          isGroup={false}
          isInlineNav={true}
          isTopPager={true}
          isImport={false}
          isCaption={`รายรับ - รายจ่าย บริษัท น้ำตาลพิษณุโลก จำกัด ${getZone}`}
        />
      </div>
    </Main>
  );
};

export default CostGroup;
