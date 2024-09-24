import { useState} from 'react'
import ChatDisplay from './ChatDisplay'
import ChatInput from './ChatInput'

function Channel({name, display}) {
    const [messages, setMessages] = useState([]);

    function sendMessage(newMsg){
        setMessages([...messages, newMsg])
    }

    return (
        display&&
        <main className='channel'>
            <h2>#{name}</h2>
            <ChatDisplay messages={messages} channel={name}/>
            <ChatInput sendMessage={sendMessage}/>
        </main>
    )
}

export default Channel