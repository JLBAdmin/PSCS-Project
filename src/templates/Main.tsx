import { ReactNode } from 'react';

import Navbars from './navbars';
import Sidebars from './sidebars';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => {
  return (
    <>
      <Navbars />
      {props.meta}
      <div className='flex h-screen flex-row flex-wrap'>
        <Sidebars />
        <div className='flex-1 bg-gray-100 p-2 xl:mt-16'>{props.children}</div>
      </div>
    </>
  );
};

export { Main };
