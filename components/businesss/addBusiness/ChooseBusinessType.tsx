import React, { useState } from 'react';
import Image from 'next/image';
import logo from '../../../public/devicelogo.svg';
import { Radio } from "@nextui-org/react";
import { useRouter } from 'next/router';
export default function ChooseBusinessType() {
    const router = useRouter()
    const [selected, setSelected] = useState('');
    const [error, setError] = useState('');

    const handleClick = () => {
        if (!selected) {
            setError('Select Business Type')
        } else {
            router.push('/admin/addBusiness/searchByName')
        }
    }
    return (
        <>
            <div className='flex items-center justify-center h-full'>
                <div className='block sm:flex items-center justify-between px-10'>
                    <div>
                        <p className='' style={{ fontSize: 27, marginBottom: 12 }}>Choose your business type</p>
                        <p style={{ fontSize: 15, marginBottom: 10, color: 'gray' }}>Select all that apply</p>
                        {error && <p className='text-red-500'>{error}</p>}
                        <div>
                            <Radio.Group value={selected}
                                onChange={setSelected}>
                                <Radio value="1" description="Customers can purchase products through your website" className='text-center justify-center border-2 rounded-lg px-3 py-2' isSquared>
                                    <p className='text-lg font-semibold'>Online Retail</p>
                                </Radio>
                                <Radio value="2" description="Customers can visit your business in person" className='text-center justify-center border-2 rounded-lg px-3 py-2' isSquared>
                                    <p className='text-lg font-semibold'>Local store</p>
                                </Radio>
                                <Radio value="3" description="Your business makes visits to customers" className='text-center justify-center border-2 rounded-lg px-3 py-2' isSquared>
                                    <p className='text-lg font-semibold'>Service business</p>
                                </Radio>
                            </Radio.Group>
                        </div>
                        <button className='text-white  bg-blue-600 w-full py-3 rounded-md mt-4' onClick={handleClick}>Next</button>
                    </div>
                    <div className='pt-10'>
                        <Image src={logo} className="mr-3 h-8 w-screen sm:h-9 " height={350} alt="Logo" />
                    </div>
                </div>
            </div>
        </>
    )
}





