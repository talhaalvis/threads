// Card.js
import Image from 'next/image';
import React from 'react';

const Card = () => {
  return (
    <div  style={{ backgroundImage: "url('/assets/heart-filled.svg')", position: 'relative' }} className=' w-f'>
     
      <div className='flex items-center justify-between w-full'>
        <h1 className='head-text'>first</h1>
        <h1 className='head-text'>second</h1>

      </div>
      <div style={{ height: '150px', backgroundColor: "rgba(8, 6, 10, 0.7)", position: 'absolute', bottom: '0', width: '100%' }} className=' from-transparent opacity-70'>
        <div className='px-4 flex flex-col gap-4'>
            <Image src='/assets/logo.svg' alt='image' width={24} height={24} ></Image>
            <div className='flex flex-col gap-1'>

            <h1 className='head-text'> HIGHFORCE</h1>
            <h3 className='t-light'> Heavy traffic</h3>
            </div>
            <div className='flex flex-col'>
                <div className='flex items-center gap-2'>
                    <Image src='/assets/logo.svg' width={20} height={20}/>
                    <h3 className='t-light'>3132</h3>
                </div>
                <div className='flex items-center gap-2'>
                <Image src='/assets/logo.svg' width={20} height={20}/>
                    <h3 className='t-light'>Shutoko Revival Project 0.9.2</h3>
                </div>

            </div>

        </div>

      </div>
    </div>
  );
};

export default Card;
