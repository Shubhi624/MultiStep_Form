import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ProgressBar from '@ramonak/react-progress-bar';

const FirstPage = () => {
  const [select, setSelect] = useState(0);
  const [progress, setProgress] = useState(0);

  const handleSelect = (value) => {
    setSelect(value);
    setProgress(15);
  }
  return (
    <div className='mt-4 d-flex flex-column'>
      <div className='w-75 mx-auto d-flex flex-column justify-content-center' style={{height:"30px"}}>
        <ProgressBar completed={progress} bgColor='green' isLabelVisible={false} height='5px' />
      </div>
      <div className="container d-flex flex-column align-items-center mt-4">
        <h1 className='mb-4 fs-3 fw-bold'>Which describes you best ?</h1>
        <p className='mb-4 fs-6'>This will help us personalize your experience.</p>
        <div className="d-flex flex-column w-50" >
          <div className={select === 1 ? 'border-primary p-2 mb-3 border d-flex rounded' : `p-2 mb-3 border d-flex rounded`} style={{ cursor: 'pointer' }} onClick={() => handleSelect(1)}>
            <img src='https://cdn-icons-png.flaticon.com/128/3429/3429402.png' alt='std' style={{ width: "35px" }}></img>
            <p className='ps-2 pe-2 fw-semibold'>Student</p>
            <span className=''>or soon to be enrolled</span>
          </div>
          <div className={select === 2 ? 'border-primary p-2 mb-3 border d-flex rounded' : `p-2 mb-3 border d-flex rounded`} style={{ cursor: 'pointer' }} onClick={() => handleSelect(2)}>
            <img src='https://cdn-icons-png.flaticon.com/128/9316/9316730.png' alt='pro' style={{ width: "35px" }}></img>
            <p className='ps-2 pe-2 fw-semibold'>Professional</p>
            <span>pursuing a career</span>
          </div>
          <div className={select === 3 ? 'border-primary p-2 mb-3 border d-flex rounded' : `p-2 mb-3 border d-flex rounded`} style={{ cursor: 'pointer' }} onClick={() => handleSelect(3)}>
            <img src='https://cdn-icons-png.flaticon.com/128/2829/2829825.png' alt='parent' style={{ width: "35px" }}></img>
            <p className='ps-2 pe-2 fw-semibold'>Parent</p>
            <span>of a school-age child</span>
          </div>
          <div className={select === 4 ? 'border-primary p-2 mb-3 border d-flex rounded' : `p-2 mb-3 border d-flex rounded`} style={{ cursor: 'pointer' }} onClick={() => handleSelect(4)}>
            <img src='https://cdn-icons-png.flaticon.com/128/702/702010.png' alt='life' style={{ width: "35px" }}></img>
            <p className='ps-2 pe-2 fw-semibold'>Lifelong Learner</p>
          </div>
          <div className={select === 5 ? 'border-primary p-2 mb-3 border d-flex rounded' : `p-2 mb-3 border d-flex rounded`} style={{ cursor: 'pointer' }} onClick={() => handleSelect(5)}>
            <img src='https://cdn-icons-png.flaticon.com/128/3429/3429433.png' alt='teacher' style={{ width: "35px" }}></img>
            <p className='ps-2 pe-2 fw-semibold'>Teacher</p>
          </div>
          <div className={select === 6 ? 'border-primary p-2 mb-3 border d-flex rounded' : `p-2 mb-3 border d-flex rounded`} style={{ cursor: 'pointer' }} onClick={() => handleSelect(6)}>
            <img src='https://cdn-icons-png.flaticon.com/128/149/149071.png' alt='other' style={{ width: "35px" }}></img>
            <p className='ps-2 pe-2 fw-semibold'>Other</p>
          </div>
        </div>
        <div className='d-flex justify-content-center'>
          <Link to='/step2' className='d-block mx-auto'>
            <button type='button' className='btn btn-dark px-5'>Continue</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default FirstPage;
