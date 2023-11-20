/* eslint-disable no-underscore-dangle */
/* eslint-disable tailwindcss/no-custom-classname */
import axios from 'axios';
import Link from 'next/link';
import { useEffect } from 'react';
import useSWR from 'swr';

const fetcher = (url: string) => axios.get(url).then((res) => res.data);
const Sidebars = () => {
  useEffect(() => {
    // work with sidebar
    const btn: any = document.getElementById('sliderBtn');
    const sideBar: any = document.getElementById('sideBar');
    const sideBarHideBtn: any = document.getElementById('sideBarHideBtn');

    // show sidebar
    btn.addEventListener('click', () => {
      if (sideBar.classList.contains('xl:-ml-64')) {
        sideBar.classList.replace('xl:-ml-64', 'xl:ml-0');
        sideBar.classList.remove('xl:slideOutLeft');
        sideBar.classList.add('xl:slideInLeft');
      }
    });

    // hide sideBar
    sideBarHideBtn.addEventListener('click', () => {
      if (sideBar.classList.contains('xl:ml-0', 'slideInLeft')) {
        // eslint-disable-next-line @typescript-eslint/naming-convention
        const _class = () => {
          sideBar.classList.remove('xl:slideInLeft');
          sideBar.classList.add('xl:slideOutLeft');

          // eslint-disable-next-line no-console
          console.log('hide');
        };
        const animate = async () => {
          await _class();

          setTimeout(() => {
            sideBar.classList.replace('xl:ml-0', 'xl:-ml-64');
            // eslint-disable-next-line no-console
            console.log('animated');
          }, 300);
        };

        _class();
        animate();
      }
    });
    // end with sidebar
  }, []);

  const { data } = useSWR(`/api/crop_years/get-current`, fetcher, {
    refreshInterval: 0
  });
  let cropNum: any;
  if (data) {
    data.forEach((item: any) => {
      cropNum = `${item.cropYear.substring(5, 7)}`;
      // eslint-disable-next-line no-console
      // console.log(cropNum);
    });
  }
  return (
    <>
      <div
        id='sideBar'
        className='animated faster lx:shadow-xl relative flex w-56 flex-none flex-col flex-wrap border-r border-gray-300 bg-white p-6 xl:fixed xl:top-0 xl:z-30 xl:-ml-64 xl:h-screen'
      >
        <div className='flex flex-col'>
          <div className='mb-4 hidden text-right xl:block'>
            <button id='sideBarHideBtn'>
              <i className='fa fa-times-circle'></i>
            </button>
          </div>
          <p className='mb-4 text-xs uppercase tracking-wider text-gray-600'>
            Dashboard
          </p>
          <Link href={`/dashboard/${cropNum}`}>
            <a className='mb-3 text-sm font-medium capitalize transition duration-500 ease-in-out hover:text-teal-600'>
              <i className='fa fa-pie-chart mr-2 text-xs'></i>
              PS-Promotion
            </a>
          </Link>
          <Link href={`/maps/${cropNum}`}>
            <a className='mb-3 text-sm font-medium capitalize transition duration-500 ease-in-out hover:text-teal-600'>
              <i className='fa fa-map mr-2 text-xs'></i>
              PS-Maps
            </a>
          </Link>
          <Link href={`/dashboard/cane/${cropNum}`}>
            <a className='mb-3 text-sm font-medium capitalize transition duration-500 ease-in-out hover:text-teal-600'>
              <i className='fa fa-align-center mr-2 text-xs'></i>
              PS-CANE
            </a>
          </Link>
          <Link href={`/dashboard/factory/${cropNum}`}>
            <a className='mb-3 text-sm font-medium capitalize transition duration-500 ease-in-out hover:text-teal-600'>
              <i className='fa fa-align-center mr-2 text-xs'></i>
              Business Competitors
            </a>
          </Link>
          <Link href='/web'>
            <a className='mb-3 text-sm font-medium capitalize transition duration-500 ease-in-out hover:text-teal-600'>
              <i className='fa fa-users mr-2 text-xs'></i>
              PS-C-CENTER
            </a>
          </Link>
          <p className='my-4 text-xs uppercase tracking-wider text-gray-600'>
            Budgets Request
          </p>
          <Link href='/budgets'>
            <a className='mb-3 text-sm font-medium capitalize transition duration-500 ease-in-out hover:text-teal-600'>
              <i className='fa fa-money mr-2 text-xs'></i>
              สถานะงบประมาณ
            </a>
          </Link>
          <Link href='/admins/budget/'>
            <a className='mb-3 text-sm font-medium capitalize transition duration-500 ease-in-out hover:text-teal-600'>
              <i className='fa fa-handshake-o mr-2 text-xs'></i>
              อนุมัติเข้าระบบ
            </a>
          </Link>
          <Link href='/securities'>
            <a className='mb-3 text-sm font-medium capitalize transition duration-500 ease-in-out hover:text-teal-600'>
              <i className='fa fa-money mr-2 text-xs'></i>
              หลักทรัพย์ค้ำประกัน
            </a>
          </Link>
          <Link href='/admins/center'>
            <a className='mb-3 text-sm font-medium capitalize transition duration-500 ease-in-out hover:text-teal-600'>
              <i className='fa fa-money mr-2 text-xs'></i>
              ธุรการฝ่ายอ้อย
            </a>
          </Link>
          <Link href='/admins/irrigation'>
            <a className='mb-3 text-sm font-medium capitalize transition duration-500 ease-in-out hover:text-teal-600'>
              <i className='fa fa-money mr-2 text-xs'></i>
              โครงการส่งเสริม
            </a>
          </Link>
          <Link href='/admins/center'>
            <a className='mb-3 text-sm font-medium capitalize transition duration-500 ease-in-out hover:text-teal-600'>
              <i className='fa fa-money mr-2 text-xs'></i>
              GIS
            </a>
          </Link>
          <p className='my-4 text-xs uppercase tracking-wider text-gray-600'>
            Farmer Detail
          </p>

          <Link href='/farmars'>
            <a className='mb-3 text-sm font-medium capitalize transition duration-500 ease-in-out hover:text-teal-600'>
              <i className='fad fa-text mr-2 text-xs'></i>
              ข้อมูลชาวไร่
            </a>
          </Link>
          <Link href='/carbon'>
            <a className='mb-3 text-sm font-medium capitalize transition duration-500 ease-in-out hover:text-teal-600'>
              <i className='fad fa-text mr-2 text-xs'></i>
              Carbon Credit
            </a>
          </Link>

          <Link href={`/farmars/plotcode/${cropNum}`}>
            <a className='mb-3 text-sm font-medium capitalize transition duration-500 ease-in-out hover:text-teal-600'>
              <i className='fad fa-whistle mr-2 text-xs'></i>
              แปลงอ้อย
            </a>
          </Link>

          <Link href={`/farmars/notifys/${cropNum}`}>
            <a className='mb-3 text-sm font-medium capitalize transition duration-500 ease-in-out hover:text-teal-600'>
              <i className='fad fa-cricket mr-2 text-xs'></i>
              จดแจ้งพื้นที่
            </a>
          </Link>

          <Link href='/machines'>
            <a className='mb-3 text-sm font-medium capitalize transition duration-500 ease-in-out hover:text-teal-600'>
              <i className='fad fa-cricket mr-2 text-xs'></i>
              เครื่องมือ - เครื่องจักรชาวไร่
            </a>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Sidebars;
