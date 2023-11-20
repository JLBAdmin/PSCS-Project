import type {
  GetStaticPaths,
  GetStaticProps,
  InferGetStaticPropsType
} from 'next';
import dynamic from 'next/dynamic';
import router from 'next/router';
import React, { useEffect } from 'react';

import { colModel, colName } from '@/components/grid-headers/edit.cost.header';
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/MainAccount';

type IBlogUrl = {
  slug: string;
};

export const getStaticPaths: GetStaticPaths<IBlogUrl> = async () => {
  return {
    paths: [...Array(10)].map((_, index) => ({
      params: { slug: `${index}` }
    })),
    fallback: false
  };
};

export const getStaticProps: GetStaticProps<IBlogUrl, IBlogUrl> = async ({
  params
}) => {
  return {
    props: {
      slug: params!.slug
    }
  };
};

const Costs = dynamic(() => import('@/components/grid-tables/grid-master1'), {
  ssr: false
});

const Blog = (props: InferGetStaticPropsType<typeof getStaticProps>) => {
  const data: any[] = [];
  const id = props.slug;
  useEffect(() => {
    router.replace(router.asPath);
  }, [props.slug]);
  return (
    <Main meta={<Meta title={props.slug} description='Lorem ipsum' />}>
      <h1 className='capitalize'>{props.slug}</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore eos
        earum doloribus, quibusdam magni accusamus vitae! Nisi, sunt! Aliquam
        iste expedita cupiditate a quidem culpa eligendi, aperiam saepe dolores
        ipsum!
      </p>
      <Costs
        impData={data}
        colModel={colModel}
        colNames={colName}
        isTable={'cost'}
        isAction={false}
        isImport={false}
        isZone={`${props.slug}`}
        isDel={true}
        isCaption={`รายรับ - รายจ่าย ${id}`}
      />
    </Main>
  );
};

export default Blog;
