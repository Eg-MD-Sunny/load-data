import React, { useEffect, useState } from 'react';
import Show from '../Show/Show';
import './Load.css';

const Load = () => {
    const [datas,setDatas] = useState([])
    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>setDatas(data))
    },[])
    return (
        <div>
            <h2>Load Component: {datas.length}</h2>
            {
                datas.map(singleData=><Show passingData={singleData}></Show>)
            }
        </div>
    );
};

export default Load;