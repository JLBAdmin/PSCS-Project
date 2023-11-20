/* eslint-disable prettier/prettier */
// import axios from 'axios';
import axios from 'axios';
import { getCookie } from 'cookies-next';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import useSWR from 'swr';

import { Capacity,CapacityLable,days } from '@/public/js/dashboard'

import LineRaces from '../echarts/LineRace';
import MixedLineBar from '../echarts/MixedLineandBar';
import MixedLineBar00 from '../echarts/MixedLineandBar00';
import MixedLineBar01 from '../echarts/MixedLineandBar01';
import MixedLineBar11 from '../echarts/MixedLineandBar11';
import StackedArea from '../echarts/stackedArea';

const fetcher = (url: string) => axios.get(url).then((res) => res.data);
// const CaneReport = dynamic(() => import('@/components/cane-reports/canehourly.day'), {
//   ssr: false
// });

const Canes = ({ isData }: any) => {
  const router = useRouter();
  const { id } = router.query;
  useEffect(() => {
    const token = getCookie('ps-jwt');

    if (!token) {
      router.push('/login');
    }
  }, [isData]);

  const { data: Plan , error } = useSWR(`/api/factory/get-plan/9/0/${id}`, fetcher, {
    refreshInterval: 100000
  });

  const { data: comeTrue } = useSWR(`/api/factory/get-plan/1/2/${id}`, fetcher, {
    refreshInterval: 100000
  });

  const { data: targetCane } = useSWR(`/api/subzone/get-target/${id}`, fetcher, {
    refreshInterval: 100000
  });

  const { data: zone } = useSWR(`/api/subzone/get-zone/${id}`, fetcher, {
    refreshInterval: 100000
  });

  const { data: CaneZone } = useSWR(`/api/target/get-zone/${id}`, fetcher, {
    refreshInterval: 100000
  });

  const { data: CanePlan } = useSWR(`/api/subzone/get-fllow/${id}`, fetcher, {
    refreshInterval: 100000
  });

  const { data: ZoneTarget } = useSWR(`/api/subzone/get-todate/${id}`, fetcher, {
    refreshInterval: 100000
  });
  
  if (error) return <div>failed to load</div>;
  if (!Plan || !comeTrue || !targetCane || !zone || !CaneZone || !CanePlan || !ZoneTarget) return <div>Loading...</div>
  let SugarcanePlan: any;
  if (Plan.length > 0) {
    // eslint-disable-next-line unused-imports/no-unused-vars
    SugarcanePlan = [
    Plan[0].day1,
    Plan[0].day2,
    Plan[0].day3,
    Plan[0].day4,
    Plan[0].day5,
    Plan[0].day6,
    Plan[0].day7,
    Plan[0].day8,
    Plan[0].day9,
    Plan[0].day10,
    Plan[0].day11,
    Plan[0].day12,
    Plan[0].day13,
    Plan[0].day14,
    Plan[0].day15,
    Plan[0].day16,
    Plan[0].day17,
    Plan[0].day18,
    Plan[0].day19,
    Plan[0].day20,
    Plan[0].day21,
    Plan[0].day22,
    Plan[0].day23,
    Plan[0].day24,
    Plan[0].day25,
    Plan[0].day26,
    Plan[0].day27,
    Plan[0].day28,
    Plan[0].day29,
    Plan[0].day30,
    Plan[0].day31,
    Plan[0].day32,
    Plan[0].day33,
    Plan[0].day34,
    Plan[0].day35,
    Plan[0].day36,
    Plan[0].day37,
    Plan[0].day38,
    Plan[0].day39,
    Plan[0].day40,
    Plan[0].day41,
    Plan[0].day42,
    Plan[0].day43,
    Plan[0].day44,
    Plan[0].day45,
    Plan[0].day46,
    Plan[0].day47,
    Plan[0].day48,
    Plan[0].day49,
    Plan[0].day50,
    Plan[0].day51,
    Plan[0].day52,
    Plan[0].day53,
    Plan[0].day54,
    Plan[0].day55,
    Plan[0].day56,
    Plan[0].day57,
    Plan[0].day58,
    Plan[0].day59,
    Plan[0].day60,
    Plan[0].day61,
    Plan[0].day62,
    Plan[0].day63,
    Plan[0].day64,
    Plan[0].day65,
    Plan[0].day66,
    Plan[0].day67,
    Plan[0].day68,
    Plan[0].day69,
    Plan[0].day70,
    Plan[0].day71,
    Plan[0].day72,
    Plan[0].day73,
    Plan[0].day74,
    Plan[0].day75,
    Plan[0].day76,
    Plan[0].day77,
    Plan[0].day78,
    Plan[0].day79,
    Plan[0].day80,
    Plan[0].day81,
    Plan[0].day82,
    Plan[0].day83,
    Plan[0].day84,
    Plan[0].day85,
    Plan[0].day86,
    Plan[0].day87,
    Plan[0].day88,
    Plan[0].day89,
    Plan[0].day90,
    Plan[0].day91,
    Plan[0].day92,
    Plan[0].day93,
    Plan[0].day94,
    Plan[0].day95,
    Plan[0].day96,
    Plan[0].day97,
    Plan[0].day98,
    Plan[0].day99
   ]
  }
  let SugarcaneTure: any;
  if (comeTrue.length > 0) {
    // eslint-disable-next-line unused-imports/no-unused-vars
    SugarcaneTure = [
      comeTrue[0].day1,
      comeTrue[0].day2,
      comeTrue[0].day3,
      comeTrue[0].day4,
      comeTrue[0].day5,
      comeTrue[0].day6,
      comeTrue[0].day7,
      comeTrue[0].day8,
      comeTrue[0].day9,
      comeTrue[0].day10,
      comeTrue[0].day11,
      comeTrue[0].day12,
      comeTrue[0].day13,
      comeTrue[0].day14,
      comeTrue[0].day15,
      comeTrue[0].day16,
      comeTrue[0].day17,
      comeTrue[0].day18,
      comeTrue[0].day19,
      comeTrue[0].day20,
      comeTrue[0].day21,
      comeTrue[0].day22,
      comeTrue[0].day23,
      comeTrue[0].day24,
      comeTrue[0].day25,
      comeTrue[0].day26,
      comeTrue[0].day27,
      comeTrue[0].day28,
      comeTrue[0].day29,
      comeTrue[0].day30,
      comeTrue[0].day31,
      comeTrue[0].day32,
      comeTrue[0].day33,
      comeTrue[0].day34,
      comeTrue[0].day35,
      comeTrue[0].day36,
      comeTrue[0].day37,
      comeTrue[0].day38,
      comeTrue[0].day39,
      comeTrue[0].day40,
      comeTrue[0].day41,
      comeTrue[0].day42,
      comeTrue[0].day43,
      comeTrue[0].day44,
      comeTrue[0].day45,
      comeTrue[0].day46,
      comeTrue[0].day47,
      comeTrue[0].day48,
      comeTrue[0].day49,
      comeTrue[0].day50,
      comeTrue[0].day51,
      comeTrue[0].day52,
      comeTrue[0].day53,
      comeTrue[0].day54,
      comeTrue[0].day55,
      comeTrue[0].day56,
      comeTrue[0].day57,
      comeTrue[0].day58,
      comeTrue[0].day59,
      comeTrue[0].day60,
      comeTrue[0].day61,
      comeTrue[0].day62,
      comeTrue[0].day63,
      comeTrue[0].day64,
      comeTrue[0].day65,
      comeTrue[0].day66,
      comeTrue[0].day67,
      comeTrue[0].day68,
      comeTrue[0].day69,
      comeTrue[0].day70,
      comeTrue[0].day71,
      comeTrue[0].day72,
      comeTrue[0].day73,
      comeTrue[0].day74,
      comeTrue[0].day75,
      comeTrue[0].day76,
      comeTrue[0].day77,
      comeTrue[0].day78,
      comeTrue[0].day79,
      comeTrue[0].day80,
      comeTrue[0].day81,
      comeTrue[0].day82,
      comeTrue[0].day83,
      comeTrue[0].day84,
      comeTrue[0].day85,
      comeTrue[0].day86,
      comeTrue[0].day87,
      comeTrue[0].day88,
      comeTrue[0].day89,
      comeTrue[0].day90,
      comeTrue[0].day91,
      comeTrue[0].day92,
      comeTrue[0].day93,
      comeTrue[0].day94,
      comeTrue[0].day95,
      comeTrue[0].day96,
      comeTrue[0].day97,
      comeTrue[0].day98,
      comeTrue[0].day99
    ];
  }

  const zoneCountries: any[] = [];

  zone.forEach((item: any) => {
    zoneCountries.push(item.Zone);
})


// เป้านำอ้อยเข้าหีบและเกิดจริงรายนักส่งเสริม
const PlanZone: any[] =[];
const PlanTarget: any[] =[];
const PlanCane: any[] =[];
const PlanFollow: any[] =[];


// by subzone ภาพรวมส่งอ้อยนักส่งเสริม
CanePlan.forEach((item: any) => {
  PlanZone.push(item.surveyName)
  PlanTarget.push(item.target)
  PlanCane.push(item.plan)
  PlanFollow.push(item.follow)
});

const result: any[] = [];
const zoneNames: any[] = [];
const zoneTatgets: any[] = [];
const zonePlan: any[] = [];
const zoneFollow: any[] = [];
// SUM by zone ภาพรวมส่งอ้อยแบ่งเขต
CanePlan.reduce((res: any, value: any): {} => {
  if (!res[value.zone]) {
    res[value.zone] = { zone: value.zone, target: 0, plan: 0, follow: 0 };
    // res[value.target] = { target: value.target };
   
    result.push(res[value.zone]);
    zoneNames.push(`เขตส่งเสริมที่ ${value.zone}`);   
  }
    res[value.zone].target += value.target
    res[value.zone].plan += value.plan 
    res[value.zone].follow += value.follow
    return res;
}, {});
result.forEach((item: any) => { zoneTatgets.push(item.target); zonePlan.push(item.plan); zoneFollow.push(item.follow) })

const resultM: any[] = [];
const MNames: any[] = [];
const MTatgets: any[] = [];
const MPlan: any[] = [];
const MFollow: any[] = [];
// SUM by zone ภาพรวมส่งอ้อยแบ่งตามรอง ผจก
CanePlan.reduce((res: any, value: any): {} => {
  if (!res[value.targetManager]) {
    res[value.targetManager] = { targetManager: value.targetManager, target: 0, plan: 0, follow: 0 };
    // res[value.target] = { target: value.target };
   
    resultM.push(res[value.targetManager]);
     MNames.push(`รอง ผจก. ${value.targetManager}`);   
  }
    res[value.targetManager].target += value.target
    res[value.targetManager].plan += value.plan 
    res[value.targetManager].follow += value.follow
    return res;
}, {});
resultM.forEach((item: any) => { MTatgets.push(item.target); MPlan.push(item.plan); MFollow.push(item.follow) })

// eslint-disable-next-line @typescript-eslint/no-redeclare
const rec: any = [];
const TargetManager: any[] = [];
const ComeTrueManager: any[] = [];
const ComeBurnManager: any[] = [];
const CaneTotalManager: any[] = [];
const NameManaget: any[] = [];

ZoneTarget.reduce((res: any, value: any) => {
  if (!res[value.targetManager]) {
    res[value.targetManager] = { targetManager: value.targetManager, targetDay: 0, caneDate: 0,  burnDate: 0, totalCane: 0};
    rec.push(res[value.targetManager]);
    NameManaget.push(`รอง ผจก.${value.targetManager}`)
  }
  res[value.targetManager].targetDay += value.targetDay;
  res[value.targetManager].caneDate += value.caneDate;
  res[value.targetManager].burnDate += value.burnDate;
  res[value.targetManager].totalCane += (value.burnDate +  value.caneDate);
  return res;
}, {});
rec.forEach((item: any) => { TargetManager.push(item.targetDay); ComeTrueManager.push(item.caneDate);  ComeBurnManager.push(item.burnDate); CaneTotalManager.push(item.totalCane) });

// eslint-disable-next-line @typescript-eslint/no-redeclare
const recZone: any = [];
const TargetZone: any[] = [];
const ComeTrueZone: any[] = [];
const ComeBurnZone: any[] = [];
const NameZone: any[] = [];

ZoneTarget.reduce((res: any, value: any) => {
  if (!res[value.zone]) {
    res[value.zone] = { zone: value.zone, targetDay: 0, caneDate: 0, burnDate: 0};
    recZone.push(res[value.zone]);
    NameZone.push(`เขตส่งเสริมที่ .${value.zone}`)
  }
  res[value.zone].targetDay += value.targetDay;
  res[value.zone].caneDate += value.caneDate;
  res[value.zone].burnDate += value.burnDate;
  return res;
}, {});

// eslint-disable-next-line no-console
recZone.forEach((item: any) => { TargetZone.push(item.targetDay); ComeTrueZone.push(item.caneDate);  ComeBurnZone.push(item.burnDate)  });


// eslint-disable-next-line @typescript-eslint/no-redeclare
const recSubZone: any = [];
const TargetSubZone: any[] = [];
const ComeTrueSubZone: any[] = [];
const ComeBurnSubZone: any[] = [];
const NameSubZone: any[] = [];

ZoneTarget.reduce((res: any, value: any) => {
  if (!res[value.subZone]) {
    res[value.subZone] = { subZone: value.subZone, targetDay: 0, caneDate: 0, burnDate: 0};
    recSubZone.push(res[value.subZone]);
    NameSubZone.push(value.surveyName)
  }
  res[value.subZone].targetDay += value.targetDay;
  res[value.subZone].caneDate += value.caneDate;
  res[value.subZone].burnDate += value.burnDate;
  return res;
}, {});

// eslint-disable-next-line no-console
recSubZone.forEach((item: any) => { TargetSubZone.push(item.targetDay); ComeTrueSubZone.push(item.caneDate); ComeBurnSubZone.push(item.burnDate) });
  return (
    <>
      {/* <div className='mt-6 grid grid-cols-2 gap-6 xl:grid-cols-1'> */}
{/* 
        <div className='card border-teal-400 text-white shadow-md'>
          <div className='card-body flex flex-row'>
            <BudgetChart3
              isCaption={'bar-chart-year'}
              isManag={cropYear}
              isLable={planLable}
              isStyle={{ width: '100%', height: '25vh' }}
            />
          </div>
        </div> */}
       
        {/* <div className='flex flex-col'>
          <div className='card grid-cols-1 gap-6 border-teal-400 text-white shadow-md'>
            <div className='card-body flex flex-row'>
              <BudgetChart2
                isCaption={'bar-chart-area1'}
                isManag={cropYear}
                isLable={areaLable}
                isStyle={{ width: '100%', height: '25vh' }}
              />
            </div>
          </div>
        </div> */}
      {/* </div> */}

      <div className='mt-6 grid grid-cols-1 gap-6 xl:grid-cols-1'>
        <div className='card border-teal-400 text-white shadow-md'>
          <div className='card-body flex flex-row'>
            <StackedArea
              isCaption={'day-cane'}
              isData={days}
              isPlan={SugarcanePlan}
              isTrue={SugarcaneTure}
              Text={'อ้อยเข้าหีบเทียบแผน'}
              isCapacity={Capacity}
              isCapaLable={CapacityLable}
            />
          </div>
        </div>
      </div>

      <div className='mt-6 grid grid-cols-2 gap-6 xl:grid-cols-1'>
        <div className='card border-teal-400 text-white shadow-md'>
          <div className='card-body flex flex-row'>
            <MixedLineBar11
              isCaption={'target-cane33'}
              isData1={NameSubZone}
              isData2={ComeBurnSubZone}
              isData22={ComeTrueSubZone}
              isData3={TargetSubZone}
              isData4={ComeTrueSubZone}
              isMax={160000}
              isInterval={10000}
              isText={'ปริมาณอ้อยเข้าหีบสะสมรายนักส่งเสริม ประจำวันที่'}
              isStyle={{ width: '100%', height: '50vh' }}
            />
          </div>
        </div>
    
        <div className='card border-teal-400 text-white shadow-md'>
          <div className='card-body flex flex-row'>
            <MixedLineBar01
              isCaption={'target-cane22'}
              isData1={PlanZone}
              isData2={PlanTarget}
              isData3={PlanCane}
              isData4={PlanFollow}
              isMax={160000}
              isInterval={10000}
              isText={'ภาพรวมอ้อยเข้าหีบรายนักส่งเสริม ถึงวันที่'}
              isStyle={{ width: '100%', height: '50vh' }}
            />
          </div>
        </div>
      
      </div>

      <div className='mt-6 grid grid-cols-2 gap-6 xl:grid-cols-1'>
        <div className='card border-teal-400 text-white shadow-md'>
          <div className='card-body flex flex-row'>
          <MixedLineBar11
              isCaption={'target-cane333'}
              isData1={NameZone}
              isData2={ComeBurnZone}
              isData22={ComeTrueZone}
              isData3={TargetZone}
              isData4={ComeTrueZone}
              isMax={400000}
              isInterval={50000}
              isText={'ปริมาณอ้อยเข้าหีบสะสมรายเขต ประจำวันที่'}
              isStyle={{ width: '100%', height: '50vh' }}
            />
          </div>
        </div>
    
        <div className='card border-teal-400 text-white shadow-md'>
          <div className='card-body flex flex-row'>
          <MixedLineBar
              isCaption={'target-cane111'}
              isData1={zoneNames}
              isData2={zoneTatgets}
              isData3={zonePlan}
              isData4={zoneFollow}
              isMax={400000}
              isInterval={50000}
              isText={'ภาพรวมอ้อยเข้าหีบรายเขต ถึงวันที่'}
              isStyle={{ width: '100%', height: '50vh' }}
            />
          </div>
        </div>
      
      </div>

        <div className='mt-6 grid grid-cols-2 gap-6 xl:grid-cols-1'>
      
      <div className='card border-teal-400 text-white shadow-md'>
        <div className='card-body flex flex-row'>
          {/* <PieChart
              isCaption={'zone-pie11'}
              isData={isData}
              isLegend={[]}
              iaRadius={[50, 190]}
              Text={'เป้าหมายอ้อยเข้าหีบน้ำตาลพิษณุโลก'}
              subText={'ปริมาณตามเขต'}
              isCenter={['50%', '50%']}
              isStyle={{ width: '100%', height: '50vh' }}
            /> */}
           <MixedLineBar11
              isCaption={'target-cane444'}
              isData1={NameManaget}
              isData2={ComeBurnManager}
              isData22={ComeTrueManager}
              isData3={TargetManager}
              isData4={CaneTotalManager}
              isMax={950000}
              isInterval={50000}
              isText={'ปริมาณอ้อยเข้าหีบสะสมราย ผจก. ถึงวันที่'}
              isStyle={{ width: '100%', height: '50vh' }}
            />
        </div>
      </div>
     
     
        <div className='card grid-cols-1 gap-6 border-teal-400 text-white shadow-md'>
          <div className='card-body flex flex-row'>
          <MixedLineBar00
              isCaption={'target-cane2'}
              isData1={MNames}
              isData2={MTatgets}
              isData3={MPlan}
              isData4={MFollow}
              isMax={950000}
              isInterval={50000}
              isText={'ภาพรวมอ้อยเข้าหีบรายเขต ณ วันที่'}
              isStyle={{ width: '100%', height: '50vh' }}
            />
          </div>
        </div>
  </div>
       
     

    <div className='mt-6 grid grid-cols-2 gap-6 xl:grid-cols-1'>
      
        <div className='card border-teal-400 text-white shadow-md'>
          <div className='card-body flex flex-row'>
            <LineRaces
                  isCaption={'zone-line1'}
                  isTarget={true}
                  isData={zoneCountries}
                  Text={'แผนอ้อยเข้าหีบเขตส่งเสริม'}
                  subText={'ปริมาณตามเขต'}
                  zone={true}
                />
          </div>
        </div>
       
        <div className='flex flex-col'>
          <div className='card grid-cols-1 gap-6 border-teal-400 text-white shadow-md'>
            <div className='card-body flex flex-row'>
              <LineRaces
                isCaption={'zone-line2'}
                isData={zoneCountries}
                Text={'อ้อยเข้าหีบจริงเขตส่งเสริม'}
                subText={'ปริมาณตามเขต'}
                zone={true}
              />
            </div>
          </div>
        
         </div>
        
    </div>

     
    </>
  );
};

export default Canes;
