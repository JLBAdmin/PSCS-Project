/* eslint-disable tailwindcss/no-custom-classname */
import axios from 'axios';
import { NextPage } from 'next';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import useSWR from 'swr';

import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const fetcher = (url: string) => axios.get(url).then((res) => res.data);

const BudgetPage = dynamic(() => import('@/components/dashboard/dashBudgets'), {
  ssr: false
});

const Index: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const { data: areaData } = useSWR(`/api/target/get-area/${id}`, fetcher, {
    refreshInterval: 0
  });

  const { data: dataTarget, error: errorDataTarget } = useSWR(
    `/api/target/get-target/${id}`,
    fetcher,
    {
      refreshInterval: 0
    }
  );

  const { data: TopTarget, error: errorTopTarget } = useSWR(
    `/api/target/get-top/${id}`,
    fetcher,
    {
      refreshInterval: 0
    }
  );

  const { data: zoneTarget, error: errorZoneTarget } = useSWR(
    `/api/target/get-targetzone/${id}`,
    fetcher,
    {
      refreshInterval: 0
    }
  );

  const { data: CountStatus } = useSWR(`/api/target/get-count/${id}`, fetcher, {
    refreshInterval: 0
  });

  if (errorDataTarget || errorZoneTarget || errorTopTarget)
    return <div>failed to load</div>;
  if (!TopTarget || !zoneTarget || !dataTarget || !CountStatus)
    return <div>loading...</div>;

  return (
    <Main
      meta={
        <Meta
          title='บริษัท น้ำตาลพิษณุโลก'
          description='Next js Boilerplate is the perfect starter code for your project. Build your React application with the Next.js framework.'
        />
      }
    >
      <BudgetPage
        dataArea={areaData}
        isTarget={dataTarget}
        isZoneTarget={zoneTarget}
        isTopTarget={TopTarget}
        isCount={CountStatus}
      />
    </Main>
  );
};

export default Index;
