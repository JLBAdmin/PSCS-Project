/* eslint-disable jsx-a11y/alt-text */
import axios from 'axios';
import { getCookie } from 'cookies-next';
import { NextPage } from 'next';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import useSWR from 'swr';

import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const fetcher = (url: string) => axios.get(url).then((res) => res.data);

const CanePage = dynamic(() => import('@/components/dashboard/canes'), {
  ssr: false
});

const Cane: NextPage = () => {
  const router = useRouter();
  useEffect(() => {
    const token = getCookie('ps-jwt');
    if (!token) {
      router.push('/login');
    }
  }, []);

  const { data, error } = useSWR(`/api/target/get-ton`, fetcher, {
    refreshInterval: 1000
  });

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  return (
    <Main
      meta={
        <Meta
          title='PS - การนำอ้อยเข้าหีบ'
          description='ประวัติส่งอ้อย ครอบคลุมทุกพื้นที่'
        />
      }
    >
      <CanePage isData={data} />
    </Main>
  );
};

export default Cane;
