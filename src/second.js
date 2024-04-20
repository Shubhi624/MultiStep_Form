import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ProgressBar from '@ramonak/react-progress-bar';
import { BsChevronLeft } from 'react-icons/bs';

const Second = () => {
    const [select, setSelect] = useState(0);
    const [progress, setProgress] = useState(15);

    const handleSelect = (value) => {
        setSelect(value);
        setProgress(30);
    }
    return (
        <div className='mt-4 d-flex flex-column'>
            <div className='d-flex justify-content-center'>
                <Link to='/'>
                    <BsChevronLeft size={20} style={{ color: "black"}} />
                </Link>
                <div className='w-75 d-flex flex-column justify-content-center' style={{height:"30px"}}>
                    <ProgressBar completed={progress} bgColor='green' isLabelVisible={false} height='5px' />
                </div>
            </div>
            <div className="container d-flex flex-column align-items-center mt-4">
                <h1 className='mb-4 fs-3 fw-bold'>Which are you most interested in ?</h1>
                <p className='mb-4 fs-6'>Choose just one, This will help us get you started (but won't limit your experience).</p>
                <div className="bsize d-flex flex-column">
                    <div className={`p-2 mb-3 border d-flex rounded ${select ===1? 'border-primary':''}`} style={{ cursor: 'pointer' }} onClick={() => handleSelect(1)}>
                        <img className='icon' src='https://cdn-icons-png.flaticon.com/128/2763/2763472.png' alt='graph' style={{ width: "35px" }}></img>
                        <p className='ps-2 pe-2'>Learning specific skills to advance my career</p>
                    </div>
                    <div className={`p-2 mb-3 border d-flex rounded ${select ===2? 'border-primary':''}`} style={{ cursor: 'pointer' }} onClick={() => handleSelect(2)}>
                        <img className='icon' src='https://cdn-icons-png.flaticon.com/128/3810/3810266.png' alt='graph' style={{ width: "35px" }}></img>
                        <p className='ps-2 pe-2'>Exploring new topics I'm interested in</p>
                    </div>
                    <div className={`p-2 mb-3 border d-flex rounded ${select ===3? 'border-primary':''}`} style={{ cursor: 'pointer' }} onClick={() => handleSelect(3)}>
                        <img className='icon' src='https://cdn-icons-png.flaticon.com/128/3300/3300017.png' alt='graph' style={{ width: "35px" }}></img>
                        <p className='ps-2 pe-2'>Refreshing my math foundations</p>
                    </div>
                    <div className={`p-2 mb-3 border d-flex rounded ${select ===4? 'border-primary':''}`} style={{ cursor: 'pointer' }} onClick={() => handleSelect(4)}>
                        <img className='icon' src='https://cdn-icons-png.flaticon.com/128/3176/3176324.png' alt='graph' style={{ width: "35px" }}></img>
                        <p className='ps-2 pe-2'>Exercising my brain to stay sharp</p>
                    </div>
                    <div className={`p-2 mb-3 border d-flex rounded ${select ===5? 'border-primary':''}`} style={{ cursor: 'pointer' }} onClick={() => handleSelect(5)}>
                        <img className='icon' src='https://cdn-icons-png.flaticon.com/128/599/599324.png' alt='graph' style={{ width: "35px" }}></img>
                        <p className='ps-2 pe-2'>Something else</p>
                    </div>
                </div>
                <div className='d-flex justify-content-center'>
                    <Link to='/step3' className='d-block mx-auto'>
                        <button type='button' className='btn btn-dark px-5'>Continue</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Second
