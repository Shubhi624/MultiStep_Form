import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import image from './images/page3.jpg'
import ProgressBar from '@ramonak/react-progress-bar'
import { BsChevronLeft } from 'react-icons/bs';

const Third = () => {
    const [progress, setProgress] = useState(30);

    const handleClick = () => {
        setProgress(50);
    }
    return (
        <div className='mt-4 d-flex flex-column' onMouseMove={handleClick}>
            <div className='d-flex justify-content-center'>
                <Link to='/step2'>
                    <BsChevronLeft size={20} style={{ color: "black" }} />
                </Link>
                <div className='w-75 d-flex flex-column justify-content-center' style={{ height: "30px" }}>
                    <ProgressBar completed={progress} bgColor='green' isLabelVisible={false} height='5px' />
                </div>
            </div>
            <div className="container fifth-container">
                <div className='IHP d-flex m-lg-5 p-lg-5 justify-content-center-md'>
                    <img className='imgsize' src={image} width='400px' />
                <div className='d-flex flex-column justify-content-center pe-lg-5 me-lg-5'>
                    <h1 className='content mb-4 fs-1 fw-bold'>You're in the right place</h1>
                    <p className='fs-5'>Brilliant gets you hands-on to help improve your professional skills and knowledge. You'll interact with concepts and solve fun problems in math, science, and computer science.</p>
                </div>
                </div>
                <div className='d-flex justify-content-center'>
                    <Link to='/step4'>
                        <button type='button' className='btn btn-dark px-5'>Continue</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Third
