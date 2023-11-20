import axios from 'axios';
import { getCookie } from 'cookies-next';
import type { NextPage } from 'next';
import dynamic from 'next/dynamic';
import router from 'next/router';
import React, { useEffect } from 'react';
import useSWR from 'swr';

import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const fetcher = (url: string) => axios.get(url).then((res) => res.data);

const MapPage = dynamic(() => import('@/components/leaflet/maps'), {
  ssr: false
});

const Index: NextPage = () => {
  useEffect(() => {
    const token = getCookie('ps-jwt');
    if (!token) {
      router.push('/login');
    }
  }, []);

  const { data: polyAll } = useSWR(`/api/geo/get-plot`, fetcher, {
    refreshInterval: 0
  });

  const { data: pointAll } = useSWR(`/api/geo/get-point`, fetcher, {
    refreshInterval: 30
  });

  return (
    <>
      <Main
        meta={
          <Meta title='PS - พื้นที่อ้อย' description='ภาพรวมการส่งเสริมอ้อย' />
        }
      >
        <MapPage polygons={polyAll} pointAll={pointAll} sidebarAdd={true} />
      </Main>
    </>
  );
};

export default Index;
