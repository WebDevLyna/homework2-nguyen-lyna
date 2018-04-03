import React from 'react';
import './avatar.css';

export const Avatar = (props) => (
  <div className="avatar">
    <img className="avatar__img" src={props.avatarUrl} alt="avatar"/>
    <button>Like Me</button>
  </div>
);
