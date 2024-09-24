import React from 'react'

function Sidenav({channels, setCurrChannel}) {
  return (
    <nav className="sidenav">
        {channels.map((channel)=>
            <button onClick={()=>setCurrChannel(channel)} className='navTab'>
                #{channel}
            </button>
        )}
    </nav>
  )
}

export default Sidenav