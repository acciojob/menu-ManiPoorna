import React, { useState } from 'react'
import data from "../Data/data";

const Menu = () => {

    let [items,setItems] = useState(data);

    function filterItems(e){
        console.log(e)
        if(e == "all"){
            setItems(data);
            return;
        }
        const filteredData = data.filter((item)=>{
            return item.category === e
        })
        setItems(filteredData);
    }
    return (
    <div>
        <h1 className='heading'>Our Menu</h1>
        <ul type='none'>
            <li onClick={(e)=>filterItems("all")} value="all">All</li>
            <li onClick={(e)=>filterItems("breakfast")}>Breakfast</li>
            <li onClick={(e)=>filterItems("lunch")}>Lunch</li>
            <li onClick={(e)=>filterItems("shakes")} >Shakes</li>
        </ul>
        <div className='container'>
            {
                items.map((item,index)=>(
                    <div key={index} className='item'>
                        <div className='left'>
                            <img src="" alt='image' />
                        </div>
                        <div className='right'>
                            <div className='top'>
                                <b>{item.title}</b>
                                <p>$ {item.price}</p>
                            </div>
                            <div className="bottom">
                                <p className='desc'>{item.desc}</p>
                            </div>
                        </div>
                    </div>
                ))
            }
        
        </div>

    </div>
  )
}

export default Menu