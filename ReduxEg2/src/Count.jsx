import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementByamount, reset } from './Redux/Counter';

function Count() {
    const[countnumber, setCountnumber] = useState(0)
    const count = useSelector((state) => state.counter.count) //or
    // const {count} = useSelector((state) => state.counter) 

    const dispatch = useDispatch();

    const addvalue = Number(countnumber) || 0; // since we to use input

    const resetAll = ()=> {
        setCountnumber(0);
        dispatch(reset());
        setNumber(0);
    }
    const[number, setNumber] =useState()
    const addAmount = () => {
        dispatch(incrementByamount(addvalue));
        setCountnumber('');
        setNumber(countnumber);
        
    }
    
    
  return (
    <div style={{display:'block', lineHeight:'3rem'}}>
        <h1>The Count is: {count}</h1>
        {/* <h1>The number typed is: {number}</h1> */}
         <div>
        {/* <button onClick={()=> dispatch(increment())}>increment</button>  */}
        <button onClick={()=> dispatch(decrement(countnumber))}>decrement</button>
        <button onClick={()=> dispatch(incrementByamount(Number(countnumber)))}>increment</button></div>
        {/* <button onClick={()=> dispatch(incrementByamount(5))}>increment by 5</button></div> */}
        <input type='text' value={countnumber} placeholder='type the number' onChange={(e) => setCountnumber(e.target.value)} />
        
        <div>
            {/* <button onClick={()=> dispatch(incrementByamount(addvalue)) }>add amount</button> */}
            {/* <button onClick={addAmount }>add amount</button> */}
            <button onClick={resetAll}>reset</button>
        </div>
    </div>
  )
}

export default Count