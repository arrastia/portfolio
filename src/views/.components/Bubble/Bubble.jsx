import React, { useState } from 'react';

import { Styles } from './Bubble.styles';

import './Bubble.css';

export const Bubble = ({ className, onClick }) => {
  const [exploted, setExploted] = useState(false);
  console.log('exploted :>> ', exploted);

  const onClickA = () => {
    setExploted(!exploted);
  };

  return (
    <>
      <Styles.Stage className={`${className} ${exploted ? 'exploted' : undefined}`} onClick={() => onClickA()} exploted>
        <span className={'exp'}></span>
        <Styles.Bubble className={`bubble`} />
      </Styles.Stage>
    </>
  );
};
