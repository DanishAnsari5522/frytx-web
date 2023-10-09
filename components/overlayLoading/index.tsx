import React from 'react';
import { Loading } from '@nextui-org/react';

export default function OverlayLoading() {
    return (
        <>
            <div className='w-[100%] h-full absolute bg-gray-100 self-center items-center opacity-80 z-50'>
                <Loading type="spinner" size="xl"  className='text-blue w-full py-3 rounded-md mt-40 items-center' />
            </div>
        </>
    )
}
