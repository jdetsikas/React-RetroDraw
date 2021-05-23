import React, { useState, useEffect } from 'react';
import Header from './Header';
import Palette from './Palette';
import Grid from './Grid';
import ActionPanel from './ActionPanel';
import { COLORS, buildCellList } from '../utils';

// src/components/App.js
const getCellListFromLocal = () => {
  let cellList = JSON.parse(localStorage.getItem('cellList'));

  if (cellList) {
    return cellList;
  }

  return buildCellList();
}

const setCellListOnLocal = (cellList) => {
  localStorage.setItem('cellList', JSON.stringify(cellList));
}

const App = () => {
  const [activeColor, setActiveColor] = useState(COLORS[0])
  const [cellList, _setCellList] = useState([])

  function setCellList(newCellList) {
    setCellListOnLocal(newCellList);
    _setCellList(newCellList);
  }

  useEffect( () => {_setCellList( getCellListFromLocal([]) )}, [] );
  return <div className="app">
    {/* Header needs no props */}
    <Header />
    {/* Palette needs to be passed activeColor and setActiveColor */}
    <Palette activeColor={activeColor} setActiveColor={setActiveColor}/>
    {/* Grid needs to be passed activeColor, cellList, and setCellList */}
    <Grid activeColor={activeColor} cellList={cellList} setCellList={setCellList}/>
    {/* ActionPanel needs to be passed activeColor, cellList, and setCellList */}
    <ActionPanel activeColor={activeColor} cellList={cellList} setCellList={setCellList}/>
  </div>
}

export default App;