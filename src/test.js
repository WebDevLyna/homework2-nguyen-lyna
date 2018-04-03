// photo.js
const Photo = (props) => (
  <div>
    <img src={props.imageUrl} />
  </div>
);

// album.js
import React from 'react';
import { Photo } from './components/photo';

export const Album = () => (
  <Photo imageUrl="not-yazan-on-the-beach.png"/>
);
