/* eslint-disable no-console */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-shadow */
import axios from 'axios';
import { NextPage } from 'next';
import dynamic from 'next/dynamic';
import useSWR from 'swr';

import { colModel } from '@/components/grid-headers/budget.header';

const fetcher = (url: string) => axios.get(url).then((res) => res.data);

const Rains = dynamic(() => import('@/components/grid-tables/grid-master'), {
  ssr: false
});

const Rain: NextPage = () => {
  const { data, error } = useSWR('/api/machine/get', fetcher, {
    refreshInterval: 100000
  });
  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  return (
    <div>
      <Rains impData={data} colModel={colModel} />
    </div>
  );
};

export default Rain;
