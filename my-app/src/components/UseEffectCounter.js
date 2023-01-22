import React, {useState, useEffect} from 'react'

function UseEffectCounter() {
    const [count, setCount] = useState(0);
    const [time, setTime] = useState(0);
    useEffect(() => {
        document.title = count;
    }, [count]); //important to specify the useeffect dependency array to avoid updating all

    useEffect(() =>{
        const interval = setInterval(() => {
            setTime(time => time + 1)
        }, 1000);
    }, []);
  return (
    <div>
        <button onClick={
            () => setCount(count => count +1)
        }>
            Increment count ({count})
        </button>
        <h2>Time is {time}</h2>
    </div>
  )
}

export default UseEffectCounter