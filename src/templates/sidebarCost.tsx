/* eslint-disable no-underscore-dangle */
/* eslint-disable tailwindcss/no-custom-classname */
import Link from 'next/link';
import { useEffect } from 'react';

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
          <Link href='/costs/dashboard'>
            <a className='mb-3 text-sm font-medium capitalize transition duration-500 ease-in-out hover:text-teal-600'>
              <i className='fa fa-pie-chart mr-2 text-xs'></i>
              สรุปรายรับ-รายจ่าย
            </a>
          </Link>
          <Link href='/costs/account'>
            <a className='mb-3 text-sm font-medium capitalize transition duration-500 ease-in-out hover:text-teal-600'>
              <i className='fa fa-pie-chart mr-2 text-xs'></i>
              รหัสบัญชีหลัก
            </a>
          </Link>

          <p className='my-4 text-xs uppercase tracking-wider text-gray-600'>
            Income and Expenses
          </p>
          <Link href='/costs'>
            <a className='mb-3 text-sm font-medium capitalize transition duration-500 ease-in-out hover:text-teal-600'>
              <i className='fa fa-pie-chart mr-2 text-xs'></i>
              รายรับ-รายจ่าย ทั้งหมด
            </a>
          </Link>

          <p className='my-4 text-xs uppercase tracking-wider text-gray-600'>
            Admin
          </p>

          <Link href='/costs/admin'>
            <a className='mb-3 text-sm font-medium capitalize transition duration-500 ease-in-out hover:text-teal-600'>
              <i className='fad fa-text mr-2 text-xs'></i>
              รายรับ-รายจ่าย
            </a>
          </Link>
          <Link href='/costs/close'>
            <a className='mb-3 text-sm font-medium capitalize transition duration-500 ease-in-out hover:text-teal-600'>
              <i className='fad fa-text mr-2 text-xs'></i>
              ปิดงบ
            </a>
          </Link>
          <Link href='/costs/imp'>
            <a className='mb-3 text-sm font-medium capitalize transition duration-500 ease-in-out hover:text-teal-600'>
              <i className='fad fa-text mr-2 text-xs'></i>
              นำเข้าข้อมูล
            </a>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Sidebars;
