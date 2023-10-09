import React, { useState } from 'react';
import Image from 'next/image';
import logo from '../../../public/devicelogo.svg';
import { useRouter } from 'next/router';
export default function SearchcByName() {
    const router = useRouter()
    const [name, setName] = useState('');
    const [error, setError] = useState('');
    const [Validation, setValidation] = useState(false);

    const handleClick = () => {
        if (name === 'Dan') {
            setValidation(true)
        } else if (!name) {
            setError('Enter name')
        } else {
            router.push('/admin/addBusiness/connectOnline')
        }
    }
    return (
        <>
            <div className='flex items-center justify-center h-full'>
                <div className='block sm:flex items-center justify-between px-5'>
                    <div>
                        <p className='' style={{ fontSize: 27, marginBottom: 12 }}>Track & Manage your businesses effectively</p>
                        <p style={{ fontSize: 15, marginBottom: 10, color: 'gray' }}>Enter a few business details to get started</p>
                        {error && <p className='text-red-500'>{error}</p>}
                        <input type='text' placeholder='Business Name' className='bg-gray-100 text-black w-full rounded-md py-3 px-2' value={name} onChange={(e) => { setName(e.target.value) }} />
                        {Validation ? <button className='text-white  bg-blue-600 w-full py-3 rounded-md mt-4' onClick={() => { alert('under Process') }}>View</button> : <button className='text-white  bg-blue-600 w-full py-3 rounded-md mt-4' onClick={handleClick}>Next</button>}
                    </div>
                    <div className='pt-10'>
                        <Image src={logo} className="mr-3 h-8 w-screen sm:h-9 " height={350} alt="Logo" />
                    </div>
                </div>
            </div>
        </>
    )
}
