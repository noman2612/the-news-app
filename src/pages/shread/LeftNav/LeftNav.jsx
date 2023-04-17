import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftNav = () => {
    const[categoric,setCategoric] = useState([])
    useEffect(()=>{
        fetch('http://localhost:3000/categoric')
        .then(res=>res.json())
        .then(data=>setCategoric(data))
        .catch(error=>console.log(error))
    },[])
    return (
        <div>
            <h1>All Categoric</h1>
            {
                categoric.map(cat=><p key={cat.id}>

                    <Link to={`/category/${categoric.id}`} className='text-black text-decoration-none'>{cat.name}</Link>
                </p>)
            }
        </div>
    );
};

export default LeftNav;