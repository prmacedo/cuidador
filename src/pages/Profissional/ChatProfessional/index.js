import React, { useEffect, useState } from 'react';
import './styles.css';
import { BiSearch } from 'react-icons/bi';
import { FiSend } from 'react-icons/fi';
import { RecivedMessageRows, SendedMessageRows } from '../../../components/ChatRow';
import io from 'socket.io-client';

const socket = io('http://localhost:3333', {
  withCredentials: true,
});

socket.on('connect', () => {
  console.log('Connected!');
})

export function ChatProfessional() {
  const user1 = {
    id: 12365522,
    name: 'Paulo Macedo'
  }
  const user2 = {
    id: 40028922,
    name: 'Jayme Anunciação'
  }
  const [user, setUser] = useState(user1);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [chats, setChats] = useState([
    {
      id: '325446656',
      name: 'João Freitas',
      avatar: 'https://img.ibxk.com.br/2019/02/17/17124052466014.jpg?w=328'
    },
    {
      id: '854668855',
      name: 'Antônio Carlos Pereira Magalhães',
      avatar: 'https://s3.amazonaws.com/kp-blog/wp-content/uploads/2018/09/04153204/imagens-chamativas-rostos-felizes-relaxados-sorridentes.jpg'
    },
    {
      id: '112665466',
      name: 'Adriana Moreira',
      avatar: 'http://www.ignicaodigital.com.br/wp-content/uploads/2014/02/facebook-pessoas.jpg'
    },
    {
      id: '325445562',
      name: 'Ana Júlia Barbosa Duarte',
      avatar: 'https://s3.amazonaws.com/kp-blog/wp-content/uploads/2018/09/04153258/imagens-chamativas-pessoas-olhando-diretamente-para-camera.jpg'
    }
  ]);
  const [currentChat, setCurrentChat] = useState(0);
  const [opened, setOpened] = useState(false);
  const [searchChats, setSearchChats] = useState(chats);
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    async function handle(newMessage) {
      if (chats[currentChat].name === newMessage.chat_room)
        setMessages([...messages, newMessage])
    }
    socket.on('message', handle)
    return () => socket.off('message', handle);
  }, [messages])

  function submitMessage(event) {
    event.preventDefault();
    if (message.trim()) {
      socket.emit('message', {
        userId: user.id,
        message: message,
        userName: user.name,
        chat_room: chats[currentChat].name
      })
    }
    setMessage('');
  }

  function handleClick(index) {
    setCurrentChat(index);
    console.log(chats[index].name);
    socket.emit('select_room', {
      id: user.id,
      name: user.name,
      chat_room: chats[index].name,
    }, response => {
      console.log(response);
      setMessages(response);
    })
    setOpened(true);
  }

  function handleSearchChats() {
    let searchedChats = chats.filter(chat => {
      if (chat.name.includes(searchValue)) {
        console.log('true');
        return chat;
      }
    });
    setSearchChats(searchedChats);
  }

  return (
    <>
      <div id="chat" className="container">
        <button onClick={() => setUser(user2)}>Jayme Anunciação</button>
        <button onClick={() => setUser(user1)}>Paulo Macedo</button>
        {user.name}
        <div className="chat-container">
          <ul className="patients-list">
            <div className="search-space">
              <input name="search" placeholder="Pesquisar Chat"
                onChange={event => setSearchValue(event.target.value)}
                value={searchValue}
              />
              <button type="button" onClick={handleSearchChats}>
                <BiSearch size={23} color="#fff" />
              </button>
            </div>
            {
              searchChats.map((chat, index) => {
                return (
                  <li key={chat.id} style={index === currentChat ? { backgroundColor: '#F8F8FC' } : null} onClick={() => handleClick(index)}>
                    <img alt="avatar - João Freitas" src={chat.avatar} />
                    <p>{chat.name}</p>
                  </li>
                )
              })
            }
          </ul>
          {
            !opened ? (
              <div className="chat-banner">
                <h1>
                  Chat Interprofissional
                </h1>
                <h3>Compartilhe informações importantes sobre seus pacientes com outros profissionais para ter um melhor acompanhamento!</h3>
              </div>
            ) : (

              <div className="chat-content">
                <div className="chat-header">
                  <img alt="avatar - João Freitas" src={chats[currentChat].avatar} />
                  <p>{chats[currentChat].name}</p>
                </div>
                <div className="chat">
                  {
                    messages.map(message => {
                      return (
                        message.userId !== user.id ? (
                          <RecivedMessageRows key={message.id} message={message} />
                        ) : (
                          <SendedMessageRows key={message.id} message={message} />

                        )
                      )
                    })
                  }
                </div>
                <form onSubmit={submitMessage} className="chat-footer">
                  <input name="search" value={message} placeholder="Pesquisar Chat"
                    onChange={event => setMessage(event.target?.value)}
                  />
                  <button type="submit">
                    <FiSend size={23} color="#fff" />
                    Enviar
                  </button>
                </form>
              </div>
            )
          }
        </div>
      </div>
    </>
  )
}
