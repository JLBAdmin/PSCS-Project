/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable tailwindcss/no-custom-classname */
/* eslint-disable react/jsx-no-duplicate-props */
import { setCookie } from 'cookies-next';
import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';

// import useAuth from '../hooks/useAuth';
import axios from '../utils/AxiosConfig';

const LOGIN_URL = '/api/users/login';

const Login = () => {
  const router = useRouter();
  // const { setAuth } = useAuth();
  const userRef = useRef<any>();
  const errRef = useRef<any>();

  const [user, setUser] = useState('');
  const [pwd, setPwd] = useState('');
  const [errMsg, setErrMsg] = useState('');
  // const [success, setSuccess] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg('');
  }, [user, pwd]);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    // let response: any;
    try {
      // eslint-disable-next-line unused-imports/no-unused-vars
      await axios.post(LOGIN_URL, JSON.stringify({ user, pwd }), {
        headers: { 'Content-Type': 'application/json' },
        withCredentials: true
      });
      // .then((_res) => {
      // const accessToken = response?.data?.accessToken;
      // const roles = res?.data?.roles;
      // setAuth({ accessToken });
      setUser('');
      setPwd('');
      // eslint-disable-next-line no-console
      if (user.substring(0, 4).toLowerCase() === 'user') {
        setCookie('user', user.substring(4));
        router.push('/costs');
      } else if (
        user.substring(0, 4).toLowerCase() === 'zone' ||
        user.substring(0, 4).toLowerCase() === 'pscs'
      ) {
        setCookie('zone', user.substring(4).toLowerCase());
        router.push('/');
      }

      // setSuccess(true);
      // });
      // eslint-disable-next-line no-console
      // console.log(JSON.stringify(response));
    } catch (err: any) {
      // eslint-disable-next-line no-console
      // console.log(err.res);
      if (err?.response) {
        setErrMsg('No Server Response');
      } else if (err.response?.status === 400) {
        setErrMsg('Missing Username or Password');
      } else if (err.response?.status === 401) {
        setErrMsg('Unauthorized');
      } else {
        setErrMsg('Login Failed');
      }
      errRef.current.focus();
    }
  };

  return (
    // <>
    //   {success ? (
    //     <section>
    //       <h1>You are logged in!</h1>
    //       <br />
    //       <p>
    //         <a href='#'>Go to Home</a>
    //       </p>
    //     </section>
    //   ) : (
    //     <>
    <section className='flex min-h-screen items-stretch text-white '>
      <div
        className='relative flex w-2/3 items-center bg-gray-500 bg-cover bg-no-repeat lg:mb-5 lg:hidden lg:w-full'
        style={{
          backgroundImage: 'url(/assets/images/ps_factory.png)'
        }}
      >
        <div className='absolute inset-0 z-0 opacity-0'></div>
        <div className='z-10 w-full px-24'>
          <h1 className='text-left text-5xl font-bold tracking-wide lg:flex'>
            งบประมาณชาวไร่อ้อย
          </h1>
          <p className='my-4 text-3xl'>บริษัท น้ำตาลพิษณุโลก จำกัด</p>
        </div>
        <div className='absolute inset-x-0 bottom-0 flex justify-center space-x-4 p-4 text-center'>
          <span>
            <svg
              fill='#fff'
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 24 24'
            >
              <path d='M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z' />
            </svg>
          </span>
          <span>
            <svg
              fill='#fff'
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 24 24'
            >
              <path d='M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z' />
            </svg>
          </span>
          <span>
            <svg
              fill='#fff'
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 24 24'
            >
              <path d='M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z' />
            </svg>
          </span>
        </div>
      </div>
      <div
        className='z-0 flex w-1/3 items-center justify-center px-0 text-center md:px-16 lg:w-full'
        style={{ backgroundColor: '#161616' }}
      >
        <div
          className='absolute inset-0 z-10 hidden items-center bg-gray-500 bg-cover bg-no-repeat'
          style={{
            backgroundImage: 'url(/assets/images/ps_factory.png)'
          }}
        >
          <div className='absolute inset-0 z-0 opacity-60'></div>
        </div>
        <div className='z-20 w-full py-6'>
          <h1 className='my-6'>
            <img
              src='/images/ps_navbar.png'
              className='inline-flex h-7 w-auto sm:h-20'
            />
          </h1>
          <div className='space-x-2 py-6'>
            <span className='inline-flex h-10 w-10 items-center justify-center rounded-full border-2 border-white text-lg font-bold'>
              f
            </span>
            <span className='inline-flex h-10 w-10 items-center justify-center rounded-full border-2 border-white text-lg font-bold'>
              G+
            </span>
            <span className='inline-flex h-10 w-10 items-center justify-center rounded-full border-2 border-white text-lg font-bold'>
              in
            </span>
          </div>
          <p className='text-gray-100'>
            กรุณาใส่ชื่อผู้ใช้งานและรหัสผ่าน ด้านล่าง
          </p>
          <h1
            ref={errRef}
            style={{ color: 'red', fontSize: '20px' }}
            className={errMsg ? 'errmsg' : 'offscreen'}
            aria-live='assertive'
          >
            {errMsg}
          </h1>
          <form
            onSubmit={handleSubmit}
            className='sm:w-3/3 mx-auto w-full px-5'
          >
            <div className='pb-2 pt-4'>
              <input
                // type='email'
                type='text'
                name='username'
                // id='email'
                // name = "email"
                placeholder='UserName'
                className='block w-full rounded-sm bg-black p-4 text-lg'
                id='username'
                ref={userRef}
                autoComplete='off'
                onChange={(e) => setUser(e.target.value)}
                value={user}
                required
              />
            </div>
            <div className='pb-2 pt-4'>
              <input
                className='block w-full rounded-sm bg-black p-4 text-lg'
                type='password'
                name='password'
                id='password'
                placeholder='Password'
                onChange={(e) => setPwd(e.target.value)}
                value={pwd}
                required
              />
            </div>

            <div className='mb-6 flex items-center justify-between'>
              <div className='form-group form-check'>
                <input
                  className='form-check-input float-left mt-1 mr-2 h-4 w-4 cursor-pointer'
                  type='checkbox'
                  value=''
                  id='flexCheckDefault'
                />
                <label
                  className='htmlForm-check-label inline-block'
                  htmlFor='flexCheckDefault'
                >
                  Remember me
                </label>
              </div>
              <div className='text-right text-gray-400 hover:text-gray-100 hover:underline'>
                <a href='#'>Forgot your password?</a>
              </div>
            </div>
            <div className='px-4 pb-2 pt-4'>
              <button className='block w-full rounded-full bg-indigo-500 p-4 text-lg uppercase hover:bg-indigo-600 focus:outline-none'>
                sign in
              </button>
            </div>

            <div className='inset-x-0 mt-16 flex justify-center space-x-4 p-4 text-center lg:hidden'>
              <a href='#'>
                <svg
                  fill='#fff'
                  xmlns='http://www.w3.org/2000/svg'
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                >
                  <path d='M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z' />
                </svg>
              </a>
              <a href='#'>
                <svg
                  fill='#fff'
                  xmlns='http://www.w3.org/2000/svg'
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                >
                  <path d='M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z' />
                </svg>
              </a>
              <a href='#'>
                <svg
                  fill='#fff'
                  xmlns='http://www.w3.org/2000/svg'
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                >
                  <path d='M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z' />
                </svg>
              </a>
            </div>
          </form>
        </div>
      </div>
    </section>
    //     </>
    //   )}
    // </>
  );
};

export default Login;
