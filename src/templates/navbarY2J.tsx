/* eslint-disable @typescript-eslint/no-loop-func */
/* eslint-disable no-underscore-dangle */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable tailwindcss/no-custom-classname */
/* eslint-disable tailwindcss/no-contradicting-classname */
import { getCookie } from 'cookies-next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const Navbars = () => {
  const router = useRouter();
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // check if the page have dropdwon menu
      const dropdown: any = document.getElementsByClassName('dropdown');

      if (dropdown.length >= 1) {
        // eslint-disable-next-line no-plusplus
        for (let i = 0; i < dropdown.length; i++) {
          const item: any = dropdown[i];

          let menu: any;
          // let btn: any;
          let overflow: any;

          item.addEventListener('click', () => {
            // eslint-disable-next-line @typescript-eslint/no-shadow, no-plusplus
            for (let i: number = 0; i < item.children.length; i++) {
              const e = item.children[i];

              if (e.classList.contains('menu')) {
                menu = e;
              } else if (e.classList.contains('menu-btn')) {
                // eslint-disable-next-line unused-imports/no-unused-vars
                // _btn = e;
              } else if (e.classList.contains('menu-overflow')) {
                overflow = e;
              }
            }

            if (menu.classList.contains('hidden')) {
              // show the menu
              // eslint-disable-next-line @typescript-eslint/no-use-before-define
              showMenu();
            } else {
              // hide the menu
              // eslint-disable-next-line @typescript-eslint/no-use-before-define
              hideMenu();
            }
          });

          let showMenu = () => {
            menu.classList.remove('hidden');
            menu.classList.add('fadeIn');
            overflow.classList.remove('hidden');
          };

          let hideMenu = () => {
            menu.classList.add('hidden');
            overflow.classList.add('hidden');
            menu.classList.remove('fadeIn');
          };
        }
      }
      const navbarToggle: any = document.getElementById('navbarToggle');
      const navbar: any = document.getElementById('navbar');

      navbarToggle.addEventListener('click', () => {
        if (navbar.classList.contains('xl:hidden')) {
          navbar.classList.remove('xl:hidden');
          navbar.classList.add('fadeIn');
        } else {
          // eslint-disable-next-line @typescript-eslint/naming-convention
          const _classRemover = () => {
            navbar.classList.remove('fadeIn');
            navbar.classList.add('fadeOut');
            // eslint-disable-next-line no-console
            console.log('removed');
          };

          const animate = async () => {
            await _classRemover();
            // eslint-disable-next-line no-console
            console.log('animated');

            setTimeout(() => {
              navbar.classList.add('xl:hidden');
              navbar.classList.remove('fadeOut');
            }, 450);
          };

          animate();
        }
      });
    }
  }, []);

  const logout = () => {
    // deleteCookie('ps-jwt');
    // deleteCookie('user');
    // deleteCookie('zone');
    router.push('/login');
  };
  return (
    <>
      <div className='flex flex-row flex-wrap items-center border-b border-gray-300 bg-white p-2 xl:fixed xl:top-0 xl:z-20 xl:w-full'>
        <div className='flex w-64 flex-none flex-row items-center'>
          <Link href='/costs'>
            <a>
              <img src='/images/ps_navbar.png' className='w-48' />
            </a>
          </Link>
          <button
            id='sliderBtn'
            className='hidden flex-none text-right text-gray-900 xl:block'
          >
            <i className='fa fa-list-ul'></i>
          </button>
        </div>
        <button
          id='navbarToggle'
          className='right-0 mr-6 hidden xl:fixed xl:block'
        >
          <i className='fa fa-angle-double-down'></i>
        </button>
        <div
          id='navbar'
          className='animated flex flex-1 flex-row flex-wrap items-center justify-between pl-3 xl:fixed xl:top-0 xl:left-0 xl:mt-16 xl:hidden xl:w-full xl:flex-col xl:items-center xl:border-y xl:border-gray-200 xl:bg-white xl:p-10'
        >
          <div className='text-gray-600 xl:mb-10 xl:flex xl:w-full xl:flex-row xl:justify-evenly xl:border-b xl:border-gray-200 xl:pb-10'>
            <a
              className='mr-2 transition duration-500 ease-in-out hover:text-gray-900'
              href='#'
              title='email'
            >
              <i className='fa fa-envelope-open'></i>
            </a>
            <a
              className='mr-2 transition duration-500 ease-in-out hover:text-gray-900'
              href='#'
              title='email'
            >
              <i className='fa fa-comments-o'></i>
            </a>
            <a
              className='mr-2 transition duration-500 ease-in-out hover:text-gray-900'
              href='#'
              title='email'
            >
              <i className='fa fa-check-circle'></i>
            </a>
            <a
              className='mr-2 transition duration-500 ease-in-out hover:text-gray-900'
              href='#'
              title='email'
            >
              <i className='fa fa-calendar'></i>
            </a>
          </div>

          <div className='flex flex-row-reverse items-center'>
            <div className='dropdown relative xl:static'>
              <button className='menu-btn focus:shadow-outline flex flex-wrap items-center focus:outline-none'>
                <div className='h-8 w-8 overflow-hidden rounded-full'>
                  <img
                    className='h-full w-full object-cover'
                    src='/assets/img/user.svg'
                  />
                </div>

                <div className='ml-2 flex capitalize'>
                  <h1 className='m-0 p-0 text-sm font-semibold leading-none text-gray-800'>
                    User {getCookie('user')}
                  </h1>
                  <i className='fa fa-chevron-down ml-2 text-xs leading-none'></i>
                </div>
              </button>

              <button className='menu-overflow fixed top-0 left-0 z-10 hidden h-full w-full'></button>

              <div className='menu animated faster absolute right-0 z-20 mt-5 hidden w-40 rounded bg-white py-2 text-gray-500 shadow-md xl:mt-10 xl:w-full'>
                <hr />
                <a className='block bg-white px-3 py-2 text-sm font-medium capitalize tracking-wide transition-all duration-300 ease-in-out hover:bg-gray-200 hover:text-gray-900'>
                  <i className='fa fa-user-times mr-1 text-xs'></i>
                  <button onClick={logout}>log out</button>
                </a>
              </div>
            </div>

            <div className='dropdown relative mr-5 xl:static'>
              <button className='menu-btn m-0 p-0 text-gray-500 transition-all duration-300 ease-in-out hover:text-gray-900 focus:text-gray-900 focus:outline-none'>
                <i className='fa fa-bell'></i>
              </button>

              <button className='menu-overflow fixed top-0 left-0 z-10 hidden h-full w-full'></button>

              <div className='menu animated faster absolute right-0 z-20 mt-5 hidden w-84 rounded bg-white py-2 shadow-md xl:right-0 xl:w-full'>
                <div className='flex flex-row items-center justify-between px-4 py-2 text-sm font-semibold capitalize'>
                  <h1>notifications</h1>
                  <div className='rounded border border-teal-200 bg-teal-100 px-1 text-xs text-teal-500'>
                    <strong>5</strong>
                  </div>
                </div>
                <hr />

                <a
                  className='flex flex-row items-center justify-start bg-white p-4 text-sm font-medium capitalize tracking-wide transition-all duration-300 ease-in-out hover:bg-gray-200'
                  href='#'
                >
                  <div className='mr-3 rounded border border-gray-300 bg-gray-100 px-3 py-2'>
                    <i className='fa fa-birthday-cake text-sm'></i>
                  </div>

                  <div className='flex-rowbg-green-100 flex flex-1'>
                    <div className='flex-1'>
                      <h1 className='text-sm font-semibold'>poll..</h1>
                      <p className='text-xs text-gray-500'>text here also</p>
                    </div>
                    <div className='text-right text-xs text-gray-500'>
                      <p>4 min ago</p>
                    </div>
                  </div>
                </a>
                <hr />

                <a
                  className='flex flex-row items-center justify-start bg-white p-4 text-sm font-medium capitalize tracking-wide transition-all duration-300 ease-in-out hover:bg-gray-200'
                  href='#'
                >
                  <div className='mr-3 rounded border border-gray-300 bg-gray-100 px-3 py-2'>
                    <i className='fa fa-user-circle text-sm'></i>
                  </div>

                  <div className='flex-rowbg-green-100 flex flex-1'>
                    <div className='flex-1'>
                      <h1 className='text-sm font-semibold'>mohamed..</h1>
                      <p className='text-xs text-gray-500'>text here also</p>
                    </div>
                    <div className='text-right text-xs text-gray-500'>
                      <p>78 min ago</p>
                    </div>
                  </div>
                </a>
                <hr />

                <a
                  className='flex flex-row items-center justify-start bg-white p-4 text-sm font-medium capitalize tracking-wide transition-all duration-300 ease-in-out hover:bg-gray-200'
                  href='#'
                >
                  <div className='mr-3 rounded border border-gray-300 bg-gray-100 px-3 py-2'>
                    <i className='fa fa-picture-o text-sm'></i>
                  </div>

                  <div className='flex-rowbg-green-100 flex flex-1'>
                    <div className='flex-1'>
                      <h1 className='text-sm font-semibold'>new imag..</h1>
                      <p className='text-xs text-gray-500'>text here also</p>
                    </div>
                    <div className='text-right text-xs text-gray-500'>
                      <p>65 min ago</p>
                    </div>
                  </div>
                </a>
                <hr />

                <a
                  className='flex flex-row items-center justify-start bg-white p-4 text-sm font-medium capitalize tracking-wide transition-all duration-300 ease-in-out hover:bg-gray-200'
                  href='#'
                >
                  <div className='mr-3 rounded border border-gray-300 bg-gray-100 px-3 py-2'>
                    <i className='fa fa-clock-o text-sm'></i>
                  </div>

                  <div className='flex-rowbg-green-100 flex flex-1'>
                    <div className='flex-1'>
                      <h1 className='text-sm font-semibold'>time is up..</h1>
                      <p className='text-xs text-gray-500'>text here also</p>
                    </div>
                    <div className='text-right text-xs text-gray-500'>
                      <p>1 min ago</p>
                    </div>
                  </div>
                </a>

                <hr />
                <div className='mt-2 px-4 py-2'>
                  <a
                    href='#'
                    className='block rounded border border-gray-300 p-1 text-center text-xs uppercase transition-all duration-500 ease-in-out hover:text-teal-500'
                  >
                    view all
                  </a>
                </div>
              </div>
            </div>

            <div className='dropdown relative mr-5 xl:static'>
              <button className='menu-btn m-0 p-0 text-gray-500 transition-all duration-300 ease-in-out hover:text-gray-900 focus:text-gray-900 focus:outline-none'>
                <i className='fa fa-comments'></i>
              </button>

              <button className='menu-overflow fixed top-0 left-0 z-10 hidden h-full w-full'></button>

              <div className='menu animated faster absolute right-0 z-20 mt-5 hidden w-84 rounded bg-white py-2 shadow-md xl:right-0 xl:w-full'>
                <div className='flex flex-row items-center justify-between px-4 py-2 text-sm font-semibold capitalize'>
                  <h1>messages</h1>
                  <div className='rounded border border-teal-200 bg-teal-100 px-1 text-xs text-teal-500'>
                    <strong>3</strong>
                  </div>
                </div>
                <hr />

                <a
                  className='flex flex-row items-center justify-start bg-white p-4 text-sm font-medium capitalize tracking-wide transition-all duration-300 ease-in-out hover:bg-gray-200'
                  href='#'
                >
                  <div className='mr-3 h-10 w-10 overflow-hidden rounded-full border border-gray-300 bg-gray-100'>
                    <img
                      className='h-full w-full object-cover'
                      src='/assets/img/user1.jpg'
                      alt=''
                    />
                  </div>

                  <div className='flex-rowbg-green-100 flex flex-1'>
                    <div className='flex-1'>
                      <h1 className='text-sm font-semibold'>mohamed said</h1>
                      <p className='text-xs text-gray-500'>yeah i know</p>
                    </div>
                    <div className='text-right text-xs text-gray-500'>
                      <p>4 min ago</p>
                    </div>
                  </div>
                </a>
                <hr />

                <a
                  className='flex flex-row items-center justify-start bg-white p-4 text-sm font-medium capitalize tracking-wide transition-all duration-300 ease-in-out hover:bg-gray-200'
                  href='#'
                >
                  <div className='mr-3 h-10 w-10 overflow-hidden rounded-full border border-gray-300 bg-gray-100'>
                    <img
                      className='h-full w-full object-cover'
                      src='/assets/img/user2.jpg'
                      alt=''
                    />
                  </div>

                  <div className='flex-rowbg-green-100 flex flex-1'>
                    <div className='flex-1'>
                      <h1 className='text-sm font-semibold'>sull goldmen</h1>
                      <p className='text-xs text-gray-500'>for sure</p>
                    </div>
                    <div className='text-right text-xs text-gray-500'>
                      <p>1 day ago</p>
                    </div>
                  </div>
                </a>
                <hr />

                <a
                  className='flex flex-row items-center justify-start bg-white p-4 text-sm font-medium capitalize tracking-wide transition-all duration-300 ease-in-out hover:bg-gray-200'
                  href='#'
                >
                  <div className='mr-3 h-10 w-10 overflow-hidden rounded-full border border-gray-300 bg-gray-100'>
                    <img
                      className='h-full w-full object-cover'
                      src='/assets/img/user3.jpg'
                      alt=''
                    />
                  </div>

                  <div className='flex-rowbg-green-100 flex flex-1'>
                    <div className='flex-1'>
                      <h1 className='text-sm font-semibold'>mick</h1>
                      <p className='text-xs text-gray-500'>is typing ....</p>
                    </div>
                    <div className='text-right text-xs text-gray-500'>
                      <p>31 feb</p>
                    </div>
                  </div>
                </a>

                <hr />
                <div className='mt-2 px-4 py-2'>
                  <a
                    href='#'
                    className='block rounded border border-gray-300 p-1 text-center text-xs uppercase transition-all duration-500 ease-in-out hover:text-teal-500'
                  >
                    view all
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbars;
