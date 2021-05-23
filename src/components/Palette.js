import React from 'react';
import Cell from './Cell';
import { COLORS } from '../utils';


const Palette = (props) => {
  const {activeColor, setActiveColor} = props

  const paletteElement = 
      <div className="palette">
        {
          COLORS.map( (element, idx) => {
            return <Cell 
              key={ "palette-"+idx } 
              color={ element } 
              isActive={ element === activeColor ? true : false } 
              handleClick={ () => {setActiveColor(element)} }/>
          })
        }
      </div>

  return paletteElement
}

export default Palette;