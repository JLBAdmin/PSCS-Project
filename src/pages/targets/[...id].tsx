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

import { colModel, colName } from '@/components/grid-headers/target.header';
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';
import { fetcher } from '@/utils/requireAuthentication';

// const fetcher = (url: string) => axios.get(url).then((res) => res.data);

const Targets = dynamic(() => import('@/components/grid-tables/grid-master'), {
  ssr: false
});

const Zone: NextPage = () => {
  const router = useRouter();
  const token = getCookie('ps-jwt');
  const getZone: any = getCookie('zone');
  let allZone: number;
  let zonelink;
  const { id } = router.query;
  if (getZone === 'All') {
    // eslint-disable-next-line unused-imports/no-unused-vars
    allZone = 99;
    zonelink = `/api/target/get-targetzone/${id}`;
  } else {
    // eslint-disable-next-line unused-imports/no-unused-vars
    allZone = getZone;
    zonelink = `/api/target/get-targetzone/${getZone}`;
  }

  useEffect(() => {
    const token = getCookie('ps-jwt');
    if (!token) {
      router.push('/login');
    }
    if (
      [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 15, 99].includes(
        Number(allZone)
      ) === false
    ) {
      // eslint-disable-next-line no-alert
      alert('คุณไม่ได้รับสิทธิ์ให้ทำงานหน้านี้');
      router.push('/');
    }
  }, []);

  const { data, error } = useSWR([zonelink, token], fetcher, {
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
        <Targets
          impData={data}
          colModel={colModel}
          colNames={colName}
          isTable={'target'}
          isAction={true}
          // isOption={action}
          isImport={false}
          isCaption={`เป้าหมายส่งเสริม  ${getZone}`}
        />
      </div>
    </Main>
  );
};

export default Zone;
