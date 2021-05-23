import React from 'react';
import Cell from './Cell';


const Grid = (props) => {
  const {activeColor, cellList, setCellList} = props;
  const grid = 
    <div className="grid">
      { cellList.map((element, idx) => {
          return <Cell 
            key={idx}
            color={ element.color } 
            handleClick={ () => {
                const newCellList = cellList.map( (cell) => {return cell})
                newCellList[idx].color = activeColor
                setCellList(newCellList)
            } }/>
        }) 
      }
    </div>

  return grid
}

export default Grid;