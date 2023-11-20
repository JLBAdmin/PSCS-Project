import axios from 'axios';
import fs from 'fs/promises';
import { GetServerSideProps, NextPage } from 'next';
import Link from 'next/link';
import path from 'path';
import { useState } from 'react';

interface Props {
  dirs: string[];
}

const Home: NextPage<Props> = ({ dirs }) => {
  const [uploading, setUploading] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');
  const [selectedFile, setSelectedFile] = useState<File>();

  const handleUpload = async () => {
    setUploading(true);
    try {
      if (!selectedFile) return;
      const formData = new FormData();
      formData.append('myImage', selectedFile);
      const { data } = await axios.post('/api/image', formData);
      // eslint-disable-next-line no-console
      console.log(data);
    } catch (error: any) {
      // eslint-disable-next-line no-console
      console.log(error.response?.data);
    }
    setUploading(false);
  };

  return (
    <div className='mx-auto max-w-4xl space-y-6 p-20'>
      <label>
        <input
          type='file'
          hidden
          onChange={({ target }) => {
            if (target.files) {
              const file: any = target.files[0];
              setSelectedImage(URL.createObjectURL(file));
              setSelectedFile(file);
            }
          }}
        />
        <div className='flex aspect-video w-40 cursor-pointer items-center justify-center rounded border-2 border-dashed'>
          {selectedImage ? (
            <img src={selectedImage} alt='' />
          ) : (
            <span>Select Image</span>
          )}
        </div>
      </label>
      <button
        onClick={handleUpload}
        disabled={uploading}
        style={{ opacity: uploading ? '.5' : '1' }}
        className='w-32 rounded bg-red-600 p-3 text-center text-white'
      >
        {uploading ? 'Uploading..' : 'Upload'}
      </button>
      <div className='mt-20 flex flex-col space-y-3'>
        {dirs.map((item) => (
          <Link key={item} href={`/images/psc/${item}`}>
            <a className='text-blue-500 hover:underline'>{item}</a>
          </Link>
        ))}
      </div>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const props = { dirs: [] };
  try {
    const dirs = await fs.readdir(
      path.join(process.cwd(), '/public/images/psc')
    );
    props.dirs = dirs as any;
    return { props };
  } catch (error) {
    return { props };
  }
};

export default Home;
