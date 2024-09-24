import {useState} from 'react'

function ChatInput({sendMessage}) {
    const [formData, setFormData] = useState({
        textInput:""
    })
    function handleChange(evt){
        setFormData({...formData,
            [evt.target.name]:evt.target.value
        })
    }
    function handleSubmit(evt){
        evt.preventDefault();
        if(formData.textInput===""){
            return;
        }

        const msgData = {
            username : "ExampleUser",
            icon: "/vite.svg",
            date: new Date(),
            content: formData.textInput
        }
        formData.textInput = "";
        sendMessage(msgData)
    }

  return (
    <form className="chatInput" onSubmit={handleSubmit}>
        <input type="text" className='textField' name="textInput"
        value={formData.textInput} onChange={handleChange}/>
        <button type="submit">Send</button>
    </form>
  )
}

export default ChatInput