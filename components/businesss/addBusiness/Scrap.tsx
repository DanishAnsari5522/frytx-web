import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import logo from '../../../public/devicelogo.svg';
import { useRouter } from 'next/router';
import { Loading } from '@nextui-org/react';
import OverlayLoading from '../../overlayLoading';



export default function Scrap() {
    const router = useRouter()
    const data = router.query;
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MjJlOGQwNzNlNzM4ZWVhZTAyZjY0ZiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4NDg0MzU4OH0.O1q0hbTA_T9ITgDBX3YySJncinlXWLt_v5dYIqzZBmE';


    const [url, setUrl] = useState('');
    const [error, setError] = useState('');
    const [validation, setValidation] = useState(false)
    
    // const [token, setToken] = useState('')

    const handleClick = () => {
        if (!url) {
            setError('Enter Url')
        } else if (data.name === 'indiaMart') {
            IndiaMart(url)
        } else if (data.name === 'google') {
            Google(url)
        } else if (data.name === 'facebook') {
            Facebook(url)
        }
    }

    const IndiaMart = async (urls: String) => {
        setValidation(true)
        let result = await fetch('https://frytx-backend.onrender.com/v1/reviews/indiamartReviews', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({ url: urls })
        }).then(res => res.json()).then(
            async data => {
                if (data.status == false) {
                    setValidation(false)
                    console.log(JSON.stringify(data));

                    console.log(JSON.stringify(data.error));
                    setError(JSON.stringify(data.error));
                } else if (data.status == true) {
                    console.log("done zanish");
                    router.push('/admin/business')
                }
            }
        )
    }

    const Google = async (urls: string) => {
        // alert(urls + 'google')
        setValidation(true)
        let result = await fetch('https://frytx-backend.onrender.com/v1/reviews/googleReviews', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({ url: urls })
        }).then(res => res.json()).then(
            async data => {
                if (data.status == false) {
                    setValidation(false)
                    console.log(JSON.stringify(data));
                    if (!data.error) {
                        setError(data.error);
                    } else {
                        setError("Enter Valid Url")
                    }
                } else if (data.status == true) {
                    console.log("done zanish");
                    router.push('/admin/business')
                }
            }
        )
    }

    const Facebook = (urls: string) => {
        alert(urls + 'fb')
    }

    useEffect(() => {
        let auth = localStorage.getItem('user');
        if (auth) {
            console.log(JSON.parse(auth).token);
            // setToken(JSON.parse(auth).token)
        }
    }, [])
    return (
        <>
            {validation&&<OverlayLoading />}
            <div className='flex items-center justify-center h-full'>
                <div className='block sm:flex items-center justify-between px-5'>
                    <div>
                        <p className='' style={{ fontSize: 27, marginBottom: 12 }}>Track & Manage your businesses effectively</p>
                        <p style={{ fontSize: 15, marginBottom: 10, color: 'gray' }}>Enter a few business details to get started</p>
                        {error && <p className='text-red-500'>{error}</p>}
                        <input type='text' placeholder='Enter Url' className='bg-gray-100 text-black w-full rounded-md py-3 px-2' value={url} onChange={(e) => { setUrl(e.target.value) }} />
                        {!validation ? <button className='text-white  bg-blue-600 w-full py-3 rounded-md mt-4' onClick={handleClick}>Add</button> : <Loading type="spinner" size="lg" color='white' className='text-white  bg-blue-600 w-full py-3 rounded-md mt-4' />}
                    </div>
                    <div className='pt-10'>
                        <Image src={logo} className="mr-3 h-8 w-screen sm:h-9 " height={350} alt="Logo" />
                    </div>
                </div>
            </div>
        </>
    )
}





