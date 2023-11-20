import axios from 'axios';
import { getCookie } from 'cookies-next';
import { NextPage } from 'next';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import useSWR from 'swr';

import { Meta } from '@/layouts/Meta';
import { days } from '@/public/js/dashboard';
import { Main } from '@/templates/Main';

const FactoryPage = dynamic(() => import('@/components/dashboard/factory'), {
  ssr: false
});

const fetcher = (url: string) => axios.get(url).then((res) => res.data);

const Factory: NextPage = () => {
  const router = useRouter();
  useEffect(() => {
    const token = getCookie('ps-jwt');
    if (!token) {
      router.push('/login');
    }
  }, []);

  const { data } = useSWR(`/api/factory/get-cane/2`, fetcher, {
    refreshInterval: 0
  });

  const { data: ccs } = useSWR(`/api/factory/get-ccs/2`, fetcher, {
    refreshInterval: 0
  });

  const { data: caneGroup } = useSWR(`/api/factory/get-canegroup/1`, fetcher, {
    refreshInterval: 0
  });

  const { data: ccsGroup } = useSWR(`/api/factory/get-ccsgroup/1`, fetcher, {
    refreshInterval: 0
  });

  const { data: dataCompany } = useSWR(`/api/company/get-target`, fetcher, {
    refreshInterval: 0
  });

  const { data: cpmpanyGroup } = useSWR(`/api/company/company-group`, fetcher, {
    refreshInterval: 0
  });

  if (!data || !dataCompany || !ccs || !caneGroup || !ccsGroup || !cpmpanyGroup)
    return <div>loading...</div>;

  // eslint-disable-next-line no-console
  /// console.log(dataCompany);

  return (
    <Main
      meta={
        <Meta
          title='PS - โรงงานใกล้เคียง'
          description='เป้าหมายอ้อย และอ้อยเข้าหีบโรงงานใกล้เคียง'
        />
      }
    >
      <FactoryPage
        isData={data}
        isGroup={caneGroup}
        isFactory={true}
        isCompany={dataCompany}
        isAffiliated={cpmpanyGroup}
        isDay={days}
        isCCS={ccs}
        isCCSG={ccsGroup}
      />
    </Main>
  );
};

export default Factory;
