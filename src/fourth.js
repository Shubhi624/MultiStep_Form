import React, { useState } from 'react'
import Tex2SVG from 'react-hook-mathjax'
import { Link } from 'react-router-dom'
import ProgressBar from '@ramonak/react-progress-bar';
import { BsChevronLeft } from 'react-icons/bs';

const Fourth = () => {
    const [select, setSelect] = useState(0);
    const [progress, setProgress] = useState(50);

    const handleSelect = (value) => {
        setSelect(value);
        setProgress(70);
    }
    return (
        <div className='mt-4 d-flex flex-column'>
            <div className='d-flex justify-content-center'>
                <Link to='/step3'>
                    <BsChevronLeft size={20} style={{ color: "black"}} />
                </Link>
                <div className='w-75 d-flex flex-column justify-content-center' style={{height:"30px"}}>
                    <ProgressBar completed={progress} bgColor='green' isLabelVisible={false} height='5px' />
                </div>
            </div>
            <div className="container d-flex flex-column align-items-center mt-4">
                <h1 className='mb-4 fs-1 fw-bold'>What is your math comfort level?</h1>
                <p className='mb-4 fs-5'>Choose the highest level you feel confident in - you can always adjust later.</p>
                <div className="d-flex flex-wrap align-items-center justify-content-center">
                    <div className={`py-lg-3 m-2 card ${select ===1? 'border-primary':''}`} style={{ cursor: 'pointer', width: '14rem' }} onClick={() => handleSelect(1)}>
                        <div className="d-flex flex-column align-items-center justify-content-center card-body">
                            <Tex2SVG display="inline" latex="\\5 \times \frac{1}{2} = ?\\" />
                            <p className="fw-bold mt-4">Arithmetic</p>
                            <p>Introductory</p>
                        </div>
                    </div>
                    <div className={`py-lg-3 m-2 card ${select ===2? 'border-primary':''}`} style={{ cursor: 'pointer', width: '14rem' }} onClick={() => handleSelect(2)}>
                        <div className="d-flex flex-column align-items-center justify-content-center card-body">
                            <div className='mt-4'><Tex2SVG display="inline" latex="3x + 5 = 4" /></div>
                            <p className="fw-bold mt-4">Basic Algebra</p>
                            <p>Foundational</p>
                        </div>
                    </div>
                    <div className={`py-lg-3 m-2 card ${select ===3? 'border-primary':''}`} style={{ cursor: 'pointer', width: '14rem' }} onClick={() => handleSelect(3)}>
                        <div className="d-flex flex-column align-items-center justify-content-center card-body">
                            <Tex2SVG display="inline" latex="\\x = {-b \pm \sqrt{b^2-4ac} \over 2a}\\" />
                            <p className="fw-bold mt-4">Intermediate Algebra</p>
                            <p>Intermediate</p>
                        </div>
                    </div>
                    <div className={`py-lg-3 m-2 card ${select ===4? 'border-primary':''}`} style={{ cursor: 'pointer', width: '14rem' }} onClick={() => handleSelect(4)}>
                        <div className="d-flex flex-column align-items-center justify-content-center card-body">
                            <Tex2SVG display="block" latex="\int_{0}^{L} x^2 \, dx = ?" />
                            <p className="fw-bold mt-4">Calculus</p>
                            <p>Advanced</p>
                        </div>
                    </div>
                </div >
                <div className='d-flex justify-content-center mt-5'>
                    <Link to='/step5'>
                        <button type='button' className='btn btn-dark px-5'>Continue</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Fourth
