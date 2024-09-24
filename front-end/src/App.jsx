import { useState } from 'react'
import './App.css'
import Sidenav from './components/Sidenav'
import Channel from './components/Channel'

function App() {
  const channels = ["this-channel", "that-channel", "another-channel"];
  const [currChannel, setCurrChannel] = useState(channels[0]);

  return (
    <>
      <Sidenav channels={channels} setCurrChannel={setCurrChannel}/>
      {channels.map((name)=>
        <Channel name={name} display={name==currChannel}/>
      )}
    </>
  )
}

export default App
