import axios from 'axios';
import { getCookie } from 'cookies-next';
import type { NextPage } from 'next';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import useSWR from 'swr';

import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const fetcher = (url: string) => axios.get(url).then((res) => res.data);

const MapPage = dynamic(() => import('@/components/leaflet/maps'), {
  ssr: false
});

const Index: NextPage = () => {
  const router = useRouter();
  const { quota } = router.query;
  useEffect(() => {
    const token = getCookie('ps-jwt');
    if (!token) {
      router.push('/login');
    }
  }, []);
  const { data: allPoint } = useSWR(`/api/geo/get-point/${quota}`, fetcher, {
    refreshInterval: 0
  });
  const { data: Plot } = useSWR(`/api/geo/get-plot/${quota}`, fetcher, {
    refreshInterval: 0
  });

  let addPoint: boolean = false;
  let y: any;
  let pointAdd: any;
  if (Array.isArray(quota)) {
    // eslint-disable-next-line prefer-destructuring
    y = quota[0];
    if (y.includes(',') === true) {
      addPoint = true;
      // eslint-disable-next-line unused-imports/no-unused-vars
      const myArray: any = y.split(',');
      // eslint-disable-next-line no-console
      pointAdd = [parseFloat(myArray[0]), parseFloat(myArray[1])];
    }
  }

  return (
    <>
      <Main meta={<Meta title='PS - พื้นที่อ้อย' description='Lorem ipsum' />}>
        <div className='grid grid-cols-1 gap-6 xl:grid-cols-1'>
          {addPoint ? (
            <MapPage addressPoint={pointAdd} />
          ) : (
            <MapPage polygons={Plot} plotpoint={allPoint} sidebarAdd={false} />
          )}
        </div>
      </Main>
    </>
  );
};

export default Index;
