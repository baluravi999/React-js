import React,{useState,useEffect} from 'react'

function IntervalHook() {
    const [count, setCount] = useState(0)
    const tick=()=>{
        setCount(prvCount=>prvCount+1)
    }

     useEffect(() => {
        function doSomething(){
            console.log(someProp)
   }
     
            doSomething()
            const interval=setInterval(tick,1000);
            return ()=>{
                clearInterval(interval)
            }
            
        },[someProp])
    
    return (
        <div>
            {count}
        </div>
    )
}

export default IntervalHook
