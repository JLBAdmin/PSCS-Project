/* eslint-disable no-console */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-shadow */
import { getCookie } from 'cookies-next';
import { id } from 'date-fns/locale';
import { NextPage } from 'next';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { useCallback, useEffect, useState } from 'react';
import * as XLSX from 'xlsx';

import { colModel, colName } from '@/components/grid-headers/admin.cost.header';
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/MainAccount';

// const fetcher = (url: string) => axios.get(url).then((res) => res.data);

const Costs = dynamic(() => import('@/components/grid-tables/grid-costs'), {
  ssr: false
});

const ImportDB: NextPage = () => {
  const router = useRouter();
  // const token = getCookie('ps-jwt');
  const getZone: any = getCookie('user');
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

  const [isReading, setIsReading] = useState(false);
  const [isData, setIsData] = useState(null);
  const handleFileChange = useCallback((e: any) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = (e: any): void => {
      const data = new Uint8Array(e.target.result);
      const workbook: any = XLSX.read(data, { type: 'array', raw: true });

      const firstSheet = workbook.SheetNames[0];
      setIsReading(false);
      const elements: any = XLSX.utils.sheet_to_json(
        workbook.Sheets[firstSheet]
      );
      console.log('Excel read OK!');
      console.log(`Found ${elements.length} elements`);
      console.log('JSON size', JSON.stringify(elements).length, 'bytes');
      // console.log("JSON data", JSON.stringify(elements));
      setIsData(elements);
    };
    setIsReading(true);
    reader.readAsArrayBuffer(file);
  }, []);

  return (
    <>
      <Main
        meta={
          <Meta
            title='นำเข้าประวัติส่งอ้อย - บริษัท น้ำตาลพิษณุโลก จำกัด'
            description='งบประมาณชาวไร่อ้อยรายบุคคล ครอบคลุมทุกพื้นที่'
          />
        }
      >
        <div className='grid grid-cols-1 gap-6 xl:grid-cols-1'>
          <input type='file' accept='.xls, .xlsx' onChange={handleFileChange} />

          {isReading ? <p>Redading...</p> : null}
          {isData ? (
            <Costs
              impData={isData}
              colModel={colModel}
              colNames={colName}
              isTable={'cost'}
              isZone={`${id}`}
              isGrid={'list'}
              isOuter={'outerDiv1'}
              isInlineNav={false}
              isTopPager={true}
              isImport={true}
              isGroup={false}
              isCaption={`รายรับ - รายจ่าย บริษัท น้ำตาลพิษณุโลก จำกัด ${getZone}`}
            />
          ) : null}
        </div>
      </Main>
    </>
  );
};

export default ImportDB;
