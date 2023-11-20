/* eslint-disable tailwindcss/no-custom-classname */
// import axios from 'axios';
import { getCookie } from 'cookies-next';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

import {
  subColModel,
  subColName
} from '@/components/grid-headers/subBudget.header';
import { colModel, colName } from '@/components/grid-headers/targetzone.header';

import BudgetChart from '../echarts/budgetChart';
import { action } from '../grid-headers/budget.header';

// const fetcher = (url: string) => axios.get(url).then((res) => res.data);

const Targets = dynamic(() => import('@/components/grid-tables/grid-master'), {
  ssr: false
});

// let AreaNo: any = 0;
let TonProve: any = 0;
let TonNo: any = 0;
let BudgetProve: any = 0;
let BudgetNo: any = 0;
let AreaProve: any = 0;
let ProjectProve: any = 0;
let ProjectNo: any = 0;
let BudgetWorker: any = 0;
let BudgetWorkerNO: any = 0;
let LoanCurrent: any = 0;
let BudgetBalance: any = 0;
let MCSSAreaCount: any = 0;
let TargetAll: any = 0;
let BahtTon: any = 0;
let BahtRai: any = 0;
let SumM1: any = 0;
let SumM2: any = 0;
let SumM3: any = 0;
let SumAreaProveM1: any = 0;
let SumAreaProveM2: any = 0;
let SumAreaProveM3: any = 0;
let SumAreaMCSSM1: any = 0;
let SumAreaMCSSM2: any = 0;
let SumAreaMCSSM3: any = 0;
let TotalTargetAll: any = 0;
let TotalTargetNewArea: any = 0;
let TotalTargetCaneStump: any = 0;
let TotalTargetDemolishStump: any = 0;
let TotalTargetMcssArea: any = 0;
const Manager1: any = [];
const Manager2: any = [];
const Manager3: any = [];
const zoneM1: any = [];
const zoneM2: any = [];
const zoneM3: any = [];

