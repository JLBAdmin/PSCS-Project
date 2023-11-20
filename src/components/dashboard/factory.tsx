/* eslint-disable prettier/prettier */
// import axios from 'axios';
import axios from 'axios';
import { getCookie } from 'cookies-next';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import useSWR from 'swr';

import { days, toDate } from '@/public/js/dashboard';

import LineRaces1 from '../echarts/LineRace1';
import PieChart from '../echarts/pieChart';
import PieChart1 from '../echarts/pieChart1';
import ShareDataset from '../echarts/shareDataset';
import ShareDataset1 from '../echarts/shareDataset1';
import Temperature from '../echarts/Temperature';


const fetcher = (url: string) => axios.get(url).then((res) => res.data);

const Factorys = ({ isData, isFactory, isCompany, isCCS, isGroup, isCCSG, isAffiliated}: any) => {
  const router = useRouter();
  useEffect(() => {
    const token = getCookie('ps-jwt');

    if (!token) {
      router.push('/login');
    }
  }, [isData, isFactory, isCompany, isCCS, isGroup, isCCSG, isAffiliated]);

  const { data, error } = useSWR(`/api/company/get-company`, fetcher, {
    refreshInterval: 10000
  });

  const { data: group } = useSWR(`/api/company/get-group`, fetcher, {
    refreshInterval: 10000
  });

  if (error) return <div>failed to load</div>;
  if (!data || !group) return <div>loading...</div>;
  
  const factoryCountries: any[] = [];
  data.forEach((item: any) => {
      
      factoryCountries.push(item.factory);
  })

  const groupCountries: any[] = [];
  group.forEach((item: any) => {
    groupCountries.push(item.factory);
  })

  const ccsSugar: any = [];
  if (isCCS) {
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < isCCS.length; i++) {
      ccsSugar.push({
        'name': isCCS[i].factory,
        'type': 'line',
        data: [isCCS[i].ccs1, isCCS[i].ccs2, isCCS[i].ccs3, isCCS[i].ccs4, isCCS[i].ccs5, isCCS[i].ccs6, isCCS[i].ccs7, isCCS[i].ccs8, isCCS[i].ccs9, isCCS[i].ccs10, 
                isCCS[i].ccs11, isCCS[i].ccs12, isCCS[i].ccs13, isCCS[i].ccs14, isCCS[i].ccs15, isCCS[i].ccs16, isCCS[i].ccs17, isCCS[i].ccs18, isCCS[i].ccs19, isCCS[i].ccs20,
                isCCS[i].ccs21, isCCS[i].ccs22, isCCS[i].ccs23, isCCS[i].ccs24, isCCS[i].ccs25, isCCS[i].ccs26, isCCS[i].ccs27, isCCS[i].ccs28, isCCS[i].ccs29, isCCS[i].ccs30,
                isCCS[i].ccs31, isCCS[i].ccs32, isCCS[i].ccs33, isCCS[i].ccs34, isCCS[i].ccs35, isCCS[i].ccs36, isCCS[i].ccs37, isCCS[i].ccs38, isCCS[i].ccs39, isCCS[i].ccs40,
                isCCS[i].ccs41, isCCS[i].ccs42, isCCS[i].ccs43, isCCS[i].ccs44, isCCS[i].ccs45, isCCS[i].ccs46, isCCS[i].ccs47, isCCS[i].ccs48, isCCS[i].ccs49, isCCS[i].ccs50,
                isCCS[i].ccs51, isCCS[i].ccs52, isCCS[i].ccs53, isCCS[i].ccs54, isCCS[i].ccs55, isCCS[i].ccs56, isCCS[i].ccs57, isCCS[i].ccs58, isCCS[i].ccs59, isCCS[i].ccs60,
                isCCS[i].ccs61, isCCS[i].ccs62, isCCS[i].ccs63, isCCS[i].ccs64, isCCS[i].ccs65, isCCS[i].ccs66, isCCS[i].ccs67, isCCS[i].ccs68, isCCS[i].ccs69, isCCS[i].ccs70,
                isCCS[i].ccs71, isCCS[i].ccs72, isCCS[i].ccs73, isCCS[i].ccs74, isCCS[i].ccs75, isCCS[i].ccs76, isCCS[i].ccs77, isCCS[i].ccs78, isCCS[i].ccs79, isCCS[i].ccs80,
                isCCS[i].ccs81, isCCS[i].ccs82, isCCS[i].ccs83, isCCS[i].ccs84, isCCS[i].ccs85, isCCS[i].ccs86, isCCS[i].ccs87, isCCS[i].ccs88, isCCS[i].ccs89, isCCS[i].ccs90, 
                isCCS[i].ccs91, isCCS[i].ccs92, isCCS[i].ccs93, isCCS[i].ccs94, isCCS[i].ccs95, isCCS[i].ccs96, isCCS[i].ccs97, isCCS[i].ccs98, isCCS[i].ccs99, isCCS[i].ccs100],
        markPoint: {
          data: [
            { type: 'max', name: 'Max' },
            { type: 'min', name: 'Min' }
          ]
        }
    })
    }
  } 

  const ccsGroup: any = [];
  if (isCCSG) {
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < isCCSG.length; i++) {
      ccsGroup.push({
        'name': isCCSG[i].factory,
        'type': 'line',
        data: [isCCSG[i].ccs1, isCCSG[i].ccs2, isCCSG[i].ccs3, isCCSG[i].ccs4, isCCSG[i].ccs5, isCCSG[i].ccs6, isCCSG[i].ccs7, isCCSG[i].ccs8, isCCSG[i].ccs9, isCCSG[i].ccs10, 
                isCCSG[i].ccs11, isCCSG[i].ccs12, isCCSG[i].ccs13, isCCSG[i].ccs14, isCCSG[i].ccs15, isCCSG[i].ccs16, isCCSG[i].ccs17, isCCSG[i].ccs18, isCCSG[i].ccs19, isCCSG[i].ccs20,
                isCCSG[i].ccs21, isCCSG[i].ccs22, isCCSG[i].ccs23, isCCSG[i].ccs24, isCCSG[i].ccs25, isCCSG[i].ccs26, isCCSG[i].ccs27, isCCSG[i].ccs28, isCCSG[i].ccs29, isCCSG[i].ccs30,
                isCCSG[i].ccs31, isCCSG[i].ccs32, isCCSG[i].ccs33, isCCSG[i].ccs34, isCCSG[i].ccs35, isCCSG[i].ccs36, isCCSG[i].ccs37, isCCSG[i].ccs38, isCCSG[i].ccs39, isCCSG[i].ccs40,
                isCCSG[i].ccs41, isCCSG[i].ccs42, isCCSG[i].ccs43, isCCSG[i].ccs44, isCCSG[i].ccs45, isCCSG[i].ccs46, isCCSG[i].ccs47, isCCSG[i].ccs48, isCCSG[i].ccs49, isCCSG[i].ccs50,
                isCCSG[i].ccs51, isCCSG[i].ccs52, isCCSG[i].ccs53, isCCSG[i].ccs54, isCCSG[i].ccs55, isCCSG[i].ccs56, isCCSG[i].ccs57, isCCSG[i].ccs58, isCCSG[i].ccs59, isCCSG[i].ccs60,
                isCCSG[i].ccs61, isCCSG[i].ccs62, isCCSG[i].ccs63, isCCSG[i].ccs64, isCCSG[i].ccs65, isCCSG[i].ccs66, isCCSG[i].ccs67, isCCSG[i].ccs68, isCCSG[i].ccs69, isCCSG[i].ccs70,
                isCCSG[i].ccs71, isCCSG[i].ccs72, isCCSG[i].ccs73, isCCSG[i].ccs74, isCCSG[i].ccs75, isCCSG[i].ccs76, isCCSG[i].ccs77, isCCSG[i].ccs78, isCCSG[i].ccs79, isCCSG[i].ccs80,
                isCCSG[i].ccs81, isCCSG[i].ccs82, isCCSG[i].ccs83, isCCSG[i].ccs84, isCCSG[i].ccs85, isCCSG[i].ccs86, isCCSG[i].ccs87, isCCSG[i].ccs88, isCCSG[i].ccs89, isCCSG[i].ccs90, 
                isCCSG[i].ccs91, isCCSG[i].ccs92, isCCSG[i].ccs93, isCCSG[i].ccs94, isCCSG[i].ccs95, isCCSG[i].ccs96, isCCSG[i].ccs97, isCCSG[i].ccs98, isCCSG[i].ccs99, isCCSG[i].ccs100],
        markPoint: {
          data: [
            { type: 'max', name: 'Max' },
            { type: 'min', name: 'Min' }
          ]
        }
    })
    }
  } 

  return (
    <>
      <div className='mt-6 grid grid-cols-1 gap-6 xl:grid-cols-1'>
        <div className='card border-teal-400 text-white shadow-md'>
          <div className='card-body flex flex-row'>
            <ShareDataset
              isCaption={'factoryAll1'}
              isText={'รายงานปริมาณอ้อยเข้าหีบและสัดส่วน ประจำวันที่'}
              isSubText={'โรงงานน้ำตาลในเขตคำนวนราคาที่ 2'}
              isToDay={toDate}
              isData={isData}
              isFactory={isFactory}
              isStyle={{ width: '100%', height: '70vh' }}
            />
          </div>
        </div>
      </div>

      {/* <div className='m-1 grid grid-cols-1 gap-3 xl:grid-cols-1'>
        <div className='card border-teal-400 text-black shadow-xl'>
          <div className='card-body flex flex-row'>
              <Reports />
          </div>
        </div>
      </div> */}

      <div className='mt-6 grid grid-cols-1 gap-6 xl:grid-cols-1'>
        <div className='card border-teal-400 text-white shadow-md'>
          <div className='card-body flex flex-row'>
            <Temperature
              isCaption={'CCS'}
              isText={'CCS N`2'}
              isData={ccsSugar}
              isDay={days}
              isStyle={{ width: '100%', height: '50vh' }}
            />
          </div>
        </div>
      </div>

      <div className='mt-6 grid grid-cols-1 gap-6 xl:grid-cols-1'>
        <div className='card border-teal-400 text-white shadow-md'>
          <div className='card-body flex flex-row'>
            <ShareDataset1
              isCaption={'factoryAll2'}
              isText={'ตันอ้อยในเครือ'}
              isData={isGroup}
              isFactory={isFactory}
              isStyle={{ width: '100%', height: '70vh' }}
            />
          </div>
        </div>
      </div>

      <div className='mt-6 grid grid-cols-1 gap-6 xl:grid-cols-1'>
        <div className='card border-teal-400 text-white shadow-md'>
          <div className='card-body flex flex-row'>
            <Temperature
              isCaption={'CCSA'}
              isText={'CCS ในเครือ'}
              isData={ccsGroup}
              isDay={days}
              isStyle={{ width: '100%', height: '50vh' }}
            />
          </div>
        </div>
      </div>
      {/* <!-- end content --> */}
      <div className='mt-6 grid grid-cols-2 gap-6 xl:grid-cols-1'>
        {/* <!-- update section --> */}
        <div className='card border-teal-400 text-white shadow-md'>
          <div className='card-body flex flex-row'>
            <PieChart
              isCaption={'factory-pie'}
              isData={isCompany}
              Text={'เป้าหมายอ้อยเข้าหีบโรงงานกลุ่ม N`2'}
              subText={''}
              iaRadius={[20, 150]}
              isCenter={['50%', '50%']}
              isStyle={{ width: '100%', height: '50vh' }}
            />
          </div>
        </div>
        {/* <!-- end update section --> */}

        {/* <!-- carts --> */}
        <div className='flex flex-col'>
          {/* <!-- charts --> */}
          <div className='card grid-cols-1 gap-6 border-teal-400 text-white shadow-md'>
            <div className='card-body flex flex-row'>
               <LineRaces1
                isCaption={'zone-line1'}
                isData={factoryCountries}
                Text={'อ้อยเข้าหีบโรงงานกลุ่ม N`2'}
                subText={''}
                zone={true}
              />
            </div>
          </div>
          {/* <!-- charts    --> */}
        </div>
        {/* <!-- end charts --> */}
      </div>

      <div className='mt-6 grid grid-cols-2 gap-6 xl:grid-cols-1'>
        {/* <!-- update section --> */}
        <div className='card border-teal-400 text-white shadow-md'>
          <div className='card-body flex flex-row'>
            <PieChart1
              isCaption={'factory_pie'}
              isData={isAffiliated}
              Text={'เป้าหมายอ้อยเข้าหีบโรงงานในเครือ'}
              subText={''}
              iaRadius={[20, 150]}
              isCenter={['50%', '50%']}
              isStyle={{ width: '100%', height: '50vh' }}
            />
          </div>
        </div>
        {/* <!-- end update section --> */}

        <div className='flex flex-col'>
    
          <div className='card grid-cols-1 gap-6 border-teal-400 text-white shadow-md'>
            <div className='card-body flex flex-row'>
               <LineRaces1
                isCaption={'zone-line21'}
                isData={groupCountries}
                Text={'อ้อยเข้าหีบโรงงานในเครือ'}
                subText={''}
                zone={true}
              />
            </div>
          </div>
          
        </div>
       
      </div>
    </>
  );
};

export default Factorys;
