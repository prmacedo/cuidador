import React from 'react';
import './style.css';

export function RecivedMessageRows({ message }) {
  return (
    <div className="recived-row">
      <div className="message">
        <p>Dr. {message.userName}</p>
        <div>
          {message.message}
        </div>
        <span>{message.create_at}</span>
      </div>
    </div>
  )
}
export function SendedMessageRows({ message }) {
  return (
    <div className="sended-row">
      <div className="message">
        <div>
          {message.message}
        </div>
        <span>{message.create_at}</span>
      </div>
    </div>
  )
}