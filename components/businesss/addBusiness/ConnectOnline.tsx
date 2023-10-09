import React, { useState } from 'react';
import Image from 'next/image';
import logo from '../../../public/devicelogo.svg';
import ind from '../../../public/indiamart1.svg';
import google from '../../../public/google.svg';
import fb from '../../../public/facebook.svg';
import { useRouter } from 'next/router';
import Link from 'next/link';

export default function ConnectOnline() {
    const router = useRouter()
    const [selected, setSelected] = useState('');
    const [error, setError] = useState('');

    const handleClick = (name: String) => {
        if (!selected) {
            setError('Select Business Type')
        } else {
            // router.push('/admin/addBusiness/scrap')
        }
        // router.push('/admin/addBusiness/scrap')
    }
    return (
        <>
            <div className='flex items-center justify-center h-full'>
                <div className='block sm:flex items-center justify-between px-10'>
                    <div>
                        <p className='' style={{ fontSize: 27, marginBottom: 12 }}>Connect online platforms</p>
                        <p style={{ fontSize: 15, marginBottom: 10, color: 'gray' }}>Is your business listed on any social platforms? Quick and easy verification via social platforms</p>
                        <div>
                            <Link href={{
                                pathname: '/admin/addBusiness/scrap',
                                query: { name: 'indiaMart' }
                            }}>
                                <div className='text-center justify-center border-2 rounded-lg px-3 py-2 mb-2 cursor-pointer'>
                                    <Image src={ind} className="mr-3 h-8 w-screen sm:h-9 " height={50} alt="Logo" />
                                </div>
                            </Link>
                            <Link href={{
                                pathname: '/admin/addBusiness/scrap',
                                query: { name: 'google' }
                            }}>
                                <div className='text-center justify-center border-2 rounded-lg px-3 py-2 mb-2'>
                                    <Image src={google} className="mr-3 h-8 w-screen sm:h-9 " height={50} alt="Logo" />
                                </div>
                            </Link>
                            <Link href={{
                                pathname: '/admin/addBusiness/scrap',
                                query: { name: 'facebook' }
                            }}>
                                <div className='text-center justify-center border-2 rounded-lg px-3 py-2 mb-2'>
                                    <Image src={fb} className="mr-3 h-8 w-screen sm:h-9 " height={50} alt="Logo" />
                                </div>
                            </Link>
                        </div>
                        {/* <button className='text-white  bg-blue-600 w-full py-3 rounded-md mt-4' onClick={handleClick}>Next</button> */}
                    </div>
                    <div className='pt-10'>
                        <Image src={logo} className="mr-3 h-8 w-screen sm:h-9 " height={350} alt="Logo" />
                    </div>
                </div>
            </div>
        </>
    )
}





