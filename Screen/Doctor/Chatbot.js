import React, { useState, useCallback, useEffect, Component } from 'react'
import { GiftedChat } from 'react-native-gifted-chat'
import { Dialogflow_V2} from 'react-native-dialogflow';
import {dialogflowConfig} from '../env'
 
export function Chatbot() {
  const [messages, setMessages] = useState([]);
 
  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'Hii my slef Dr. Thomas what kind of help you need',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
          avatar: 'https://placeimg.com/140/140/any',
        },
        
    },
    
])
}, [])



// componentDidMount()
// {
//     Dialogflow_V2.setConfiguration(
//         dialogflowConfig.client_email,
//         dialogflowConfig.private_key,
//         Dialogflow_V2.LANG_ENGLISH_US,
//         dialogflowConfig.project_id
//     );
// }


const onSend = useCallback((messages = []) => {
    setMessages(previousMessages => GiftedChat.append(previousMessages, messages))

}, [])

  return (
    <GiftedChat
      messages={messages}
      onSend={messages => onSend(messages)}
      user={{_id: 1,  }}
    />
  )
}