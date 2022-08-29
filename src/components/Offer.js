import React from 'react';

const Offer = ({src,link,index}) => {
  return <a href={link} i> <img src={src} alt={`${index} offersss`} /></a>
};

export default Offer;
