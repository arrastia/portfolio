import React, { Fragment } from 'react';

import { Styles } from './Button.styles';

export const Button = ({ className, disabled, icon, label, onClick, onDoubleClick, style }) => {
  const renderIcon = () => (icon ? <Styles.Icon>{icon}</Styles.Icon> : <Fragment />);
  const renderLabel = () => (label ? <Styles.Text>{label}</Styles.Text> : <Fragment />);

  return (
    <Styles.Button className={className} disabled={disabled} onClick={onClick} onDoubleClick={onDoubleClick} style={style}>
      {renderIcon()}
      {renderLabel()}
    </Styles.Button>
  );
};
