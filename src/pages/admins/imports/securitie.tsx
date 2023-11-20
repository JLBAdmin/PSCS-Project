/* eslint-disable no-console */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-shadow */
import { getCookie } from 'cookies-next';
import { NextPage } from 'next';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { useCallback, useEffect, useState } from 'react';
import * as XLSX from 'xlsx';

import {
  colModel,
  colNameImp
} from '@/components/grid-headers/securitie.header';
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const Securities = dynamic(
  () => import('@/components/grid-tables/grid-master2'),
  { ssr: false }
);

const Securitie: NextPage = () => {
  const router = useRouter();
  useEffect(() => {
    const token = getCookie('ps-jwt');
    if (!token) {
      router.push('/login');
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
  console.log(isData);
  return (
    <>
      <Main
        meta={
          <Meta
            title='นำเข้าหลักทรัพย์ - บริษัท น้ำตาลพิษณุโลก จำกัด'
            description='งบประมาณชาวไร่อ้อยรายบุคคล ครอบคลุมทุกพื้นที่'
          />
        }
      >
        <div className='grid grid-cols-1 gap-6 xl:grid-cols-1'>
          <input type='file' accept='.xls, .xlsx' onChange={handleFileChange} />

          {isReading ? <p>Redading...</p> : null}
          {isData ? (
            <Securities
              impData={isData}
              colModel={colModel}
              colNames={colNameImp}
              isAction={false}
              isImport={true}
              isTable={'securitie'}
              isCaption={'นำเข้าหลักทรัพย์ค้ำประกัน'}
            />
          ) : null}
        </div>
      </Main>
    </>
  );
};

export default Securitie;
