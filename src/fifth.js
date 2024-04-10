import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import image from './images/page5.jpg';
import ProgressBar from '@ramonak/react-progress-bar';
import { BsChevronLeft } from 'react-icons/bs';
import StarRatings from 'react-star-ratings';

const Fifth = () => {
  const [rating, setRating] = useState(0);
  const [progress, setProgress] = useState(70);

  const handleClick = () => {
    setProgress(100);
  }

  return (
    <div className='mt-4 d-flex flex-column' onClick={handleClick}>
      <div className='d-flex justify-content-center'>
        <Link to='/step4'>
          <BsChevronLeft size={20} style={{ color: "black"}} />
        </Link>
        <div className='w-75 d-flex flex-column justify-content-center' style={{height:"30px"}}>
          <ProgressBar completed={progress} bgColor='green' isLabelVisible={false} height='5px' />
        </div>
      </div>
      <div className="container">
        <div className='d-flex m-5 p-5'>
          <img src={image} alt="Page 5" width='400px' />
          <div className='d-flex flex-column justify-content-center pe-5 me-5 ms-2'>
            <h1 className='mb-4 fs-1 fw-bold'>You're on your way!</h1>
            <StarRatings changeRating={setRating} starDimension='30px' rating={rating} starRatedColor='yellow' starHoverColor='yellow' starSpacing='3px' />
            <p className='fs-5 mb-4 fst-italic mt-2'>"Through its engaging and well-structured courses, Brilliant has taught me mathematical concepts that I previously struggled to understand. I now feel confident approaching both technical job interviews and real-world problem-solving situations."</p>
            <span className='fs-5'>-Jacob S.</span>
          </div>
        </div>
        <div className='d-flex justify-content-center'>
          <Link to={'/step6'}>
            <button type='button' className='btn btn-dark px-5'>Continue</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Fifth;