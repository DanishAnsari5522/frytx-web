import React, { useState } from 'react';
import Image from 'next/image';
import logo from '../../../public/devicelogo.svg';
import { useRouter } from 'next/router';
import { Radio } from "@nextui-org/react";

export default function BusinessType() {
    const router = useRouter()
    const [name, setName] = useState('');
    const [error, setError] = useState('');
    const [selected, setSelected] = useState('');


    const handleClick = () => {
        if (!selected) {
            setError('Select Business Type')
        } else {
            router.push('/admin/addBusiness/chooseBusinessType')
        }
    }

    return (
        <>
            <div className='flex items-center justify-center h-full'>
                <div className='block sm:flex items-center justify-between px-5'>
                    <div className='w-1/2'>
                        <p className='' style={{ fontSize: 27, marginBottom: 12 }}>Business Type</p>
                        {error && <p className='text-red-500'>{error}</p>}
                        <div>
                            <Radio.Group value={selected} onChange={setSelected} defaultValue="1">
                                <Radio value="1" description="Customers can purchase products through your website" className='text-center justify-center border-2 rounded-lg px-3 py-2' isSquared>
                                    <p className='text-lg font-semibold'>Business Owner</p>
                                </Radio>
                                <Radio value="2" description="Coming Soon..." className='text-center justify-center border-2 rounded-lg px-3 py-2' isSquared isDisabled>
                                    <p className='text-lg font-semibold'>Freelancer</p>
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