const Budgets = ({ isTarget, isZoneTarget, isTopTarget, isCount }: any) => {
  const router = useRouter();
  // const { id } = router.query;
  const subLink = `${router.basePath}/api/quotas/get-budgets/`;
  useEffect(() => {
    const token = getCookie('ps-jwt');

    if (!token) {
      router.push('/login');
    }
  }, [isZoneTarget, isTopTarget, isCount]);

  const status00 = isCount.result1[0].Status00;
  const status01 = isCount.result2[0].Status01;
  const status02 = isCount.result3[0].Status02;
  const status03 = isCount.result4[0].Status03;
  const status04 = isCount.result5[0].Status04;

  if (isTarget) {
    // ผลรวมเป้าหมายตามเขต
    isTarget.forEach((item: any) => {
      TonProve += item.TonProve;
      BudgetProve += item.BudgetProve;
      AreaProve += item.AreaProve;
      TonNo += item.TonNo;
      BudgetNo += item.BudgetNo;
      ProjectProve += item.ProjectProve;
      ProjectNo += item.ProjectNo;
      BudgetWorker += item.Worker;
      BudgetWorkerNO += item.WorkerNo;
      LoanCurrent += item.LoanCurrent;
      BudgetBalance += item.BudgetProve - item.LoanCurrent;
      MCSSAreaCount += item.MCSSAreaCount;
      TargetAll += item.TargetAll;
      // ผลรวมพื้นที่ทั้งหมด
      TotalTargetAll += item.TargetAll;
      TotalTargetNewArea += item.TargetNewArea;
      TotalTargetCaneStump += item.TargetCaneStump;
      TotalTargetDemolishStump += item.TargetDemolishStump;
      TotalTargetMcssArea += item.MCSSAreaCount;
      // ผลรวมพื้นที่ รอง 1
      if (item.targetManager === '1') {
        SumM1 += item.TargetAll; // ผลรวมพื้นที่ใหม่ รอง 1
        SumAreaProveM1 += item.AreaProve; // ผลรวมพื้นที่รับส่งเสริม รอง 1
        SumAreaMCSSM1 += item.MCSSAreaCount; // ผลรวมพื้นที่เกิดจริง รอง 1
        Manager1.push(item.zone); // ดึงเขตจากรอง 1
      }
      // ผลรวมพื้นที่ รอง 2
      if (item.targetManager === '2') {
        SumM2 += item.TargetAll;
        SumAreaProveM2 += item.AreaProve;
        SumAreaMCSSM2 += item.MCSSAreaCount;
        Manager2.push(item.zone); // ดึงเขตจากรอง 2
        zoneM2.push(item.subZone); // ดึงรหัสส่งเสริมรอง 2
      }
      // ผลรวมพื้นที่ รอง 3
      if (item.targetManager === '3') {
        SumM3 += item.TargetAll;
        SumAreaProveM3 += item.AreaProve;
        SumAreaMCSSM3 += item.MCSSAreaCount;
        Manager3.push(item.zone); // ดึงเขตจากรอง 3
        zoneM3.push(item.subZone); // ดึงรหัสส่งเสิรมรอง 3
      }
    });
  }
  if (isZoneTarget) {
    // ผลรวมเป้าหมายตามนักส่งเสริม
    isZoneTarget.forEach((item: any) => {
      if (item.targetManager === '1') {
        zoneM1.push(item.subZone); // ดึงรหัสส่งเสิรมรอง 1
      }
      if (item.targetManager === '2') {
        zoneM2.push(item.subZone); // ดึงรหัสส่งเสิรมรอง 1
      }
      if (item.targetManager === '3') {
        zoneM3.push(item.subZone); // ดึงรหัสส่งเสิรมรอง 1
      }
    });
  }

  const zoneLegend = [
    'พื้นที่รวม',
    'พื้นที่ใหม่',
    'พื้นที่ตอ',
    'พื้นที่รื้อตอ',
    'รับส่งเสริม',
    'เกิดจริง'
  ];

  BahtRai = BudgetProve / AreaProve;
  BahtTon = BudgetProve / TonProve;

  const AreaM11: any = (SumAreaMCSSM1 * 100) / SumAreaProveM1;
  const AreaM12: any = (SumAreaMCSSM1 * 100) / SumM1;

  const AreaM21: any = (SumAreaMCSSM2 * 100) / SumAreaProveM2;
  const AreaM22: any = (SumAreaMCSSM2 * 100) / SumM2;

  const AreaM31: any = (SumAreaMCSSM2 * 100) / SumAreaProveM3;
  const AreaM32: any = (SumAreaMCSSM2 * 100) / SumM3;

  const reqPercent: any = (BudgetProve * 100) / (BudgetProve + BudgetNo);
  // const reqPercent = parseFloat(Number(BudgetNo * 100)).toLocaleString(undefined, {
  //   minimumFractionDigits: 0
  // });

  const M1 = isTarget.filter((i: any) => Manager1.includes(i.zone)); // ค้นหาข้อมูลรอง 1 ids1
  const M2 = isTarget.filter((i: any) => Manager2.includes(i.zone)); // ค้นหาข้อมูลรอง 2 ids2
  const M3 = isTarget.filter((i: any) => Manager3.includes(i.zone)); // ค้นหาข้อมูลรอง 3 ids3

  const ZoneM1 = isZoneTarget.filter((i: any) => zoneM1.includes(i.subZone)); // ค้นหาข้อมูลนักส่งเสริมรอง 1
  const ZoneM2 = isZoneTarget.filter((i: any) => zoneM2.includes(i.subZone)); // ค้นหาข้อมูลนักส่งเสริมรอง 2
  const ZoneM3 = isZoneTarget.filter((i: any) => zoneM3.includes(i.subZone)); // ค้นหาข้อมูลนักส่งเสริมรอง 3

  const TopName: any = []; // ชื่อนักส่งเสริม TOP
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < isTopTarget.length; i++) {
    TopName.push(isTopTarget[i].surveyName);
  }

  const Manag1Name: any = []; // ชื่อเขตรอง 1
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < M1.length; i++) {
    Manag1Name.push(`เขต ${M1[i].zone}`);
  }

  const Manag2Name: any = []; // พื้นที่รวม TOP
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < M2.length; i++) {
    Manag2Name.push(`เขต ${M2[i].zone}`);
  }

  const Manag3Name: any = []; // พื้นที่รวม TOP
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < M3.length; i++) {
    Manag3Name.push(`เขต ${M3[i].zone}`);
  }

  const SubZone1Name: any = []; // รหัสนักส่เสริมรอง 1
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < ZoneM1.length; i++) {
    SubZone1Name.push(ZoneM1[i].subZone);
  }

  const SubZone2Name: any = []; // รหัสนักส่เสริมรอง 1
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < ZoneM2.length; i++) {
    SubZone2Name.push(ZoneM2[i].subZone);
  }

  const SubZone3Name: any = []; // รหัสนักส่เสริมรอง 1
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < ZoneM3.length; i++) {
    SubZone3Name.push(ZoneM3[i].subZone);
  }

  const targetAllTop: any = []; // พื้นที่รวม TOP
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < isTopTarget.length; i++) {
    targetAllTop.push(isTopTarget[i].TargetAll);
  }

  const targetNewTop: any = [];
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < isTopTarget.length; i++) {
    targetNewTop.push(isTopTarget[i].TargetNewArea);
  }

  const TargetCaneStumpTop: any = [];
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < isTopTarget.length; i++) {
    TargetCaneStumpTop.push(isTopTarget[i].TargetCaneStump);
  }

  const TargetDemolishStumpTop: any = [];
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < isTopTarget.length; i++) {
    TargetDemolishStumpTop.push(isTopTarget[i].TargetDemolishStump);
  }

  const mcssAreaTop: any = []; //  พื้นที่เกิดจริง MCSS นักส่งเสริมรอง 3
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < isTopTarget.length; i++) {
    mcssAreaTop.push(isTopTarget[i].MCSSAreaCount);
  }

  const AreaContractTop: any = [];
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < isTopTarget.length; i++) {
    AreaContractTop.push(isTopTarget[i].AreaProve);
  }

  const targetAll1: any = []; // พื้นที่รวม เขตรอง 1
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < M1.length; i++) {
    targetAll1.push(M1[i].TargetAll);
  }

  const targetAllZone1: any = []; // พื้นที่รวม นักส่งเสริมรอง 1
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < ZoneM1.length; i++) {
    targetAllZone1.push(ZoneM1[i].TargetAll);
  }

  const targetAllZone2: any = []; // พื้นที่รวม นักส่งเสริมรอง 2
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < ZoneM2.length; i++) {
    targetAllZone2.push(ZoneM2[i].TargetAll);
  }

  const targetAllZone3: any = []; // พื้นที่รวม นักส่งเสริมรอง 3
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < ZoneM3.length; i++) {
    targetAllZone3.push(ZoneM3[i].TargetAll);
  }

  const mcssAreaZone1: any = []; // พื้นที่เกิดจริง MCSS รอง 1
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < M1.length; i++) {
    mcssAreaZone1.push(M1[i].MCSSAreaCount);
  }

  const mcssAreaZone2: any = []; //  พื้นที่เกิดจริง MCSS รอง 2
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < M2.length; i++) {
    mcssAreaZone2.push(M2[i].MCSSAreaCount);
  }

  const mcssAreaZone3: any = []; //  พื้นที่เกิดจริง MCSS รอง 3
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < M3.length; i++) {
    mcssAreaZone3.push(M3[i].MCSSAreaCount);
  }

  const mcssAreaSubZone1: any = []; // พื้นที่เกิดจริง MCSS นักส่งเสริมรอง 1
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < ZoneM1.length; i++) {
    mcssAreaSubZone1.push(ZoneM1[i].MCSSAreaCount);
  }

  const mcssAreaSubZone2: any = []; //  พื้นที่เกิดจริง MCSS นักส่งเสริมรอง 2
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < ZoneM2.length; i++) {
    mcssAreaSubZone2.push(ZoneM2[i].MCSSAreaCount);
  }

  const mcssAreaSubZone3: any = []; //  พื้นที่เกิดจริง MCSS นักส่งเสริมรอง 3
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < ZoneM3.length; i++) {
    mcssAreaSubZone3.push(ZoneM3[i].MCSSAreaCount);
  }

  const targetNew1: any = []; // พื้นที่ใหม่ เขตรอง 1
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < M1.length; i++) {
    targetNew1.push(M1[i].TargetNewArea);
  }

  const targetNewZone1: any = []; // พื้นที่ใหม่ นักส่งเสริม รอง 1
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < ZoneM1.length; i++) {
    targetNewZone1.push(ZoneM1[i].TargetNewArea);
  }

  const targetNewZone2: any = []; // พื้นที่ใหม่ นักส่งเสริม รอง 2
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < ZoneM2.length; i++) {
    targetNewZone2.push(ZoneM2[i].TargetNewArea);
  }

  const targetNewZone3: any = []; // พื้นที่ใหม่ นักส่งเสริม รอง 3
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < ZoneM3.length; i++) {
    targetNewZone3.push(ZoneM3[i].TargetNewArea);
  }

  const TargetCaneStump1: any = []; // พื้นที่ตอ เขต รอง 1
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < M1.length; i++) {
    TargetCaneStump1.push(M1[i].TargetCaneStump);
  }

  const TargetCaneStumpZone1: any = []; // พื้นที่ตอ นักส่งเสริม รอง 1
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < ZoneM1.length; i++) {
    TargetCaneStumpZone1.push(ZoneM1[i].TargetCaneStump);
  }

  const TargetCaneStumpZone2: any = []; // พื้นที่ตอ นักส่งเสริม รอง 2
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < ZoneM2.length; i++) {
    TargetCaneStumpZone2.push(ZoneM2[i].TargetCaneStump);
  }

  const TargetCaneStumpZone3: any = []; // พื้นที่ตอ นักส่งเสริม รอง 3
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < ZoneM3.length; i++) {
    TargetCaneStumpZone3.push(ZoneM3[i].TargetCaneStump);
  }

  const TargetDemolishStump1: any = []; // พื้นที่รื้อตอเขต รอง 1
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < M1.length; i++) {
    TargetDemolishStump1.push(M1[i].TargetDemolishStump);
  }

  const TargetDemolishStumpZone1: any = []; // พื้นที่รื้อตอนักส่งเสริม รอง 1
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < ZoneM1.length; i++) {
    TargetDemolishStumpZone1.push(ZoneM1[i].TargetDemolishStump);
  }

  const TargetDemolishStumpZone2: any = []; // พื้นที่รื้อตอนักส่งเสริม รอง 2
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < ZoneM2.length; i++) {
    TargetDemolishStumpZone2.push(ZoneM2[i].TargetDemolishStump);
  }

  const TargetDemolishStumpZone3: any = []; // พื้นที่รื้อตอนักส่งเสริม รอง 3
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < ZoneM3.length; i++) {
    TargetDemolishStumpZone3.push(ZoneM3[i].TargetDemolishStump);
  }

  const AreaContract1: any = []; // พื้นที่อนุมัติงบเขต รอง 1
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < M1.length; i++) {
    AreaContract1.push(M1[i].AreaProve);
  }

  const AreaContractZone1: any = []; // พื้นที่อนุมัติงบนักส่งเสริม รอง 1
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < ZoneM1.length; i++) {
    AreaContractZone1.push(ZoneM1[i].AreaProve);
  }

  const AreaContractZone2: any = []; // พื้นที่อนุมัติงบนักส่งเสริม รอง 2
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < ZoneM2.length; i++) {
    AreaContractZone2.push(ZoneM2[i].AreaProve);
  }

  const AreaContractZone3: any = []; // พื้นที่อนุมัติงบนักส่งเสริม รอง 3
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < ZoneM3.length; i++) {
    AreaContractZone3.push(ZoneM3[i].AreaProve);
  }

  const targetAll2: any = [];
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < M2.length; i++) {
    targetAll2.push(M2[i].TargetAll);
  }

  const targetNew2: any = [];
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < M2.length; i++) {
    targetNew2.push(M2[i].TargetNewArea);
  }

  const TargetCaneStump2: any = [];
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < M2.length; i++) {
    TargetCaneStump2.push(M2[i].TargetCaneStump);
  }

  const TargetDemolishStump2: any = [];
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < M2.length; i++) {
    TargetDemolishStump2.push(M2[i].TargetDemolishStump);
  }

  const AreaContract2: any = []; // พื้นที่อนุมัติรอง 2
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < M2.length; i++) {
    AreaContract2.push(M2[i].AreaProve);
  }

  const targetAll3: any = [];
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < M3.length; i++) {
    targetAll3.push(M3[i].TargetAll);
  }

  const targetNew3: any = [];
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < M3.length; i++) {
    targetNew3.push(M3[i].TargetNewArea);
  }

  const TargetCaneStump3: any = [];
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < M3.length; i++) {
    TargetCaneStump3.push(M3[i].TargetCaneStump);
  }

  const TargetDemolishStump3: any = [];
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < M3.length; i++) {
    TargetDemolishStump3.push(M3[i].TargetDemolishStump);
  }

  const AreaContract3: any = [];
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < M3.length; i++) {
    AreaContract3.push(M3[i].AreaProve);
  }

  return (
    <>
      <div className='mt-6 grid grid-cols-3 gap-6 xl:grid-cols-1'>
        {/* <!-- card --> */}
        <div className='report-card'>
          <div className='card'>
            <div className='card-body flex flex-col'>
              {/* <!-- top --> */}
              <div className='flex flex-row items-center justify-between'>
                <div className='h6 fa fa-money text-indigo-700'></div>
                <span className='badge rounded-full bg-teal-400 text-base text-white'>
                  {parseFloat(reqPercent.toFixed(2)).toLocaleString(undefined, {
                    minimumFractionDigits: 2
                  })}
                  %<i className='fa fa-chevron-up ml-1'></i>
                </span>
              </div>
              {/* <!-- end top --> */}

              {/* <!-- bottom --> */}
              <div className='mt-8'>
                <h1 className='h5'>
                  {parseFloat(BudgetNo + BudgetProve).toLocaleString(
                    undefined,
                    {
                      minimumFractionDigits: 2
                    }
                  )}{' '}
                  (
                  {parseFloat(BudgetProve).toLocaleString(undefined, {
                    minimumFractionDigits: 2
                  })}
                  )
                </h1>
                <p>ของบส่งเสริมประมาณทั้งหมด (รวมอนุมัติงบส่งเสริม) บาท</p>
              </div>
              {/* <!-- end bottom --> */}
            </div>
          </div>
          <div className='footer mx-4 rounded rounded-t-none border border-t-0 bg-white p-1'></div>
        </div>
        {/* <!-- end card --> */}

        {/* <!-- card --> */}
        <div className='report-card'>
          <div className='card'>
            <div className='card-body flex flex-col'>
              {/* <!-- top --> */}
              <div className='flex flex-row items-center justify-between'>
                <div className='h6 fa fa-handshake-o text-indigo-700'></div>
                {/* <span className='badge rounded-full bg-teal-400 text-base text-white'>
                  {parseInt(tonPercent, 10).toLocaleString(undefined, {
                    minimumFractionDigits: 0
                  })}
                  %<i className='fa fa-chevron-up ml-1'></i>
                </span> */}
              </div>
              {/* <!-- end top --> */}

              {/* <!-- bottom --> */}
              <div className='mt-8'>
                <h1 className='h5'>
                  {' '}
                  {parseFloat(
                    ProjectProve + ProjectNo + BudgetWorker + BudgetWorkerNO
                  ).toLocaleString(undefined, {
                    minimumFractionDigits: 0
                  })}{' '}
                  (
                  {parseFloat(ProjectProve + BudgetWorker).toLocaleString(
                    undefined,
                    {
                      minimumFractionDigits: 0
                    }
                  )}
                  )
                </h1>
                <p>
                  ของบประมาณโครงการและอื่นๆ (รวมอนุมัติงบโครงการและอื่นๆ) บาท
                </p>
              </div>
              {/* <!-- end bottom --> */}
            </div>
          </div>
          <div className='footer mx-4 rounded rounded-t-none border border-t-0 bg-white p-1'></div>
        </div>
        {/* <!-- end card --> */}

        {/* <!-- card --> */}
        <div className='report-card'>
          <div className='card'>
            <div className='card-body flex flex-col'>
              {/* <!-- top --> */}
              <div className='flex flex-row items-center justify-between'>
                <div className='h6 fa fa-line-chart text-green-700'></div>
                {/* <span className='badge rounded-full bg-teal-400 text-base text-white'>
                  {parseInt(areaPercent, 10).toLocaleString(undefined, {
                    minimumFractionDigits: 0
                  })}
                  %<i className='fa fa-chevron-up ml-1'></i>
                </span> */}
              </div>
              {/* <!-- end top --> */}

              {/* <!-- bottom --> */}
              <div className='mt-8'>
                <h1 className='h5'>
                  {parseFloat(
                    BudgetNo +
                      BudgetProve +
                      ProjectProve +
                      ProjectNo +
                      BudgetWorker +
                      BudgetWorkerNO
                  ).toLocaleString(undefined, {
                    minimumFractionDigits: 0
                  })}{' '}
                  (
                  {parseFloat(
                    BudgetProve + ProjectProve + BudgetWorker
                  ).toLocaleString(undefined, {
                    minimumFractionDigits: 0
                  })}
                  )
                </h1>
                <p>รวมของบประมาณทั้งหมด (รวมอนุมัติงบประมาณทั้งหมด) บาท</p>
              </div>
              {/* <!-- end bottom --> */}
            </div>
          </div>
          <div className='footer mx-4 rounded rounded-t-none border border-t-0 bg-white p-1'></div>
        </div>
        {/* <!-- end card --> */}
      </div>
      {/* <!-- End General Report --> */}

      <div className='mt-6 grid grid-cols-3 gap-6 xl:grid-cols-1'>
        {/* <!-- card --> */}
        <div className='report-card'>
          <div className='card'>
            <div className='card-body flex flex-col'>
              {/* <!-- top --> */}
              <div className='flex flex-row items-center justify-between'>
                <div className='h6 fa fa-money text-indigo-700'></div>
                {/* <span className='badge rounded-full bg-teal-400 text-base text-white'>
                  {parseInt(reqPercent, 10).toLocaleString(undefined, {
                    minimumFractionDigits: 0
                  })}
                  %<i className='fa fa-chevron-up ml-1'></i>
                </span> */}
              </div>
              {/* <!-- end top --> */}

              {/* <!-- bottom --> */}
              <div className='mt-8'>
                <h1 className='h5'>
                  {parseFloat(LoanCurrent).toLocaleString(undefined, {
                    minimumFractionDigits: 2
                  })}{' '}
                  (
                  {parseFloat(BudgetBalance).toLocaleString(undefined, {
                    minimumFractionDigits: 2
                  })}
                  )
                </h1>
                <p>วัด GPS แจ้งทำดิวเช็คแล้ว (คงเหลือรอแจ้ง) บาท</p>
              </div>
              {/* <!-- end bottom --> */}
            </div>
          </div>
          <div className='footer mx-4 rounded rounded-t-none border border-t-0 bg-white p-1'></div>
        </div>
        {/* <!-- end card --> */}

        {/* <!-- card --> */}
        <div className='report-card'>
          <div className='card'>
            <div className='card-body flex flex-col'>
              {/* <!-- top --> */}
              <div className='flex flex-row items-center justify-between'>
                <div className='h6 fa fa-handshake-o text-indigo-700'></div>
                {/* <span className='badge rounded-full bg-teal-400 text-base text-white'>
                  {parseInt(tonPercent, 10).toLocaleString(undefined, {
                    minimumFractionDigits: 0
                  })}
                  %<i className='fa fa-chevron-up ml-1'></i>
                </span> */}
              </div>
              {/* <!-- end top --> */}

              {/* <!-- bottom --> */}
              <div className='mt-8'>
                <h1 className='h5'>
                  {parseFloat(TargetAll).toLocaleString(undefined, {
                    minimumFractionDigits: 0
                  })}
                  {'=>'}
                  {parseFloat(AreaProve).toLocaleString(undefined, {
                    minimumFractionDigits: 2
                  })}{' '}
                  (
                  {parseFloat(MCSSAreaCount).toLocaleString(undefined, {
                    minimumFractionDigits: 2
                  })}
                  )
                </h1>
                <p>
                  แผนพื้นที่รวม {'=>'} พื้นที่ขอเงินส่งเสริม
                  (พื้นที่แจ้งทำดิวเช็ค) ไร่
                </p>
              </div>
              {/* <!-- end bottom --> */}
            </div>
          </div>
          <div className='footer mx-4 rounded rounded-t-none border border-t-0 bg-white p-1'></div>
        </div>
        {/* <!-- end card --> */}

        {/* <!-- card --> */}
        <div className='report-card'>
          <div className='card'>
            <div className='card-body flex flex-col'>
              {/* <!-- top --> */}
              <div className='flex flex-row items-center justify-between'>
                <div className='h6 fa fa-line-chart text-green-700'></div>
                {/* <span className='badge rounded-full bg-teal-400 text-base text-white'>
                  {parseInt(areaPercent, 10).toLocaleString(undefined, {
                    minimumFractionDigits: 0
                  })}
                  %<i className='fa fa-chevron-up ml-1'></i>
                </span> */}
              </div>
              {/* <!-- end top --> */}

              {/* <!-- bottom --> */}
              <div className='mt-8'>
                <h1 className='h5'>
                  {parseFloat(TonNo + TonProve).toLocaleString(undefined, {
                    minimumFractionDigits: 0
                  })}
                  (
                  {parseFloat(TonProve).toLocaleString(undefined, {
                    minimumFractionDigits: 0
                  })}
                  ){'=>'}
                  {parseInt(BahtRai, 10).toLocaleString(undefined, {
                    minimumFractionDigits: 0
                  })}
                  (
                  {parseInt(BahtTon, 10).toLocaleString(undefined, {
                    minimumFractionDigits: 0
                  })}
                  )
                </h1>
                <p>
                  <b>
                    ตันขอส่งเสริม(อนุมัติสัญญาตัน) {'=>'} บาท/ไร่(ตัน)
                    เฉพาะเงินส่งเสริม
                  </b>
                </p>
              </div>
              {/* <!-- end bottom --> */}
            </div>
          </div>
          <div className='footer mx-4 rounded rounded-t-none border border-t-0 bg-white p-1'></div>
        </div>
        {/* <!-- end card --> */}
      </div>
      {/* <!-- End General Report --> */}

      {/* <!-- start Status --> */}
      <div className='grid grid-cols-5 gap-6 xl:grid-cols-2'>
        {/* <!-- card --> */}
        <div className='card mt-6'>
          <div className='card-body flex items-center'>
            <div className='mr-3 rounded bg-indigo-600 px-3 py-2 text-white'>
              <i className='fa fa-address-book'></i>
            </div>

            <div className='flex flex-col'>
              <h1 className='font-semibold'>
                <span className='num-2'> ขั้นตอนจัดทำงบ</span>
              </h1>
              <p className='text-base'>
                <span className='num-2'>
                  {parseInt(status00, 10).toLocaleString(undefined, {
                    minimumFractionDigits: 0
                  })}
                </span>{' '}
                ราย
              </p>
            </div>
          </div>
        </div>
        {/* <!-- end card --> */}

        {/* <!-- card --> */}
        <div className='card mt-6'>
          <div className='card-body flex items-center'>
            <div className='mr-3 rounded bg-green-600 px-3 py-2 text-white'>
              <i className='fa fa-check-circle-o'></i>
            </div>

            <div className='flex flex-col'>
              <h1 className='font-semibold'>
                <span className='num-2'></span>ธุรการฯ ตรวจสอบ
              </h1>
              <p className='text-base'>
                <span className='num-2'>
                  {parseInt(status01, 10).toLocaleString(undefined, {
                    minimumFractionDigits: 0
                  })}
                </span>{' '}
                ราย
              </p>
            </div>
          </div>
        </div>
        {/* <!-- end card --> */}

        {/* <!-- card --> */}
        <div className='card mt-6 xl:mt-1'>
          <div className='card-body flex items-center'>
            <div className='mr-3 rounded bg-yellow-600 px-3 py-2 text-white'>
              <i className='fa fa-comments'></i>
            </div>

            <div className='flex flex-col'>
              <h1 className='font-semibold'>
                <span className='num-2'></span> เสนออนุมัติ
              </h1>
              <p className='text-base'>
                <span className='num-2'>
                  {parseInt(status02, 10).toLocaleString(undefined, {
                    minimumFractionDigits: 0
                  })}
                </span>{' '}
                ราย
              </p>
            </div>
          </div>
        </div>
        {/* <!-- end card --> */}

        {/* <!-- card --> */}
        <div className='card mt-6 xl:mt-1'>
          <div className='card-body flex items-center'>
            <div className='mr-3 rounded bg-red-600 px-3 py-2 text-white'>
              <i className='fa fa-check'></i>
            </div>

            <div className='flex flex-col'>
              <h1 className='font-semibold'>
                <span className='num-2'></span> ผ่านอนุมัติแล้ว
              </h1>
              <p className='text-base'>
                <span className='num-2'>
                  {parseInt(status03, 10).toLocaleString(undefined, {
                    minimumFractionDigits: 0
                  })}
                </span>{' '}
                ราย
              </p>
            </div>
          </div>
        </div>
        {/* <!-- end card --> */}

        {/* <!-- card --> */}
        <div className='card mt-6 xl:col-span-2 xl:mt-1'>
          <div className='card-body flex items-center'>
            <div className='mr-3 rounded bg-pink-600 px-3 py-2 text-white'>
              <i className='fad fa-user'></i>
            </div>

            <div className='flex flex-col'>
              <h5 className='font-semibold'>
                <span className='num-2'> ไม่ผ่านพิจารณา</span>
              </h5>
              <p className='text-base'>
                <span className='num-2'>
                  {parseInt(status04, 10).toLocaleString(undefined, {
                    minimumFractionDigits: 0
                  })}
                </span>{' '}
                ราย
              </p>
            </div>
          </div>
        </div>
        {/* <!-- end card --> */}
      </div>
      {/* <!-- end Status --> */}

      {/* <!-- strat Analytics --> */}
      <div className='mt-6 grid grid-cols-2 gap-6 xl:grid-cols-1'>
        {/* <!-- update section --> */}
        <div className='card border-teal-400 bg-teal-400 text-white shadow-md'>
          <div className='card-body flex flex-row'>
            {/* <!-- image --> */}
            <div className='img-wrapper h-41 flex w-40 items-center justify-center'>
              <img src='/assets/img/happy.svg' alt='ความสำเร็จของคุณ' />
            </div>
            {/* <!-- end image --> */}

            {/* <!-- info --> */}
            <div className='ml-10 py-2'>
              <h1 className='h6'>ส่งเสริมสำเร็จ!</h1>

              <ul className='mt-4'>
                <li className='text-sm font-light'>
                  <i className='fa fa-check mr-2 mb-2'></i>{' '}
                  คุณสามารถดำเนินงานตามแผนที่วางไว้
                </li>
                <li className='text-sm font-light'>
                  <i className='fa fa-check mr-2 mb-2'></i>{' '}
                  คุณสามารถปฏิบัติงานให้เกิดจริงได้
                </li>
                <li className='text-sm font-light'>
                  <i className='fa fa-check mr-2 mb-2'></i>{' '}
                  ติดตามพื้นที่เป้าหมายได้อย่างมีประสิทธิภาพ
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className='card bg-white-400 border-teal-400 text-white shadow-md'>
          <div className='card-body flex flex-row'>
            <BudgetChart
              isCaption={'bar-chart-top'}
              // isText={''}
              isRotate={70}
              isManag={TopName}
              isData={[
                targetAllTop,
                targetNewTop,
                TargetCaneStumpTop,
                TargetDemolishStumpTop,
                AreaContractTop,
                mcssAreaTop
              ]}
              isLable={true}
              isLegend={zoneLegend}
              isStyle={{ width: '100%', height: '30vh' }}
            />
          </div>
        </div>
      </div>

      {/* <!-- Sales Overview --> */}
      <div className='card mt-6'>
        {/* <!-- header --> */}
        <div className='card-header flex flex-row justify-between'>
          <h1 className='h6'>Manager 1 Overview (นายสุขสันต์ ภาลสูญ)</h1>

          <div className='flex flex-row items-center justify-center'>
            <a href=''>
              <i className='fad fa-chevron-double-down mr-6'></i>
            </a>

            <a href=''>
              <i className='fad fa-ellipsis-v'></i>
            </a>
          </div>
        </div>
        {/* <!-- end header --> */}

        {/* <!-- body --> */}
        <div className='card-body grid grid-cols-2 gap-6 lg:grid-cols-1'>
          <div className='p-6'>
            <h1 className='h5'>
              {parseInt(SumM1, 10).toLocaleString(undefined, {
                minimumFractionDigits: 0
              })}
              /
              {parseInt(SumAreaProveM1, 10).toLocaleString(undefined, {
                minimumFractionDigits: 0
              })}
              (
              {parseInt(SumAreaMCSSM1, 10).toLocaleString(undefined, {
                minimumFractionDigits: 0
              })}
              ) ไร่
            </h1>
            <p className='font-medium text-black'>
              เป้าหมายพื้นที่ / รับส่งเสริม (เกิดจริง)
            </p>
            <div className='mt-10 mb-2 flex items-center'>
              <div className='mr-3 rounded bg-green-200 py-1 px-3 text-green-900'>
                <i className='fa fa-caret-up'></i>
              </div>
              <p className='text-black'>
                <span className='num-2 text-green-400'></span>
                <span className='text-green-400'>
                  (
                  {parseInt(AreaM11, 10).toLocaleString(undefined, {
                    minimumFractionDigits: 0
                  })}
                  )% พื้นที่เทียบขอส่งเสริม
                </span>{' '}
              </p>
            </div>
            <div className='flex items-center'>
              <div className='mr-3 rounded bg-red-200 py-1 px-3 text-red-900'>
                <i className='fa fa-caret-down'></i>
              </div>
              <p className='text-black'>
                <span className='num-2 text-red-400'></span>
                <span className='text-red-400'>
                  (
                  {parseInt(AreaM12, 10).toLocaleString(undefined, {
                    minimumFractionDigits: 0
                  })}
                  )% พื้นที่เทียบตามเป้า
                </span>
              </p>
            </div>
            <a href='#' className='btn-shadow mt-6'>
              view details
            </a>
          </div>

          <div className='p-1'>
            <BudgetChart
              isCaption={'bar-chart1'}
              isRotate={90}
              isData={[
                targetAll1,
                targetNew1,
                TargetCaneStump1,
                TargetDemolishStump1,
                AreaContract1,
                mcssAreaZone1
              ]}
              isManag={Manag1Name}
              isLable={true}
              isLegend={zoneLegend}
              isStyle={{ width: '100%', height: '35vh' }}
            />
          </div>
        </div>
        {/* <!-- end body --> */}
      </div>

      <div className='mt-6 grid grid-cols-1 gap-6 xl:grid-cols-1'>
        <div className='card border-teal-400 text-white shadow-md'>
          <div className='card-body flex flex-row'>
            <BudgetChart
              isCaption={'bar-chart-m1'}
              isRotate={90}
              isData={[
                targetAllZone1,
                targetNewZone1,
                TargetCaneStumpZone1,
                TargetDemolishStumpZone1,
                AreaContractZone1,
                mcssAreaSubZone1
              ]}
              isManag={SubZone1Name}
              isLable={false}
              isLegend={zoneLegend}
              isStyle={{ width: '100vw', height: '35vh' }}
            />
          </div>
        </div>
      </div>

      {/* <!-- Sales Overview --> */}
      <div className='card mt-6'>
        {/* <!-- header --> */}
        <div className='card-header flex flex-row justify-between'>
          <h1 className='h6'>Manager 2 Overview (นายนพดล เสนชัย)</h1>

          <div className='flex flex-row items-center justify-center'>
            <a href=''>
              <i className='fad fa-chevron-double-down mr-6'></i>
            </a>

            <a href=''>
              <i className='fad fa-ellipsis-v'></i>
            </a>
          </div>
        </div>
        {/* <!-- end header --> */}

        {/* <!-- body --> */}
        <div className='card-body grid grid-cols-2 gap-6 lg:grid-cols-1'>
          <div className='p-6'>
            <h1 className='h5'>
              {parseInt(SumM2, 10).toLocaleString(undefined, {
                minimumFractionDigits: 0
              })}
              /
              {parseInt(SumAreaProveM2, 10).toLocaleString(undefined, {
                minimumFractionDigits: 0
              })}
              (
              {parseInt(SumAreaMCSSM2, 10).toLocaleString(undefined, {
                minimumFractionDigits: 0
              })}
              ) ไร่
            </h1>
            <p className='font-medium text-black'>
              เป้าหมายพื้นที่ / รับส่งเสริม (เกิดจริง)
            </p>
            <div className='mt-10 mb-2 flex items-center'>
              <div className='mr-3 rounded bg-green-200 py-1 px-3 text-green-900'>
                <i className='fa fa-caret-up'></i>
              </div>
              <p className='text-black'>
                <span className='num-2 text-green-400'></span>
                <span className='text-green-400'>
                  (
                  {parseInt(AreaM21, 10).toLocaleString(undefined, {
                    minimumFractionDigits: 0
                  })}
                  )% พื้นที่เทียบขอส่งเสริม
                </span>
              </p>
            </div>
            <div className='flex items-center'>
              <div className='mr-3 rounded bg-red-200 py-1 px-3 text-red-900'>
                <i className='fa fa-caret-down'></i>
              </div>
              <p className='text-black'>
                <span className='num-2 text-red-400'></span>
                <span className='text-red-400'>
                  (
                  {parseInt(AreaM22, 10).toLocaleString(undefined, {
                    minimumFractionDigits: 0
                  })}
                  )% พื้นที่เทียบตามเป้า
                </span>
              </p>
            </div>
            <a href='#' className='btn-shadow mt-6'>
              view details
            </a>
          </div>

          <div className='p-1'>
            <BudgetChart
              isCaption={'bar-chart2'}
              isManag={Manag2Name}
              isRotate={90}
              isData={[
                targetAll2,
                targetNew2,
                TargetCaneStump2,
                TargetDemolishStump2,
                AreaContract2,
                mcssAreaZone2
              ]}
              isLable={true}
              isLegend={zoneLegend}
              isStyle={{ width: '100%', height: '35vh' }}
            />
          </div>
        </div>
        {/* <!-- end body --> */}
      </div>

      <div className='mt-6 grid grid-cols-1 gap-6 xl:grid-cols-1'>
        <div className='card border-teal-400 text-white shadow-md'>
          <div className='card-body flex flex-row'>
            <BudgetChart
              isCaption={'bar-chart-m2'}
              isRotate={90}
              isData={[
                targetAllZone2,
                targetNewZone2,
                TargetCaneStumpZone2,
                TargetDemolishStumpZone2,
                AreaContractZone2,
                mcssAreaSubZone2
              ]}
              isManag={SubZone2Name}
              isLable={false}
              isLegend={zoneLegend}
              isStyle={{ width: '100vw', height: '35vh' }}
            />
          </div>
        </div>
      </div>

      {/* <!-- Sales Overview --> */}
      <div className='card mt-6'>
        {/* <!-- header --> */}
        <div className='card-header flex flex-row justify-between'>
          <h1 className='h6'>Manager 3 Overview (นายสันติ น้อยธรรมราช)</h1>

          <div className='flex flex-row items-center justify-center'>
            <a href=''>
              <i className='fad fa-chevron-double-down mr-6'></i>
            </a>

            <a href=''>
              <i className='fad fa-ellipsis-v'></i>
            </a>
          </div>
        </div>
        {/* <!-- end header --> */}

        {/* <!-- body --> */}
        <div className='card-body grid grid-cols-2 gap-6 lg:grid-cols-1'>
          <div className='p-6'>
            <h1 className='h5'>
              {parseInt(SumM3, 10).toLocaleString(undefined, {
                minimumFractionDigits: 0
              })}
              /
              {parseInt(SumAreaProveM3, 10).toLocaleString(undefined, {
                minimumFractionDigits: 0
              })}
              (
              {parseInt(SumAreaMCSSM3, 10).toLocaleString(undefined, {
                minimumFractionDigits: 0
              })}
              ) ไร่
            </h1>
            <p className='font-medium text-black'>
              เป้าหมายพื้นที่ / รับส่งเสริม (เกิดจริง)
            </p>
            <div className='mt-10 mb-2 flex items-center'>
              <div className='mr-3 rounded bg-green-200 py-1 px-3 text-green-900'>
                <i className='fa fa-caret-up'></i>
              </div>
              <p className='text-black'>
                <span className='num-2 text-green-400'></span>
                <span className='text-green-400'>
                  (
                  {parseInt(AreaM31, 10).toLocaleString(undefined, {
                    minimumFractionDigits: 0
                  })}
                  )% พื้นที่เทียบขอส่งเสริม
                </span>
              </p>
            </div>
            <div className='flex items-center'>
              <div className='mr-3 rounded bg-red-200 py-1 px-3 text-red-900'>
                <i className='fa fa-caret-down'></i>
              </div>
              <p className='text-black'>
                <span className='num-2 text-red-400'></span>
                <span className='text-red-400'>
                  (
                  {parseInt(AreaM32, 10).toLocaleString(undefined, {
                    minimumFractionDigits: 0
                  })}
                  )% พื้นที่เทียบตามเป้า
                </span>
              </p>
            </div>
            <a href='#' className='btn-shadow mt-6'>
              view details
            </a>
          </div>

          <div className='p-1'>
            <BudgetChart
              isCaption={'bar-chart3'}
              isManag={Manag3Name}
              isRotate={90}
              isData={[
                targetAll3,
                targetNew3,
                TargetCaneStump3,
                TargetDemolishStump3,
                AreaContract3,
                mcssAreaZone3
              ]}
              isLable={true}
              isLegend={zoneLegend}
              isStyle={{ width: '100%', height: '35vh' }}
            />
          </div>
        </div>
        {/* <!-- end body --> */}
      </div>

      <div className='mt-6 grid grid-cols-1 gap-6 xl:grid-cols-1'>
        <div className='card border-teal-400 text-white shadow-md'>
          <div className='card-body flex flex-row'>
            <BudgetChart
              isCaption={'bar-chart-m3'}
              isText={'เป้าหมาย'}
              isRotate={90}
              isData={[
                targetAllZone3,
                targetNewZone3,
                TargetCaneStumpZone3,
                TargetDemolishStumpZone3,
                AreaContractZone3,
                mcssAreaSubZone3
              ]}
              isManag={SubZone3Name}
              isLable={false}
              isLegend={zoneLegend}
              isStyle={{ width: '100vw', height: '35vh' }}
            />
          </div>
        </div>
      </div>

      {/* <!-- start numbers --> */}
      <div className='grid grid-cols-5 gap-6 xl:grid-cols-2'>
        {/* <!-- card --> */}
        <div className='card mt-6'>
          <div className='card-body flex items-center'>
            <div className='mr-3 rounded bg-indigo-600 px-3 py-2 text-white'>
              <i className='fa fa-map-signs'></i>
            </div>

            <div className='flex flex-col'>
              <h1 className='font-semibold'>
                <span className='num-2'></span> พื้นที่รวม
              </h1>
              <p className='text-xs'>
                <span className='num-2'></span>
                {parseFloat(TotalTargetAll).toLocaleString(undefined, {
                  minimumFractionDigits: 2
                })}
              </p>
            </div>
          </div>
        </div>
        {/* <!-- end card --> */}

        {/* <!-- card --> */}
        <div className='card mt-6'>
          <div className='card-body flex items-center'>
            <div className='mr-3 rounded bg-green-600 px-3 py-2 text-white'>
              <i className='fa fa-map-marker'></i>
            </div>

            <div className='flex flex-col'>
              <h1 className='font-semibold'>
                <span className='num-2'></span> พื้นที่ใหม่
              </h1>
              <p className='text-xs'>
                <span className='num-2'></span>
                {parseFloat(TotalTargetNewArea).toLocaleString(undefined, {
                  minimumFractionDigits: 2
                })}
              </p>
            </div>
          </div>
        </div>
        {/* <!-- end card --> */}

        {/* <!-- card --> */}
        <div className='card mt-6 xl:mt-1'>
          <div className='card-body flex items-center'>
            <div className='mr-3 rounded bg-yellow-600 px-3 py-2 text-white'>
              <i className='fa fa-map'></i>
            </div>

            <div className='flex flex-col'>
              <h1 className='font-semibold'>
                <span className='num-2'></span> พื้นที่ตอ
              </h1>
              <p className='text-xs'>
                <span className='num-2'></span>
                {parseFloat(TotalTargetCaneStump).toLocaleString(undefined, {
                  minimumFractionDigits: 2
                })}
              </p>
            </div>
          </div>
        </div>
        {/* <!-- end card --> */}

        {/* <!-- card --> */}
        <div className='card mt-6 xl:mt-1'>
          <div className='card-body flex items-center'>
            <div className='mr-3 rounded bg-red-600 px-3 py-2 text-white'>
              <i className='fa fa-map-o'></i>
            </div>

            <div className='flex flex-col'>
              <h1 className='font-semibold'>
                <span className='num-2'></span> พื้นที่รื้อตอ
              </h1>
              <p className='text-xs'>
                <span className='num-2'></span>
                {parseFloat(TotalTargetDemolishStump).toLocaleString(
                  undefined,
                  {
                    minimumFractionDigits: 2
                  }
                )}
              </p>
            </div>
          </div>
        </div>
        {/* <!-- end card --> */}

        {/* <!-- card --> */}
        <div className='card mt-6 xl:col-span-2 xl:mt-1'>
          <div className='card-body flex items-center'>
            <div className='mr-3 rounded bg-pink-600 px-3 py-2 text-white'>
              <i className='fad fa-user'></i>
            </div>

            <div className='flex flex-col'>
              <h1 className='font-semibold'>
                <span className='num-2'></span> พื้นที่เกิดจริง
              </h1>
              <p className='text-xs'>
                <span className='num-2'></span>
                {parseFloat(TotalTargetMcssArea).toLocaleString(undefined, {
                  minimumFractionDigits: 2
                })}
              </p>
            </div>
          </div>
        </div>
        {/* <!-- end card --> */}
      </div>
      {/* <!-- end nmbers --> */}

      <div className='grid grid-cols-1 gap-6 xl:grid-cols-1'>
        <div className='card mt-6 xl:col-span-2 xl:mt-1'>
          <Targets
            impData={isZoneTarget}
            colModel={colModel}
            colNames={colName}
            subColModel={subColModel}
            subColNames={subColName}
            linkSub={subLink}
            isAction={false}
            isOption={action}
            isImport={false}
            isGroup={true}
            isSubGrid={true}
            isSubZone={true}
            isCaption={'เป้าหมายและความก้าวหน้าของงานส่งเสริม'}
          />
        </div>
      </div>
    </>
  );
};

export default Budgets;
