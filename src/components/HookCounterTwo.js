import React,{useState} from 'react'

function HookCounterTwo() {
    var intialcount=0;
    const [count, setstate] = useState(intialcount);
 const incrementFive=()=>
    {
        for(let i=0;i<5;i++){
            setstate(prevCount=>prevCount+1)
        }
    }
    return (
        <div>
            Count {count}
            <button onClick={()=>setstate(intialcount)}>Reset</button>
            <button  onClick={()=>setstate(prevCount=>prevCount+1)}>Increment</button>
            <button  onClick={()=>setstate(prevCount=>prevCount-1)}>Decrement</button>
            <button onClick={incrementFive}>incrementFive</button>
        </div>
    )
}

export default HookCounterTwo
