import React from 'react';
import { buildCellList } from '../utils';

const ActionPanel = (props) => {
  const {activeColor, cellList, setCellList} = props;
  const actionPanel = 
    <div className="action-panel">
		{/* Clear All Button */}	
			<button onClick={ () => {
				const newCellList = buildCellList(); 
				setCellList(newCellList);
				} }>clear all
			</button>
		{/* Fill All Button */}
			<button onClick={ () => {
				const newCellList = buildCellList();
				newCellList.forEach( (cell) => {cell.color = activeColor} );
				setCellList(newCellList);
				} }>fill all
			</button>
		{/* Fill Empty Button */}
			<button onClick={ () => {
				const newCellList = buildCellList();
				for (let i = 0; i < cellList.length; i++) {
					cellList[i].color ? newCellList[i].color = cellList[i].color : newCellList[i].color = activeColor;
				}
				setCellList(newCellList)
				} }>fill empty
			</button>
    </div>
  return actionPanel
}

export default ActionPanel;