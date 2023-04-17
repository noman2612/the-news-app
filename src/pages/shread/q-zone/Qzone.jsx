import React from 'react';
import img1 from'../../../assets/qZone1.png'
import img2 from'../../../assets/qZone2.png'
import img3 from'../../../assets/qZone3.png'
const Qzone = () => {
    return (
        <div className='text-center bg-secondary my-4 py-4'>
            <h4>Q-Zone</h4>
            <img src={img1} alt="" />
            <img src={img2} alt="" />
            <img src={img3} alt="" />
        </div>
    );
};

export default Qzone;