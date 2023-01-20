import React from 'react'

function EventsFunctional() {

    function clickHandler(){
        console.log("Clicked func btn")
    }

  return (
    <div>
      <button onClick={clickHandler}>click me - func component</button>
    </div>
  )
}

export default EventsFunctional