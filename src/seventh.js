import React, { useState } from 'react';
import image from './images/page7.jpg'

const Seventh = () => {
    const [select, setSelect] = useState(0);

    const handleSelect = (value) => {
        setSelect(value);
    }
    return (
        <div className="container d-flex flex-column  align-items-center mt-5 pt-5">
            <h1 className='mb-4 mt-5 pt-5 fs-1 fw-bold'>Learning paths based on your answers</h1>
            <p className='mb-4'>Choose one to get started. You can switch anytime.</p>
            <div className="d-flex">
                <div className={select === 1 ? 'border-primary py-3 card m-2' : `py-3 card m-2`} style={{ width: "30rem", cursor: 'pointer' }} onClick={() => handleSelect(1)}
                >
                    <span className="position-absolute top-0 start-50 translate-middle badge rounded-pill bg-warning">MOST POPULAR</span>
                    <div className="d-flex card-body">
                        <div className='d-flex flex-column me-4'>
                            <p className="fw-bold mt-4">Foundational Math</p>
                            <p>Build your foundational skills in algebra, geometry, and probability.</p>
                        </div>
                        <img src={image} width='150px' />
                    </div>
                </div>
                <div className={select === 2 ? 'border-primary py-3 card m-2' : `py-3 card m-2`} style={{ width: "30rem", cursor: 'pointer' }} onClick={() => handleSelect(2)}>
                    <div className="d-flex card-body">
                        <div className='d-flex flex-column me-4'>
                            <p className="fw-bold mt-4">Mathematical Thinking</p>
                            <p>Build your foundational skills in algebra, geometry, and probability.</p>
                        </div>
                        <img className="align-self-center" src={image} width='150px' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Seventh
