import React from 'react'

function UserMessage(props) {
  return (
    <div>
          {props.isLoggedIn ? (
                    <div> 
                        <p>Do this</p>
                        <ol>
                            <li>Confirm email</li>
                            <li>Complete Profile</li>
                        </ol>
                    </div>
                ) : (<p>Please sign in</p>)}
    </div>
  )
}

export default UserMessage