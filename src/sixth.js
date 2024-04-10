import React, { useEffect } from 'react'
import { TailSpin } from 'react-loader-spinner'
import { useNavigate } from 'react-router-dom'

const Sixth = () => {
const nav = useNavigate();
    useEffect(()=>{
        setTimeout(() => {
            nav('/step7');
        }, 1000);
    },[])

    return (
        <div className="container d-flex justify-content-center align-items-center vh-100">
            <div className='w-50 text-center'>
                <div className='mb-5 d-flex justify-content-center align-items-center'>
                    <TailSpin color='yellow' strokeWidth='5px'/>
                </div>
                <h1 className='mb-4 fs-3 fw-bold text-center'>
                    Finding learning path recommendations for you based on your responses
                </h1>
            </div>
        </div>
    )
}

export default Sixth
