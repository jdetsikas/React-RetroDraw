import React from 'react';

const Cell = (props) => {
  const {color, isActive, handleClick} = props
  const cellDiv = <div className={`cell${isActive ? " active" : ""}`}
                  style={{backgroundColor: color}}
                  onClick={handleClick} ></div>

  return cellDiv
}

export default Cell;