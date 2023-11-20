/* eslint-disable tailwindcss/no-custom-classname */
import { NextPage } from 'next';

// import { useRouter } from 'next/router';
// import { useEffect } from 'react';
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/MainY2J';

const Index: NextPage = () => {
  // const router = useRouter();

  // useEffect(() => {
  //   router.push('/y2j');
  // });
  return (
    <Main
      meta={
        <Meta
          title='บริษัท น้ำตาลพิษณุโลก'
          description='SugarCane is the perfect starter code for your project. Build your React application with the Next.js framework.'
        />
      }
    >
      {/* <BudgetPage
        dataArea={areaData}
        isTarget={dataTarget}
        isZoneTarget={zoneTarget}
        isTopTarget={TopTarget}
        isCount={CountStatus}
      /> */}
    </Main>
  );
};

export default Index;
