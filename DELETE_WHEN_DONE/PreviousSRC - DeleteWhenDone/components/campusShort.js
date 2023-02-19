import React from 'react';

export const CampusShort = ({ campus }) => (
  <div>
    <img src={campus.imageUrl} alt={`Photo of ${campus.name}`} />
    <span>{campus.name}</span>
  </div>
);
