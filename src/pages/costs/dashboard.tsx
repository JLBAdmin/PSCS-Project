import { getCookie } from 'cookies-next';
import { NextPage } from 'next';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import useSWR from 'swr';

import BarReferer from '@/components/echarts/barReferer';
import BarY from '@/components/echarts/barY';
import {
  colModel,
  colName
} from '@/components/grid-headers/report.cost.header';
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/MainAccount';
import { fetcher } from '@/utils/requireAuthentication';

const Costs = dynamic(() => import('@/components/grid-tables/grid-costs'), {
  ssr: false
});

const ToDate = new Date().toISOString().slice(0, 10);
let Date1: string | string[] | undefined;
let Date2: string | string[] | undefined;

const Cost: NextPage = () => {
  const router = useRouter();

  useEffect(() => {
    const getZone: any = getCookie('user');
    const token = getCookie('ps-jwt');
    if (!token) {
      router.push('/login');
    }
    if (['admin', 'Admin', 'all', 'All'].includes(getZone) === false) {
      // eslint-disable-next-line no-alert
      alert('คุณไม่ได้รับสิทธิ์ให้ทำงานหน้านี้');
      router.push('/costs');
    }
  }, []);
  if (Date1 !== undefined && Date2 !== undefined) {
    Date1 = router.query.date1 || '2022-10-01';
    Date2 = router.query.date2 || ToDate;
    // eslint-disable-next-line no-console
    // console.log(router.query);
  } else {
    Date1 = '2022-10-01';
    Date2 = ToDate;
    // eslint-disable-next-line no-console
  }

  const token = getCookie('ps-jwt');
  const { data, error } = useSWR(
    [`/api/cost/report/${Date1}&${Date2}`, token],
    fetcher
  );

  const { data: data1 } = useSWR(
    [`/api/cost/dash/1/${Date1}&${Date2}`, token],
    fetcher
  );

  const { data: data2 } = useSWR(
    [`/api/cost/dash/2/${Date1}&${Date2}`, token],
    fetcher
  );

  const { data: data3 } = useSWR(
    [`/api/cost/dashbar/1/${Date1}&${Date2}`, token],
    fetcher
  );

  const { data: data4 } = useSWR(
    [`/api/cost/dashbar/2/${Date1}&${Date2}`, token],
    fetcher
  );

  if (error) return <div>failed to load</div>;
  if (!data || !data1 || !data2 || !data3 || !data4)
    return <div>loading...</div>;
  return (
    <Main
      meta={
        <Meta
          title='งบประมาณรายบุคคล - บริษัท น้ำตาลพิษณุโลก จำกัด'
          description='งบประมาณชาวไร่อ้อยรายบุคคล ครอบคลุมทุกพื้นที่'
        />
      }
    >
      <form>
        <div>
          <label htmlFor='date1'>วันที่ </label>
          <input
            type='date'
            name='date1'
            // onChange={handleChange}
            // autoComplete='off'
          />
          <label htmlFor='date2'> ถึง </label>
          <input
            type='date'
            name='date2'
            // onChange={handleChange}
            // autoComplete='off'
          />

          <button type='submit'>ค้นหา</button>
        </div>
      </form>
      <div className='mt-6 grid grid-cols-2 gap-6 xl:grid-cols-1'>
        <div className='card border-teal-400 text-white shadow-md'>
          <div className='card-body flex flex-row'>
            <BarReferer
              isCaption={'bar-brush1'}
              isText={'รายได้'}
              isData={data1}
              isStyle={{ width: '100%', height: '50vh' }}
            />
          </div>
        </div>

        <div className='card border-teal-400 text-white shadow-md'>
          <div className='card-body flex flex-row'>
            <BarReferer
              isCaption={'bar-brush2'}
              isText={'ค่าใช้จ่าย'}
              isData={data2}
              isStyle={{ width: '100%', height: '50vh' }}
            />
          </div>
        </div>
      </div>

      <div className='mt-6 grid grid-cols-2 gap-6 xl:grid-cols-1'>
        <div className='card border-teal-400 text-white shadow-md'>
          <div className='card-body flex flex-row'>
            <BarY
              isCaption={'bar-brush3'}
              isText={'ทดสอบกราฟ 1'}
              isData={data3}
              isStyle={{ width: '100%', height: '50vh' }}
            />
          </div>
        </div>

        <div className='card border-teal-400 text-white shadow-md'>
          <div className='card-body flex flex-row'>
            <BarY
              isCaption={'bar-brush4'}
              isText={'ทดสอบกราฟ 2'}
              isData={data4}
              isStyle={{ width: '100%', height: '50vh' }}
            />
          </div>
        </div>
      </div>

      <div className='mt-1 grid grid-cols-1 gap-1 xl:grid-cols-1'>
        <div className='card border-teal-800 text-black shadow-md'>
          <div className='card-body'>
            <Costs
              impData={data}
              colModel={colModel}
              colNames={colName}
              isTable={'cost'}
              isGrid={'list'}
              isOuter={'outerDiv1'}
              isGroup={true}
              isInlineNav={false}
              isTopPager={false}
              isCaption={`สรุปรายรับ - รายจ่าย บริษัท น้ำตาลพิษณุโลก จำกัด`}
            />
          </div>
        </div>
      </div>
    </Main>
  );
};

export default Cost;
